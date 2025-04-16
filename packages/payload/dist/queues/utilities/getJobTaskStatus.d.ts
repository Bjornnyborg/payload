import type { TaskConfig, TaskType } from '../config/types/taskTypes.js';
import type { BaseJob, JobTaskStatus } from '../config/types/workflowTypes.js';
type Args = {
    jobLog: BaseJob['log'];
    tasksConfig: TaskConfig<TaskType>[];
};
export declare const getJobTaskStatus: ({ jobLog }: Args) => JobTaskStatus;
export {};
//# sourceMappingURL=getJobTaskStatus.d.ts.map