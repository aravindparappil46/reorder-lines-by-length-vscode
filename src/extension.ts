import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('reorder-lines-by-length.performReorder', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);
    let lines = selectedText.split('\n').filter(line => line);

    lines.sort((a, b) => {
      return a.length - b.length; // Sort lines by ascending order of length
    });

    const reorderedString = lines.join('\n');

    editor.edit(async builder => {
      builder.replace(selection, reorderedString);
      await vscode.commands.executeCommand('editor.action.formatSelection');
    });
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
