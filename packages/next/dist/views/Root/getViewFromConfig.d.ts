import type { AdminViewServerProps, DocumentSubViewTypes, ImportMap, PayloadComponent, SanitizedConfig, ServerPropsFromView, ViewTypes } from 'payload';
import type React from 'react';
import type { initPage } from '../../utilities/initPage/index.js';
export type ViewFromConfig = {
    Component?: React.FC<AdminViewServerProps>;
    payloadComponent?: PayloadComponent<AdminViewServerProps>;
};
type GetViewFromConfigArgs = {
    adminRoute: string;
    config: SanitizedConfig;
    currentRoute: string;
    importMap: ImportMap;
    searchParams: {
        [key: string]: string | string[];
    };
    segments: string[];
};
type GetViewFromConfigResult = {
    DefaultView: ViewFromConfig;
    documentSubViewType?: DocumentSubViewTypes;
    initPageOptions: Parameters<typeof initPage>[0];
    serverProps: ServerPropsFromView;
    templateClassName: string;
    templateType: 'default' | 'minimal';
    viewType?: ViewTypes;
};
export declare const getViewFromConfig: ({ adminRoute, config, currentRoute, importMap, searchParams, segments, }: GetViewFromConfigArgs) => GetViewFromConfigResult;
export {};
//# sourceMappingURL=getViewFromConfig.d.ts.map