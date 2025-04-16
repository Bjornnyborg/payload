import type { ClientUploadsAccess, CollectionOptions } from '@payloadcms/plugin-cloud-storage/types';
import type { Plugin, UploadCollectionSlug } from 'payload';
import type { createUploadthing } from 'uploadthing/server';
import type { UTApiOptions } from 'uploadthing/types';
export type FileRouterInputConfig = Parameters<ReturnType<typeof createUploadthing>>[0];
export type UploadthingStorageOptions = {
    /**
     * Do uploads directly on the client, to bypass limits on Vercel.
     */
    clientUploads?: {
        access?: ClientUploadsAccess;
        routerInputConfig?: FileRouterInputConfig;
    } | boolean;
    /**
     * Collection options to apply the adapter to.
     */
    collections: Partial<Record<UploadCollectionSlug, Omit<CollectionOptions, 'adapter'> | true>>;
    /**
     * Whether or not to enable the plugin
     *
     * Default: true
     */
    enabled?: boolean;
    /**
     * Uploadthing Options
     */
    options: {
        /**
         * @default 'public-read'
         */
        acl?: ACL;
    } & UTApiOptions;
};
type UploadthingPlugin = (uploadthingStorageOptions: UploadthingStorageOptions) => Plugin;
/** NOTE: not synced with uploadthing's internal types. Need to modify if more options added */
export type ACL = 'private' | 'public-read';
export declare const uploadthingStorage: UploadthingPlugin;
export {};
//# sourceMappingURL=index.d.ts.map