import type { ClientUploadsConfig, CollectionOptions } from '@payloadcms/plugin-cloud-storage/types';
import type { Plugin, UploadCollectionSlug } from 'payload';
export type VercelBlobStorageOptions = {
    /**
     * Access control level. Currently, only 'public' is supported.
     * Vercel plans on adding support for private blobs in the future.
     *
     * @default 'public'
     */
    access?: 'public';
    /**
     * Add a random suffix to the uploaded file name in Vercel Blob storage
     *
     * @default false
     */
    addRandomSuffix?: boolean;
    /**
     * Cache-Control max-age in seconds
     *
     * @default 365 * 24 * 60 * 60 // (1 Year)
     */
    cacheControlMaxAge?: number;
    /**
     * Do uploads directly on the client, to bypass limits on Vercel.
     */
    clientUploads?: ClientUploadsConfig;
    /**
     * Collections to apply the Vercel Blob adapter to
     */
    collections: Partial<Record<UploadCollectionSlug, Omit<CollectionOptions, 'adapter'> | true>>;
    /**
     * Whether or not to enable the plugin
     *
     * Default: true
     */
    enabled?: boolean;
    /**
     * Vercel Blob storage read/write token
     *
     * Usually process.env.BLOB_READ_WRITE_TOKEN set by Vercel
     *
     * If unset, the plugin will be disabled and will fallback to local storage
     */
    token: string | undefined;
};
type VercelBlobStoragePlugin = (vercelBlobStorageOpts: VercelBlobStorageOptions) => Plugin;
export declare const vercelBlobStorage: VercelBlobStoragePlugin;
export {};
//# sourceMappingURL=index.d.ts.map