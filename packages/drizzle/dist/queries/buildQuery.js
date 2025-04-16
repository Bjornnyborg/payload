import { buildOrderBy } from './buildOrderBy.js';
import { parseParams } from './parseParams.js';
const buildQuery = function buildQuery({ adapter, aliasTable, fields, joins = [], locale, parentIsLocalized, selectLocale, sort, tableName, where: incomingWhere }) {
    const selectFields = {
        id: adapter.tables[tableName].id
    };
    const orderBy = buildOrderBy({
        adapter,
        aliasTable,
        fields,
        joins,
        locale,
        parentIsLocalized,
        selectFields,
        sort,
        tableName
    });
    let where;
    if (incomingWhere && Object.keys(incomingWhere).length > 0) {
        where = parseParams({
            adapter,
            aliasTable,
            fields,
            joins,
            locale,
            parentIsLocalized,
            selectFields,
            selectLocale,
            tableName,
            where: incomingWhere
        });
    }
    return {
        joins,
        orderBy,
        selectFields,
        where
    };
};
export default buildQuery;

//# sourceMappingURL=buildQuery.js.map