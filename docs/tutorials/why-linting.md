# Why linting

## What is linting?

A linter is a tool that reads your code and checks it against a set of rules — before it ever runs in a browser. Think of it like a spell checker for code. A spell checker does not know what your essay is about, but it can catch typos and grammar mistakes. A linter does not know what your program does, but it can catch patterns that cause bugs.

In this project, the linter is **ESLint**. It runs every time you use `npm run lint` and every time you commit (thanks to Husky).

## Why does it matter?

You have already seen what happens when dangerous patterns slip into code. In Security Safari, you found vulnerabilities like `eval()` and unescaped `innerHTML`. Those were real security holes — and they were easy to miss by just reading the code.

A linter catches those automatically. The rule `no-eval` will flag any use of `eval()` before your code ever reaches a browser. You do not have to remember to check — the tool checks for you.

Teams use linters because:

- They catch bugs before the code runs
- They enforce consistency across every file, no matter who wrote it
- They make code reviews faster — reviewers focus on logic, not style
- They prevent known-bad patterns from ever getting committed

## The rules in this project

This project's `.eslintrc.cjs` extends `eslint:recommended` (a bundle of ~30 rules the ESLint team considers essential, like catching unused variables and accidental duplicate keys) and adds four project-specific rules:

- **`no-eval`** — blocks `eval()`. You already know why from Security Safari.
- **`no-var`** — blocks `var`. You have been using `const` and `let` since early in the course. `var` has scoping behavior that causes subtle bugs.
- **`prefer-const`** — if a variable is never reassigned, use `const`. This makes your intent clear.
- **`no-console`** — warns on `console.log`. Useful for debugging, but should not be in finished code.

## Quick reference

| Command          | What it does                                                                         |
| ---------------- | ------------------------------------------------------------------------------------ |
| `npm run lint`   | Run the linter on all JS files in `src/js/`                                          |
| Fix a lint error | Read the rule name in the error message, then check `docs/reference/eslint-rules.md` |
