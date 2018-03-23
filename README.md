# Copy Markdown as HTML

This extension will copy the currently selected markdown text to the clipboard as HTML. 

## Installation

Install through VS Code extensions. Search for `Copy Markdown as HTML`

[Visual Studio Code Market Place: Copy Markdown as HTML](https://marketplace.visualstudio.com/items?itemName=jerriepelser.copy-markdown-as-html)

Can also be installed using

```
ext install copy-markdown-as-html
```

## Usage

Open the Command Palette ('Ctrl+Shift+P'/'Cmd+Shift+P') and search for the command "Markdown: Copy as HTML". 

This will convert the selected markdown text to HTML and copy it to the clipboard. If no text is selected, the entire contents of the current document will be copied as HTML.

## Settings

This extension uses [markdown-it](https://github.com/markdown-it/markdown-it) to convert the markdown to HTML. The following settings are available for you to control how `markdown-it` converts the markdown to HTML. For more detailed information on any of these, please refer to the [markdown-it documentation](https://github.com/markdown-it/markdown-it#init-with-presets-and-options).

### copyMarkdownAsHtml.html (default: false)

Enable HTML tags in source

### copyMarkdownAsHtml.xhtmlOut (default: false)

Use `/` to close single tags (`<br />`). This is only for full CommonMark compatibility.

### copyMarkdownAsHtml.breaks (default: false)

Convert `\n` in paragraphs into `<br>`. This is only for full CommonMark compatibility.

### copyMarkdownAsHtml.langPrefix (default: `language-`)

CSS language prefix for fenced blocks. Can be useful for external highlighters.

### copyMarkdownAsHtml.linkify (default: false)

Autoconvert URL-like text to links.

### copyMarkdownAsHtml.typographer (default: false)

Enable some language-neutral replacement + quotes beautification.

### copyMarkdownAsHtml.quotes (default: `“”‘’`)

Double + single quotes replacement pairs, when typographer enabled, and smartquotes on. For example, you can use `«»„“` for Russian or `„“‚‘` for German.

## Changelog

### 1.1.0

* Added configuration settings
* Updated all the internal dependencies to more modern packages

### 1.0.0

Initial release of the extension