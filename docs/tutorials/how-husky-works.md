# How Husky works

## What is a pre-commit hook?

A pre-commit hook is a script that runs automatically every time you try to make a git commit. If the script fails, the commit is blocked. Your changes are still there — nothing is lost — but git will not let you commit until the issue is fixed.

Think of it like a bouncer at the door of your repo. You can write whatever code you want, but the bouncer checks it before it gets in. If something does not meet the rules, the bouncer says no and tells you why.

## What Husky does

Husky is the tool that installs and manages pre-commit hooks in this repo. When you ran `npm install`, the `"prepare": "husky"` script ran automatically and set up the hook.

The hook lives in `.husky/pre-commit`. It runs one command:

```bash
npx lint-staged
```

**lint-staged** only checks the files you are about to commit — not the entire project. This keeps it fast. It runs ESLint and Prettier on any staged `.js` files in the `src/js/` folder.

## What it looks like when it blocks a commit

Here is what you will see in your terminal if you try to commit a file with a lint error:

```
$ git commit -m "add matching logic"

✔ Preparing lint-staged...
❌ Running tasks for staged files...
  ❌ src/js/**/*.js — 1 file
    ❌ eslint --fix [FAILED]
↓ Skipped because of errors from tasks.
✔ Reverting to original state because of errors...
✔ Cleaning up temporary files...

❌ eslint --fix:

/path/to/your/repo/src/js/matching.js
  3:1  error  Unexpected var, use let or const instead  no-var

✖ 1 problem (1 error, 0 warnings)

husky - pre-commit script failed (code 1)
```

Here is how to read that output:

1. **The file name** — `src/js/matching.js` tells you which file has the problem
2. **The location** — `3:1` means line 3, column 1
3. **The message** — `Unexpected var, use let or const instead` tells you exactly what is wrong
4. **The rule name** — `no-var` is the ESLint rule that caught it

## How to fix it

1. Open the file mentioned in the error
2. Go to the line number shown
3. Fix the issue (in the example above, change `var` to `const` or `let`)
4. Stage the fixed file: `git add src/js/matching.js`
5. Commit again: `git commit -m "add matching logic"`

The bouncer will check again. If everything passes, the commit goes through.

## Key thing to remember

Husky is not punishing you. It is protecting you. Every error it catches is something that would have been flagged later — in a code review, in CI, or worse, in production. Better to catch it now, while you are right there looking at the code.
