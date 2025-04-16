import type { I18nClient } from '@payloadcms/translations';
import { type ClientFieldSchemaMap, type Field, type FieldDiffClientProps, type FieldDiffServerProps, type FieldTypes, type PayloadComponent, type PayloadRequest, type SanitizedFieldPermissions, type VersionField } from 'payload';
export type BuildVersionFieldsArgs = {
    clientSchemaMap: ClientFieldSchemaMap;
    comparisonSiblingData: object;
    customDiffComponents: Partial<Record<FieldTypes, PayloadComponent<FieldDiffServerProps, FieldDiffClientProps>>>;
    entitySlug: string;
    fieldPermissions: {
        [key: string]: SanitizedFieldPermissions;
    } | true;
    fields: Field[];
    i18n: I18nClient;
    modifiedOnly: boolean;
    parentIndexPath: string;
    parentIsLocalized: boolean;
    parentPath: string;
    parentSchemaPath: string;
    req: PayloadRequest;
    selectedLocales: string[];
    versionSiblingData: object;
};
/**
 * Build up an object that contains rendered diff components for each field.
 * This is then sent to the client to be rendered.
 *
 * Here, the server is responsible for traversing through the document data and building up this
 * version state object.
 */
export declare const buildVersionFields: ({ clientSchemaMap, comparisonSiblingData, customDiffComponents, entitySlug, fieldPermissions, fields, i18n, modifiedOnly, parentIndexPath, parentIsLocalized, parentPath, parentSchemaPath, req, selectedLocales, versionSiblingData, }: BuildVersionFieldsArgs) => {
    versionFields: VersionField[];
};
//# sourceMappingURL=buildVersionFields.d.ts.map