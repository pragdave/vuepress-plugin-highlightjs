# VuePress Extensible Syntax Highlighting using HighlightJS

This plugin uses Highlight.js syntax highlighting in VuePress 2.

Why? VuePress already has Prism and Shiki for syntax highlighing. 

Because: neither of these seem to have the ability to add new language grammars
at configuration time. I needed that feature in my work, as I often talk about
unusual languages.

### Install

~~~
yarn add -D \
              vuepress-plugin-highlightjs
npm  i   -D /
~~~

### Usage

Add the plugin in your `.vuepress/config.ts` file:

~~~ ts
plugins: [
  // ...
  [
    plugin_highlightjs,
    {
      extraLanguages: {
        pdp:    pdp11_grammar,
        nodejs: nodejs_grammar,
      },
    }
  ],
  //...
~~~

The `extraLanguages` option is a set of _name: grammar_ entries. 

The name is what you use as a language name in your markdown:

~~~~
~~~ pdp
start:  mov    #377, r0
        mov    r0, r1
...
~~~
~~~~

The grammar is a reference to a function that returns the parser for the given language.

I put these in `.vuepress/lib/syntax`, and import them into my config with

~~~ ts
import pdp11_grammar  from "./lib/syntax/hljs-pdp11.js"
import nodejs_grammar from "./lib/syntax/hljs-nodejs.js"
~~~

Each of these files exports a function such as:

~~~ js
module.exports = function(_hljs) {
  return {
    name: 'NodeJS REPL',
    contains: [
      {
        className: 'meta',
        begin: /^>/,
        relevance: 0,
        starts: {
          subLanguage: 'javascript',
          end: /$/,
        },
      },
    ],
    aliases: ['nodejs'],
  }
}
~~~

See the Highlight.js documentation for information om writing these grammars.

## Requirements

This code has only been run under Vuepress 2.

## License

[MIT](./LICENSE.md)



