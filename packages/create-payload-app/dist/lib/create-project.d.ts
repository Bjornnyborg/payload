import type { CliArgs, DbDetails, PackageManager, ProjectExample, ProjectTemplate } from '../types.js';
type TemplateOrExample = {
    example: ProjectExample;
} | {
    template: ProjectTemplate;
};
export declare function createProject(args: {
    cliArgs: CliArgs;
    dbDetails?: DbDetails;
    packageManager: PackageManager;
    projectDir: string;
    projectName: string;
} & TemplateOrExample): Promise<void>;
export declare function updatePackageJSON(args: {
    projectDir: string;
    projectName: string;
}): Promise<void>;
export {};
//# sourceMappingURL=create-project.d.ts.map