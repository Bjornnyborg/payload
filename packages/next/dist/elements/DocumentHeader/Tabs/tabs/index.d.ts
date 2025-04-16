import type { DocumentTabConfig } from 'payload';
import type React from 'react';
export declare const documentViewKeys: string[];
export type DocumentViewKey = (typeof documentViewKeys)[number];
export declare const tabs: Record<DocumentViewKey, {
    order?: number;
    Pill_Component?: React.FC;
} & DocumentTabConfig>;
//# sourceMappingURL=index.d.ts.map