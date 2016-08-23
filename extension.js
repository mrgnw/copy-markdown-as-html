// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var marked = require('marked');
var copyPaste = require('copy-paste');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "copy-markdown-as-html" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.copyAsHtml', function () {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        //vscode.window.showInformationMessage('Hello World!');

        var editor = vscode.window.activeTextEditor;
        var selection = editor.selection;

        var text = '';

        if (selection.isEmpty)
            text = editor.document.getText();
        else
            text = editor.document.getText(selection);

        copyPaste.copy(marked(text));
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;