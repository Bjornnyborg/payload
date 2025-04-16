import React from 'react';
type AutosaveCellProps = {
    latestDraftVersion?: string;
    latestPublishedVersion?: string;
    rowData?: {
        autosave?: boolean;
        publishedLocale?: string;
        version: {
            _status?: string;
        };
    };
};
export declare const renderPill: (data: any, latestVersion: any, currentLabel: any, previousLabel: any, pillStyle: any) => React.JSX.Element;
export declare const AutosaveCell: React.FC<AutosaveCellProps>;
export {};
//# sourceMappingURL=index.d.ts.map