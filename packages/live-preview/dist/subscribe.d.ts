export declare const subscribe: <T extends Record<string, any>>(args: {
    apiRoute?: string;
    callback: (data: T) => void;
    depth?: number;
    initialData: T;
    serverURL: string;
}) => ((event: MessageEvent) => Promise<void> | void);
//# sourceMappingURL=subscribe.d.ts.map