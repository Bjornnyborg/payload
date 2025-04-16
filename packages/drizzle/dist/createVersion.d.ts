import type { CreateVersionArgs, TypeWithID, TypeWithVersion } from 'payload';
import type { DrizzleAdapter } from './types.js';
export declare function createVersion<T extends TypeWithID>(this: DrizzleAdapter, { autosave, collectionSlug, createdAt, parent, publishedLocale, req, select, snapshot, updatedAt, versionData, returning, }: CreateVersionArgs<T>): Promise<TypeWithVersion<T>>;
//# sourceMappingURL=createVersion.d.ts.map