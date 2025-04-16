import type { SQL, Table } from 'drizzle-orm';
import type { FlattenedField, Where } from 'payload';
import type { DrizzleAdapter, GenericColumn } from '../types.js';
import type { BuildQueryJoinAliases } from './buildQuery.js';
type Args = {
    adapter: DrizzleAdapter;
    aliasTable?: Table;
    fields: FlattenedField[];
    joins: BuildQueryJoinAliases;
    locale?: string;
    parentIsLocalized: boolean;
    selectFields: Record<string, GenericColumn>;
    selectLocale?: boolean;
    tableName: string;
    where: Where;
};
export declare function parseParams({ adapter, aliasTable, fields, joins, locale, parentIsLocalized, selectFields, selectLocale, tableName, where, }: Args): SQL;
export {};
//# sourceMappingURL=parseParams.d.ts.map