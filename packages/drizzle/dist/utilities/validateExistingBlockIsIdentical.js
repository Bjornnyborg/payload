import { InvalidConfiguration } from 'payload';
import { fieldAffectsData, fieldHasSubFields, fieldShouldBeLocalized, tabHasName } from 'payload/shared';
const getFlattenedFieldNames = (args)=>{
    const { fields, parentIsLocalized, prefix = '' } = args;
    return fields.reduce((fieldsToUse, field)=>{
        let fieldPrefix = prefix;
        if ([
            'array',
            'blocks',
            'relationship',
            'upload'
        ].includes(field.type) || 'hasMany' in field && field.hasMany === true) {
            return fieldsToUse;
        }
        if (fieldHasSubFields(field)) {
            fieldPrefix = 'name' in field ? `${prefix}${field.name}_` : prefix;
            return [
                ...fieldsToUse,
                ...getFlattenedFieldNames({
                    fields: field.fields,
                    parentIsLocalized: parentIsLocalized || 'localized' in field && field.localized,
                    prefix: fieldPrefix
                })
            ];
        }
        if (field.type === 'tabs') {
            return [
                ...fieldsToUse,
                ...field.tabs.reduce((tabFields, tab)=>{
                    fieldPrefix = 'name' in tab ? `${prefix}_${tab.name}` : prefix;
                    return [
                        ...tabFields,
                        ...tabHasName(tab) ? [
                            {
                                ...tab,
                                type: 'tab'
                            }
                        ] : getFlattenedFieldNames({
                            fields: tab.fields,
                            parentIsLocalized: parentIsLocalized || tab.localized,
                            prefix: fieldPrefix
                        })
                    ];
                }, [])
            ];
        }
        if (fieldAffectsData(field)) {
            return [
                ...fieldsToUse,
                {
                    name: `${fieldPrefix}${field.name}`,
                    localized: fieldShouldBeLocalized({
                        field,
                        parentIsLocalized
                    })
                }
            ];
        }
        return fieldsToUse;
    }, []);
};
export const validateExistingBlockIsIdentical = ({ block, localized, parentIsLocalized, rootTableName, table, tableLocales })=>{
    const fieldNames = getFlattenedFieldNames({
        fields: block.fields,
        parentIsLocalized: parentIsLocalized || localized
    });
    const missingField = // ensure every field from the config is in the matching table
    fieldNames.find(({ name, localized })=>{
        const fieldTable = localized && tableLocales ? tableLocales : table;
        return Object.keys(fieldTable.columns).indexOf(name) === -1;
    }) || // ensure every table column is matched for every field from the config
    Object.keys(table).find((fieldName)=>{
        if (![
            '_locale',
            '_order',
            '_parentID',
            '_path',
            '_uuid'
        ].includes(fieldName)) {
            return fieldNames.findIndex((field)=>field.name) === -1;
        }
    });
    if (missingField) {
        throw new InvalidConfiguration(`The table ${rootTableName} has multiple blocks with slug ${block.slug}, but the schemas do not match. One block includes the field ${typeof missingField === 'string' ? missingField : missingField.name}, while the other block does not.`);
    }
    if (Boolean(localized) !== Boolean(table.columns._locale)) {
        throw new InvalidConfiguration(`The table ${rootTableName} has multiple blocks with slug ${block.slug}, but the schemas do not match. One is localized, but another is not. Block schemas of the same name must match exactly.`);
    }
};

//# sourceMappingURL=validateExistingBlockIsIdentical.js.map