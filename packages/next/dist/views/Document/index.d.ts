import type { AdminViewServerProps, Data } from 'payload';
import React from 'react';
import type { GenerateEditViewMetadata } from './getMetaBySegment.js';
export declare const generateMetadata: GenerateEditViewMetadata;
export declare const renderDocument: ({ disableActions, documentSubViewType, drawerSlug, importMap, initialData, initPageResult, overrideEntityVisibility, params, redirectAfterCreate, redirectAfterDelete, redirectAfterDuplicate, searchParams, viewType, }: {
    drawerSlug?: string;
    overrideEntityVisibility?: boolean;
    readonly redirectAfterCreate?: boolean;
    readonly redirectAfterDelete?: boolean;
    readonly redirectAfterDuplicate?: boolean;
} & AdminViewServerProps) => Promise<{
    data: Data;
    Document: React.ReactNode;
}>;
export declare function Document(props: AdminViewServerProps): Promise<React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | (string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>)>;
//# sourceMappingURL=index.d.ts.map