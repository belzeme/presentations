# Typescript for JavaScript in IntelliSense

---

## IntelliSense

If you already now about IntelliSense you can skip this part.

IntelliSense is a general term for a variety of code editing features including: code completion, parameter info, quick info, and member lists.
IntelliSense features are sometimes called by other names such as "code completion", and "code hinting".

![image](https://code.visualstudio.com/assets/docs/editor/intellisense/intellisense.gif)

IntelliSense is provided for JavaScript, TypeScript, JSON, HTML, CSS, SCSS, and Less out of the box.

---

## IntelliSense features

IntelliSense features are powered by a language service, that providfes intelligent code completions based on language semantics
and an analysis of your cource code. IntelliSense will pop suggestions as you type. If you continue typing characters, the list of members (variables, methods, etc.)
is filtered to only include members containing your typed characters. Pressing <kbd>Tab</kbd> or <kbd>Enter</kbd> will insert the selected member.

![image](https://code.visualstudio.com/assets/docs/editor/intellisense/intellisense_packagejson.gif)

You can trigger IntelliSense in any editor window by typing <kbd>Ctrl + Space</kbd> or by typing a trigger character
(such as the dot character (<kbd>.</kbd>) in JavaScript).

---

## Customizing IntelliSense

You can customize your IntelliSense experience in settings and key bidings.

---

### Settings

The settings shown below are the default settings. You can change these settings in your _settings.json_ file as described in
[User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings).

```json
{
  // Controls if quick suggestions should show up while typing
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": false
  },

  // Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.
  "editor.acceptSuggestionOnCommitCharacter": true,

  // Controls if suggestions should be accepted on 'Enter' -
  // in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions. The value 'smart' means only accept a suggestion with Enter when it makes a textual change
  "editor.acceptSuggestionOnEnter": "on",

  // Controls the delay in ms after which quick suggestions will show up.
  "editor.quickSuggestionsDelay": 10,

  // Controls if suggestions should automatically show up when typing trigger characters
  "editor.suggestOnTriggerCharacters": true,

  // Controls if pressing tab inserts the best suggestion and if tab cycles through other suggestions
  "editor.tabCompletion": "on",

  // Controls whether sorting favours words that appear close to the cursor
  "editor.suggest.localityBonus": true,

  // Controls how suggestions are pre-selected when showing the suggest list
  "editor.suggestSelection": "recentlyUsed",

  // Enable word based suggestions
  "editor.wordBasedSuggestions": true,

  // Enable parameter hints
  "editor.parameterHints.enabled": true
}
```

---

## Working with JavaScript

As said earlier IntelliSense already provides code completion, parameter info, references search, and many other advanced language features. JavaScript IntelliSense is powered by the [JavaScript language service](https://github.com/Microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio) developed by the TypeScript team. While IntelliSense should just work for most JavaScript projects without any configuration, you can make IntelliSense ever more usefull with [JSDoc](https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support) or by configuring a **jsconfig.json** project.

## Richer IntelliSense

The information provided by the JavaScript IntelliSense is provided by the TypeScript language service, which uses static analysis behind the scenes to better understand your code. TypeScript uses severals sources to build up this information.

### IntelliSense based on type inference

In JavaScript, most of the time there is no explicit type information available. Luckily, it is usually fairly easy to deduce a type given the surrounding code context. This process is called type inference.

For a variable or property, the type is typically the type of the value used to initialize it or the most recent value assignment.

```js
let nexItem = 10;
nextItem;
```