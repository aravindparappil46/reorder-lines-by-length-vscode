# Reorder Lines By Length Plugin
VSCode plugin to reorder selected lines by their length! <br/>
Reduce cognitive load and make your code look pretty!

## Example
<i>Before</i>
``` java
this.queryBuilder = queryBuilder;
this.dao = dao;
this.validator = validator;
this.x = x;
this.mapper = mapper;
```
<i>After</i>
``` java
this.x = x;
this.dao = dao;
this.mapper = mapper;
this.validator = validator;
this.queryBuilder = queryBuilder;
```
## How To Use
* Select the lines of text you want to reorder
* Right click and choose `Reorder Lines By Length`

## What does it do?
* Grabs the selected text
* Splits them into an array by the new-line character
* Sorts the array by ascending order of string length
* Replaces selected text with the sorted text
* Formats the selected text as well, so that everything looks neat!

## Disclaimer
* Please note that this will work only for groups of single lines i.e., 
the selected text should not contain any code that spans more than a single line <br/><br/>
For example, the below snippet of code cannot be used with this plugin.
``` typescript
// Reordering this will break, since the code spans more than one line
let lines = selectedText
    .split('\n')
    .filter((line) => line)
    .map((x) => x.id = 6);
```
* Also, please make sure to select entire lines i.e., starting from the first character till the last!
* IntelliJ plugin also available!
