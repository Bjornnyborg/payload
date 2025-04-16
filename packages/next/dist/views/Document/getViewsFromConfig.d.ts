import type { AdminViewServerProps, DocumentViewServerProps, PayloadComponent, SanitizedCollectionConfig, SanitizedCollectionPermission, SanitizedConfig, SanitizedGlobalConfig, SanitizedGlobalPermission } from 'payload';
import type React from 'react';
export type ViewFromConfig<TProps extends object> = {
    Component?: React.FC<TProps>;
    ComponentConfig?: PayloadComponent<TProps>;
};
export declare const getViewsFromConfig: ({ collectionConfig, config, docPermissions, globalConfig, overrideDocPermissions, routeSegments, }: {
    collectionConfig?: SanitizedCollectionConfig;
    config: SanitizedConfig;
    globalConfig?: SanitizedGlobalConfig;
    routeSegments: string[];
} & ({
    docPermissions: SanitizedCollectionPermission | SanitizedGlobalPermission;
    overrideDocPermissions?: false | undefined;
} | {
    docPermissions?: never;
    overrideDocPermissions: true;
})) => {
    CustomView: ViewFromConfig<DocumentViewServerProps>;
    DefaultView: ViewFromConfig<DocumentViewServerProps>;
    /**
     * The error view to display if CustomView or DefaultView do not exist (could be either due to not found, or unauthorized). Can be null
     */
    ErrorView: ViewFromConfig<AdminViewServerProps>;
    viewKey: string;
} | null;
//# sourceMappingURL=getViewsFromConfig.d.ts.map