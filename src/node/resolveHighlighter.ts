import HLJS from "highlight.js"

const languageNameMap = {
  html: 'markup',
  vue: 'markup',
}


export type Highlighter = (code: string) => string | null

/**
 * Resolve syntax highlighter for corresponding language
 */
export const resolveHighlighter = (language: string): Highlighter => {
  // get the languages that need to be loaded
  const lang: string = languageNameMap[language] || language


  return (code) => {
    const result = HLJS.highlight(code, { language: lang })
    if (result.illegal) {
      console.error(`Illegal returned from HLJS.highlight: ${JSON.stringify(result)}`)
      return null
    }
    else
      return result.value
  }
}
