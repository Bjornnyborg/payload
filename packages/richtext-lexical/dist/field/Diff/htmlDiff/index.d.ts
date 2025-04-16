export interface HtmlDiffOptions {
    /**
     * The classNames for wrapper DOM.
     * Use this to configure your own styles without importing the built-in CSS file
     */
    classNames?: Partial<{
        createBlock?: string;
        createInline?: string;
        deleteBlock?: string;
        deleteInline?: string;
    }>;
    /**
     * @defaultValue 1000
     */
    greedyBoundary?: number;
    /**
     * When greedyMatch is enabled, if the length of the sub-tokens exceeds greedyBoundary,
     * we will use the matched sub-tokens that are sufficiently good, even if they are not optimal, to enhance performance.
     * @defaultValue true
     */
    greedyMatch?: boolean;
    /**
     * Determine the minimum threshold for calculating common sub-tokens.
     * You may adjust it to a value larger than 2, but not lower, due to the potential inclusion of HTML tags in the count.
     * @defaultValue 2
     */
    minMatchedSize?: number;
}
export declare class HtmlDiff {
    private readonly config;
    private leastCommonLength;
    private readonly matchedBlockList;
    private readonly newTokens;
    private readonly oldTokens;
    private readonly operationList;
    private sideBySideContents?;
    private unifiedContent?;
    constructor(oldHtml: string, newHtml: string, { classNames, greedyBoundary, greedyMatch, minMatchedSize, }?: HtmlDiffOptions);
    private computeBestMatchedBlock;
    private computeMatchedBlockList;
    private dressUpBlockTag;
    private dressUpDiffContent;
    private dressUpInlineTag;
    private dressupMatchEnabledHtmlTag;
    private dressUpText;
    /**
     * Generates a list of token entries that are matched between the old and new HTML. This list will not
     * include token ranges that differ.
     */
    private getMatchedBlockList;
    private getOperationList;
    private slideBestMatchedBlock;
    /**
     * convert HTML to tokens
     * @example
     * tokenize("<a> Hello World </a>")
     * ["<a>"," ", "Hello", " ", "World", " ", "</a>"]
     */
    private tokenize;
    getSideBySideContents(): string[];
    getUnifiedContent(): string;
}
//# sourceMappingURL=index.d.ts.map