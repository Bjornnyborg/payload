import type { ClientField } from 'payload';
import React from 'react';
import './index.scss';
type Props = {
    children: React.ReactNode;
    comparison: unknown;
    field?: never;
    fields: ClientField[];
    initCollapsed?: boolean;
    isIterable?: false;
    label: React.ReactNode;
    locales: string[] | undefined;
    parentIsLocalized: boolean;
    version: unknown;
} | {
    children: React.ReactNode;
    comparison?: unknown;
    field: ClientField;
    fields?: never;
    initCollapsed?: boolean;
    isIterable: true;
    label: React.ReactNode;
    locales: string[] | undefined;
    parentIsLocalized: boolean;
    version: unknown;
};
export declare const DiffCollapser: React.FC<Props>;
export {};
//# sourceMappingURL=index.d.ts.map