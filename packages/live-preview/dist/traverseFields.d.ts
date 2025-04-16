import type { DocumentEvent, FieldSchemaJSON } from 'payload';
import type { PopulationsByCollection } from './types.js';
export declare const traverseFields: <T extends Record<string, any>>(args: {
    externallyUpdatedRelationship?: DocumentEvent;
    fieldSchema: FieldSchemaJSON;
    incomingData: T;
    localeChanged: boolean;
    populationsByCollection: PopulationsByCollection;
    result: Record<string, any>;
}) => void;
//# sourceMappingURL=traverseFields.d.ts.map