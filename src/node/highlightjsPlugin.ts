import type { Plugin } from '@vuepress/core'
import type { LanguageFn } from "highlight.js"

import HLJS from "highlight.js"

import { resolveHighlighter } from './resolveHighlighter'

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
  extraLanguages: LanguageFn[]
}

export const highlightjsPlugin: Plugin<HighlightjsPluginOptions> = ({
  extraLanguages = {}
}) => ({
  name: 'vuepress-plugin-highlightjs',

  extendsMarkdown(md) {
    for (let lang of Object.keys(extraLanguages)) {
      HLJS.registerLanguage(lang, extraLanguages[lang])
    }

    md.options.highlight = (code, lang) => {
      const highlighter = resolveHighlighter(lang)
      return highlighter(code) || ''
    }
  },
})
