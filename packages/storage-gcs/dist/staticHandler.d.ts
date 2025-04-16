import type { Storage } from '@google-cloud/storage';
import type { StaticHandler } from '@payloadcms/plugin-cloud-storage/types';
import type { CollectionConfig } from 'payload';
interface Args {
    bucket: string;
    collection: CollectionConfig;
    getStorageClient: () => Storage;
}
export declare const getHandler: ({ bucket, collection, getStorageClient }: Args) => StaticHandler;
export {};
//# sourceMappingURL=staticHandler.d.ts.map