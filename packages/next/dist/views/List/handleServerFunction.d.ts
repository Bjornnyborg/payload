import type { ListPreferences, ListQuery, PayloadRequest } from 'payload';
type RenderListResult = {
    List: React.ReactNode;
    preferences: ListPreferences;
};
export declare const renderListHandler: (args: {
    collectionSlug: string;
    disableActions?: boolean;
    disableBulkDelete?: boolean;
    disableBulkEdit?: boolean;
    disableQueryPresets?: boolean;
    documentDrawerSlug: string;
    drawerSlug?: string;
    enableRowSelections: boolean;
    overrideEntityVisibility?: boolean;
    query: ListQuery;
    redirectAfterDelete: boolean;
    redirectAfterDuplicate: boolean;
    req: PayloadRequest;
}) => Promise<RenderListResult>;
export {};
//# sourceMappingURL=handleServerFunction.d.ts.map