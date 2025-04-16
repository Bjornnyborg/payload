// @ts-strict-ignore
import { QueryError } from '../../errors/QueryError.js';
import { validOperatorSet } from '../../types/constants.js';
import { validateSearchParam } from './validateSearchParams.js';
const flattenWhere = (query)=>{
    const flattenedConstraints = [];
    for (const [key, val] of Object.entries(query)){
        if ((key === 'and' || key === 'or') && Array.isArray(val)) {
            for (const subVal of val){
                flattenedConstraints.push(...flattenWhere(subVal));
            }
        } else {
            flattenedConstraints.push({
                [key]: val
            });
        }
    }
    return flattenedConstraints;
};
export async function validateQueryPaths({ collectionConfig, errors = [], globalConfig, overrideAccess, policies = {
    collections: {},
    globals: {}
}, polymorphicJoin, req, versionFields, where }) {
    const fields = versionFields || (globalConfig || collectionConfig).flattenedFields;
    if (typeof where === 'object') {
        const whereFields = flattenWhere(where);
        // We need to determine if the whereKey is an AND, OR, or a schema path
        const promises = [];
        for (const constraint of whereFields){
            for(const path in constraint){
                for(const operator in constraint[path]){
                    const val = constraint[path][operator];
                    if (validOperatorSet.has(operator)) {
                        promises.push(validateSearchParam({
                            collectionConfig,
                            errors,
                            fields,
                            globalConfig,
                            operator,
                            overrideAccess,
                            path,
                            policies,
                            polymorphicJoin,
                            req,
                            val,
                            versionFields
                        }));
                    }
                }
            }
        }
        await Promise.all(promises);
        if (errors.length > 0) {
            throw new QueryError(errors);
        }
    }
}

//# sourceMappingURL=validateQueryPaths.js.map