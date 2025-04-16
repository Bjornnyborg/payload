export type PackageDetails = {
    /** Name in package.json / npm registry */
    name: string;
    /** Full path to package relative to project root */
    packagePath: `packages/${string}`;
    /**
     * Short name is the directory name of the package
     *
     * @example payload, db-mongodb, ui, etc
     * */
    shortName: string;
    /** Version in package.json */
    version: string;
};
/**
 * Accepts package whitelist (directory names inside packages dir) and returns details for each package
 */
export declare const getPackageDetails: (packages?: null | string[]) => Promise<PackageDetails[]>;
//# sourceMappingURL=getPackageDetails.d.ts.map