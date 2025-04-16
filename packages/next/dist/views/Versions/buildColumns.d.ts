import type { I18n } from '@payloadcms/translations';
import type { Column, PaginatedDocs, SanitizedCollectionConfig, SanitizedConfig, SanitizedGlobalConfig, TypeWithVersion } from 'payload';
export declare const buildVersionColumns: ({ collectionConfig, docID, docs, globalConfig, i18n: { t }, latestDraftVersion, latestPublishedVersion, }: {
    collectionConfig?: SanitizedCollectionConfig;
    config: SanitizedConfig;
    docID?: number | string;
    docs: PaginatedDocs<TypeWithVersion<any>>["docs"];
    globalConfig?: SanitizedGlobalConfig;
    i18n: I18n;
    latestDraftVersion?: string;
    latestPublishedVersion?: string;
}) => Column[];
//# sourceMappingURL=buildColumns.d.ts.map