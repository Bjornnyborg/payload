import type { BaseJob } from '../config/types/workflowTypes.js';
/**
 * Our payload operations sanitize the input data to, for example, add missing IDs to array rows.
 * This function is used to manually sanitize the data for direct db adapter operations
 */
export declare function sanitizeUpdateData({ data }: {
    data: Partial<BaseJob>;
}): Partial<BaseJob>;
//# sourceMappingURL=sanitizeUpdateData.d.ts.map