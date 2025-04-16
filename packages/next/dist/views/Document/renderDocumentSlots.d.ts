import type { DefaultServerFunctionArgs, DocumentSlots, PayloadRequest, SanitizedCollectionConfig, SanitizedDocumentPermissions, SanitizedGlobalConfig } from 'payload';
export declare const renderDocumentSlots: (args: {
    collectionConfig?: SanitizedCollectionConfig;
    globalConfig?: SanitizedGlobalConfig;
    hasSavePermission: boolean;
    permissions: SanitizedDocumentPermissions;
    req: PayloadRequest;
}) => DocumentSlots;
export declare const renderDocumentSlotsHandler: (args: {
    collectionSlug: string;
} & DefaultServerFunctionArgs) => Promise<DocumentSlots>;
//# sourceMappingURL=renderDocumentSlots.d.ts.map