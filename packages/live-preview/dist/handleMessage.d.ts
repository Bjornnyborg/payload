import type { LivePreviewMessageEvent } from './types.js';
export declare const handleMessage: <T extends Record<string, any>>(args: {
    apiRoute?: string;
    depth?: number;
    event: LivePreviewMessageEvent<T>;
    initialData: T;
    serverURL: string;
}) => Promise<T>;
//# sourceMappingURL=handleMessage.d.ts.map