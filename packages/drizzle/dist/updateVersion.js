import { buildVersionCollectionFields } from 'payload';
import toSnakeCase from 'to-snake-case';
import buildQuery from './queries/buildQuery.js';
import { upsertRow } from './upsertRow/index.js';
import { getTransaction } from './utilities/getTransaction.js';
export async function updateVersion({ id, collection, locale, req, select, versionData, where: whereArg, returning }) {
    const db = await getTransaction(this, req);
    const collectionConfig = this.payload.collections[collection].config;
    const whereToUse = whereArg || {
        id: {
            equals: id
        }
    };
    const tableName = this.tableNameMap.get(`_${toSnakeCase(collectionConfig.slug)}${this.versionsSuffix}`);
    const fields = buildVersionCollectionFields(this.payload.config, collectionConfig, true);
    const { where } = buildQuery({
        adapter: this,
        fields,
        locale,
        tableName,
        where: whereToUse
    });
    const result = await upsertRow({
        id,
        adapter: this,
        data: versionData,
        db,
        fields,
        joinQuery: false,
        operation: 'update',
        req,
        select,
        tableName,
        where,
        ignoreResult: returning === false
    });
    if (returning === false) {
        return null;
    }
    return result;
}

//# sourceMappingURL=updateVersion.js.map