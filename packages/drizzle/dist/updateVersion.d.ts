import type { TypeWithID, TypeWithVersion, UpdateVersionArgs } from 'payload';
import type { DrizzleAdapter } from './types.js';
export declare function updateVersion<T extends TypeWithID>(this: DrizzleAdapter, { id, collection, locale, req, select, versionData, where: whereArg, returning, }: UpdateVersionArgs<T>): Promise<TypeWithVersion<T>>;
//# sourceMappingURL=updateVersion.d.ts.map