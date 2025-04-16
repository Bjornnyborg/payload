import { fieldShouldBeLocalized } from 'payload/shared';
import toSnakeCase from 'to-snake-case';
import { traverseFields } from './traverseFields.js';
export const transformBlocks = ({ adapter, baseTableName, blocks, blocksToDelete, data, field, locale, numbers, parentIsLocalized, path, relationships, relationshipsToDelete, selects, texts, withinArrayOrBlockLocale })=>{
    data.forEach((blockRow, i)=>{
        if (typeof blockRow.blockType !== 'string') {
            return;
        }
        const matchedBlock = adapter.payload.blocks[blockRow.blockType] ?? (field.blockReferences ?? field.blocks).find((block)=>typeof block !== 'string' && block.slug === blockRow.blockType);
        if (!matchedBlock) {
            return;
        }
        const blockType = toSnakeCase(blockRow.blockType);
        if (!blocks[blockType]) {
            blocks[blockType] = [];
        }
        const newRow = {
            arrays: {},
            locales: {},
            row: {
                _order: i + 1,
                _path: `${path}${field.name}`
            }
        };
        if (fieldShouldBeLocalized({
            field,
            parentIsLocalized
        }) && locale) {
            newRow.row._locale = locale;
        }
        if (withinArrayOrBlockLocale) {
            newRow.row._locale = withinArrayOrBlockLocale;
        }
        const blockTableName = adapter.tableNameMap.get(`${baseTableName}_blocks_${blockType}`);
        const hasUUID = adapter.tables[blockTableName]._uuid;
        // If we have declared a _uuid field on arrays,
        // that means the ID has to be unique,
        // and our ids within arrays are not unique.
        // So move the ID to a uuid field for storage
        // and allow the database to generate a serial id automatically
        if (hasUUID) {
            newRow.row._uuid = blockRow.id;
            delete blockRow.id;
        }
        traverseFields({
            adapter,
            arrays: newRow.arrays,
            baseTableName,
            blocks,
            blocksToDelete,
            columnPrefix: '',
            data: blockRow,
            fieldPrefix: '',
            fields: matchedBlock.flattenedFields,
            insideArrayOrBlock: true,
            locales: newRow.locales,
            numbers,
            parentIsLocalized: parentIsLocalized || field.localized,
            parentTableName: blockTableName,
            path: `${path || ''}${field.name}.${i}.`,
            relationships,
            relationshipsToDelete,
            row: newRow.row,
            selects,
            texts,
            withinArrayOrBlockLocale
        });
        blocks[blockType].push(newRow);
    });
};

//# sourceMappingURL=blocks.js.map