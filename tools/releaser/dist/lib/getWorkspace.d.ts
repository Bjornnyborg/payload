import type { ReleaseType } from 'semver';
type PackageDetails = {
    /** Name in package.json / npm registry */
    name: string;
    /** Full path to package relative to project root */
    packagePath: `packages/${string}`;
    /** Short name is the directory name */
    shortName: string;
    /** Version in package.json */
    version: string;
};
type PackageReleaseType = 'canary' | 'internal' | ReleaseType;
type PublishOpts = {
    dryRun?: boolean;
    tag?: 'beta' | 'canary' | 'latest';
};
type Workspace = {
    version: () => Promise<string>;
    tag: string;
    packages: PackageDetails[];
    showVersions: () => Promise<void>;
    bumpVersion: (type: PackageReleaseType) => Promise<void>;
    build: () => Promise<void>;
    publish: (opts: PublishOpts) => Promise<void>;
    publishSync: (opts: PublishOpts) => Promise<void>;
};
export declare const getWorkspace: () => Promise<Workspace>;
export {};
//# sourceMappingURL=getWorkspace.d.ts.map