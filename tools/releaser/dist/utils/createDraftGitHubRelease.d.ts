type Args = {
    branch: string;
    tag: string;
    releaseNotes: string;
};
export declare const createDraftGitHubRelease: ({ branch, tag, releaseNotes, }: Args) => Promise<{
    releaseUrl: string;
}>;
export {};
//# sourceMappingURL=createDraftGitHubRelease.d.ts.map