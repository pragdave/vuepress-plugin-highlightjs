import type { Plugin } from '@vuepress/core';
import type { LanguageFn } from "highlight.js";
/**
 * Options of vuepress-plugin-highlightjs
 */
export interface HighlightjsPluginOptions {
    /**
     * Additional languages to load. This is a list
     * of hljs grammar modules. This is of the form
     *
     * extraLanguages = { name: languageDefn, ... }
     *
     * where `languageDefn` is equivalent to
     *
     *     require(`file/containing/grammar'
     */
    extraLanguages: LanguageFn[];
}
export declare const highlightjsPlugin: Plugin<HighlightjsPluginOptions>;
