# Prettier options reference

Prettier is an opinionated code formatter. It takes your code and reprints it with consistent style — indentation, spacing, quotes, and line breaks. You do not configure individual rules like ESLint. Instead, you set a few options and Prettier handles the rest.

This project's `.prettierrc` has four options:

---

## `"singleQuote": true`

Use single quotes for strings instead of double quotes.

Before formatting:

```js
const name = "HAP";
```

After formatting:

```js
const name = 'HAP';
```

---

## `"semi": true`

Always add semicolons at the end of statements.

Before formatting:

```js
const name = 'HAP'
const age = 2
```

After formatting:

```js
const name = 'HAP';
const age = 2;
```

---

## `"tabWidth": 2`

Use 2 spaces for indentation.

Before formatting:

```js
if (true) {
      doSomething();
}
```

After formatting:

```js
if (true) {
  doSomething();
}
```

---

## `"trailingComma": "es5"`

Add trailing commas where ES5 allows them — in arrays, objects, and function parameters.

Before formatting:

```js
const colors = [
  'red',
  'blue',
  'green'
];
```

After formatting:

```js
const colors = [
  'red',
  'blue',
  'green',
];
```

Trailing commas make diffs cleaner. When you add a new item, only one line changes instead of two.

---

## Running Prettier

| Command          | What it does                    |
| ---------------- | ------------------------------- |
| `npm run format` | Format all files in the project |

Prettier also runs automatically on staged JS files when you commit, thanks to lint-staged and Husky.
