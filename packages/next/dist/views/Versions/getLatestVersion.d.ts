import type { Payload, PayloadRequest } from 'payload';
type ReturnType = {
    id: string;
    updatedAt: string;
} | null;
type Args = {
    locale?: string;
    overrideAccess?: boolean;
    parentID?: number | string;
    payload: Payload;
    req?: PayloadRequest;
    slug: string;
    status: 'draft' | 'published';
    type: 'collection' | 'global';
};
export declare function getLatestVersion(args: Args): Promise<ReturnType>;
export {};
//# sourceMappingURL=getLatestVersion.d.ts.map