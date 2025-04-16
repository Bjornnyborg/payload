import type { UpdateGlobalArgs } from 'payload';
import type { DrizzleAdapter } from './types.js';
export declare function updateGlobal<T extends Record<string, unknown>>(this: DrizzleAdapter, { slug, data, req, select, returning }: UpdateGlobalArgs): Promise<T>;
//# sourceMappingURL=updateGlobal.d.ts.map