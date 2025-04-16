type Args = {
    bump?: 'major' | 'minor' | 'patch' | 'prerelease';
    dryRun?: boolean;
    fromVersion?: string;
    openReleaseUrl?: boolean;
    toVersion?: string;
};
type ChangelogResult = {
    /**
     * The changelog content, does not include contributors
     */
    changelog: string;
    /**
     * The release notes, includes contributors. This is the content used for the releaseUrl
     */
    releaseNotes: string;
    /**
     * The release tag, includes prefix 'v'
     */
    releaseTag: string;
    /**
     * URL to open releases/new with the changelog pre-filled
     */
    releaseUrl: string;
};
export declare const generateReleaseNotes: (args?: Args) => Promise<ChangelogResult>;
export {};
//# sourceMappingURL=generateReleaseNotes.d.ts.map