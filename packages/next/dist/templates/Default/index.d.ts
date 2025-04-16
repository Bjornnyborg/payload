import type { CustomComponent, DocumentSubViewTypes, ServerProps, ViewTypes, VisibleEntities } from 'payload';
import './index.scss';
import React from 'react';
export type DefaultTemplateProps = {
    children?: React.ReactNode;
    className?: string;
    collectionSlug?: string;
    docID?: number | string;
    documentSubViewType?: DocumentSubViewTypes;
    globalSlug?: string;
    viewActions?: CustomComponent[];
    viewType?: ViewTypes;
    visibleEntities: VisibleEntities;
} & ServerProps;
export declare const DefaultTemplate: React.FC<DefaultTemplateProps>;
//# sourceMappingURL=index.d.ts.map