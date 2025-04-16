import type { Field } from '../../fields/config/types.js';
import type { CollectionConfig } from '../../index.js';
/**
 * Sanitize fields for collections with auth config enabled.
 *
 * Should run on top level fields only.
 */
export declare const sanitizeAuthFields: (fields: Field[], config: CollectionConfig) => void;
/**
 * Sanitize fields for collections with upload config enabled.
 *
 * Should run on top level fields only.
 */
export declare const sanitizeUploadFields: (fields: Field[], config: CollectionConfig) => void;
//# sourceMappingURL=reservedFieldNames.d.ts.map