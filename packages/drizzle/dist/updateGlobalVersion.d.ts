import type { TypeWithID, TypeWithVersion, UpdateGlobalVersionArgs } from 'payload';
import type { DrizzleAdapter } from './types.js';
export declare function updateGlobalVersion<T extends TypeWithID>(this: DrizzleAdapter, { id, global, locale, req, select, versionData, where: whereArg, returning, }: UpdateGlobalVersionArgs<T>): Promise<TypeWithVersion<T>>;
//# sourceMappingURL=updateGlobalVersion.d.ts.map