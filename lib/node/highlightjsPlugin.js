"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightjsPlugin = void 0;
const highlight_js_1 = require("highlight.js");
const resolveHighlighter_1 = require("./resolveHighlighter");
const highlightjsPlugin = ({ extraLanguages = {} }) => ({
    name: 'vuepress-plugin-highlightjs',
    extendsMarkdown(md) {
        for (let lang of Object.keys(extraLanguages)) {
            highlight_js_1.default.registerLanguage(lang, extraLanguages[lang]);
        }
        md.options.highlight = (code, lang) => {
            const highlighter = (0, resolveHighlighter_1.resolveHighlighter)(lang);
            return highlighter(code) || '';
        };
    },
});
exports.highlightjsPlugin = highlightjsPlugin;
