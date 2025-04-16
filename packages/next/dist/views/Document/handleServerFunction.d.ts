import type { Data, DocumentPreferences, FormState, Locale, PayloadRequest } from 'payload';
type RenderDocumentResult = {
    data: any;
    Document: React.ReactNode;
    preferences: DocumentPreferences;
};
export declare const renderDocumentHandler: (args: {
    collectionSlug: string;
    disableActions?: boolean;
    docID: string;
    drawerSlug?: string;
    initialData?: Data;
    initialState?: FormState;
    locale?: Locale;
    overrideEntityVisibility?: boolean;
    redirectAfterCreate?: boolean;
    redirectAfterDelete: boolean;
    redirectAfterDuplicate: boolean;
    req: PayloadRequest;
}) => Promise<RenderDocumentResult>;
export {};
//# sourceMappingURL=handleServerFunction.d.ts.map