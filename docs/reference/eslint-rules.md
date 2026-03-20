# ESLint rules reference

Every rule configured in this project's `.eslintrc.cjs`, explained with examples.

---

## `no-eval` — error

**What it catches:** Any use of `eval()`, which executes a string as code.

**Why it matters:** You saw this in Security Safari. `eval()` is one of the most dangerous functions in JavaScript — it lets attackers run arbitrary code if they can control the string.

Fails:

```js
const result = eval("2 + 2");
```

Passes:

```js
const result = 2 + 2;
```

---

## `no-var` — error

**What it catches:** The `var` keyword.

**Why it matters:** You have been using `const` and `let` since early in the course. `var` has function-level scoping instead of block-level scoping, which causes subtle bugs that are hard to track down.

Fails:

```js
var name = "HAP";
```

Passes:

```js
const name = "HAP";
```

---

## `prefer-const` — error

**What it catches:** Variables declared with `let` that are never reassigned.

**Why it matters:** Using `const` signals that a value will not change. This makes your code easier to reason about. If you use `let`, a reader has to check whether the value changes later.

Fails:

```js
let greeting = "hello";
// greeting is never reassigned
```

Passes:

```js
const greeting = "hello";
```

Also passes (because `count` is reassigned):

```js
let count = 0;
count += 1;
```

---

## `no-console` — warn

**What it catches:** `console.log()`, `console.warn()`, `console.error()`, and similar calls.

**Why it matters:** `console.log` is great for debugging, but leftover logs clutter your output and can leak information. This rule warns you so you remember to remove them before committing.

Warns:

```js
console.log("debug value:", x);
```

Fix: Remove the `console.log` once you are done debugging.

---

## `eslint:recommended`

This is a bundle of rules maintained by the ESLint team. Here are a few of the most common ones you might encounter:

- **`no-unused-vars`** — flags variables that are declared but never used
- **`no-undef`** — flags variables that are used but never declared
- **`no-dupe-keys`** — flags duplicate keys in objects
- **`no-unreachable`** — flags code after a `return` statement

These rules catch common mistakes that are easy to overlook. When you see one, read the rule name in the error message — it usually tells you exactly what to fix.
