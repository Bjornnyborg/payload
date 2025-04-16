import type { Block } from 'payload';
import type { RawTable } from '../types.js';
type Args = {
    block: Block;
    localized: boolean;
    /**
     * @todo make required in v4.0. Usually you'd wanna pass this in
     */
    parentIsLocalized?: boolean;
    rootTableName: string;
    table: RawTable;
    tableLocales?: RawTable;
};
export declare const validateExistingBlockIsIdentical: ({ block, localized, parentIsLocalized, rootTableName, table, tableLocales, }: Args) => void;
export {};
//# sourceMappingURL=validateExistingBlockIsIdentical.d.ts.map