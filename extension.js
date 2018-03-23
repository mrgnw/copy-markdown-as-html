// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var MarkdownIt = require('markdown-it');
const clipboardy = require('clipboardy');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "copy-markdown-as-html" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.copyMarkdownAsHtml', function () {
        // The code you place here will be executed every time your command is executed

        this.configurations = vscode.workspace.getConfiguration("copyMarkdownAsHtml");

        var editor = vscode.window.activeTextEditor;
        var selection = editor.selection;

        var text = '';

        if (selection.isEmpty)
            text = editor.document.getText();
        else
            text = editor.document.getText(selection);

        var settings = {};
        if (this.configurations.has('html')) { settings.html = this.configurations.get('html'); }
        if (this.configurations.has('xhtmlOut')) { settings.xhtmlOut = this.configurations.get('xhtmlOut'); }
        if (this.configurations.has('breaks')) { settings.breaks = this.configurations.get('breaks'); }
        if (this.configurations.has('langPrefix')) { settings.langPrefix = this.configurations.get('langPrefix'); }
        if (this.configurations.has('linkify')) { settings.linkify = this.configurations.get('linkify'); }
        if (this.configurations.has('typographer')) { settings.typographer = this.configurations.get('typographer'); }
        if (this.configurations.has('quotes')) { settings.quotes = this.configurations.get('quotes'); }

        if (settings.quotes === '') { settings.quotes = '“”‘’'; }

        var md = new MarkdownIt(settings);
        var result = md.render(text);

        clipboardy.writeSync(result);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;