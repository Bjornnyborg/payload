import type { CreateGlobalVersionArgs, TypeWithID, TypeWithVersion } from 'payload';
import type { DrizzleAdapter } from './types.js';
export declare function createGlobalVersion<T extends TypeWithID>(this: DrizzleAdapter, { autosave, createdAt, globalSlug, publishedLocale, req, select, snapshot, updatedAt, versionData, returning, }: CreateGlobalVersionArgs): Promise<TypeWithVersion<T>>;
//# sourceMappingURL=createGlobalVersion.d.ts.map