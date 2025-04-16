import type { DocumentEvent, FieldSchemaJSON } from 'payload';
export declare const mergeData: <T extends Record<string, any>>(args: {
    apiRoute?: string;
    collectionPopulationRequestHandler?: ({ apiPath, endpoint, serverURL, }: {
        apiPath: string;
        endpoint: string;
        serverURL: string;
    }) => Promise<Response>;
    depth?: number;
    externallyUpdatedRelationship?: DocumentEvent;
    fieldSchema: FieldSchemaJSON;
    incomingData: Partial<T>;
    initialData: T;
    locale?: string;
    returnNumberOfRequests?: boolean;
    serverURL: string;
}) => Promise<{
    _numberOfRequests?: number;
} & T>;
//# sourceMappingURL=mergeData.d.ts.map