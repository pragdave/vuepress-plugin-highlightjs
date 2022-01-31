export declare type Highlighter = (code: string) => string | null;
/**
 * Resolve syntax highlighter for corresponding language
 */
export declare const resolveHighlighter: (language: string) => Highlighter;
