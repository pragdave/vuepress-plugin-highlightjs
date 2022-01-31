"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHighlighter = void 0;
const highlight_js_1 = require("highlight.js");
const languageNameMap = {
    html: 'markup',
    vue: 'markup',
};
/**
 * Resolve syntax highlighter for corresponding language
 */
const resolveHighlighter = (language) => {
    // get the languages that need to be loaded
    const lang = languageNameMap[language] || language;
    return (code) => {
        const result = highlight_js_1.default.highlight(code, { language: lang });
        if (result.illegal) {
            console.error(`Illegal returned from HLJS.highlight: ${JSON.stringify(result)}`);
            return null;
        }
        else
            return result.value;
    };
};
exports.resolveHighlighter = resolveHighlighter;
