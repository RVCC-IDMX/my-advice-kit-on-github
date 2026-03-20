# Your dev environment

This repo has a lot of moving parts. That is normal. Professional JavaScript projects look like this — a collection of tools that each handle one job, wired together so they work without you thinking about them.

You are not expected to understand all of this right now. You will learn what each piece does by using it, breaking it, fixing it, and asking questions. Come back to this file often. Things that seem mysterious today will click after you have worked with them for a few weeks.

## The big picture

```
You write code          Tools check your code        Your site goes live
──────────────          ─────────────────────        ───────────────────
src/js/app.js           ESLint (catches mistakes)    npm run build (bundles)
src/css/style.css       Prettier (formats)           Netlify (deploys dist/)
index.html              Husky (blocks bad commits)   GitHub Actions (checks CI)
```

Everything flows left to right. You write code in `src/`. Tools catch problems before they leave your machine. Then the build tool packages it all up and Netlify puts it online.

## What each tool does — one sentence each

- **Vite** — dev server and build tool. `npm run dev` for development, `npm run build` for production.
- **ESLint** — reads your JavaScript and flags mistakes. The rules are in `.eslintrc.cjs`.
- **Prettier** — reformats your code so spacing, quotes, and semicolons are consistent. Config is in `.prettierrc`.
- **Husky** — runs a script before every git commit. The script is in `.husky/pre-commit`.
- **lint-staged** — tells Husky which files to check. Only staged `.js` files in `src/js/` are linted and formatted.
- **Vitest** — test runner. You may not use it yet, but it is ready when you are.
- **GitHub Actions** — runs `npm run lint` on GitHub's servers every time you push. Config is in `.github/workflows/lint.yml`.
- **Netlify** — hosts your built site. Config is in `netlify.toml`.

## Where each config file lives

```
.eslintrc.cjs            ← ESLint rules (what counts as a mistake)
.prettierrc              ← Prettier options (how code should look)
.prettierignore          ← files Prettier should not touch
.husky/pre-commit        ← the script that runs before commits
.github/workflows/       ← CI workflow that runs on GitHub
vite.config.js           ← build entry points and test settings
netlify.toml             ← build command and deploy directory
package.json             ← npm scripts, dependencies, lint-staged config
```

Most of these files has comments explaining what it does. Open them. Read the comments. You do not need to memorize them — just know where to look.

## The commands you will use

These npm commands are internal ones (like `npm install`) or they exist in your `package.json` scripts.

```
npm install              ← install dependencies (run once after cloning)
npm run dev              ← start the dev server (your daily driver)
npm run lint             ← check for JavaScript mistakes
npm run format           ← auto-format your code
npm run build            ← create the production build in dist/
npm run test             ← run tests (press q to quit watch mode)
npm run preview          ← preview the production build locally
```

## When something breaks

1. Read the error message. It almost always tells you the file, the line, and the rule.
2. Check the relevant doc in `docs/reference/` or `docs/tutorials/`.
3. Log it in `docs/error-log.md` — this is how you track your own learning.
4. If you are stuck, ask your agent. It has been told to read the docs in this repo first.

## You do not need to understand everything today

When you first learned HTML, you wrote `<!DOCTYPE html>` without knowing what a doctype was. When you first used `npm install`, you did not know what `node_modules` contained. That was fine. You used the tools, built things, and understanding came with time.

This dev environment works the same way. Use it. Let the tools do their jobs. When something catches your attention — a lint error, a build failure, a commit that gets blocked — that is the moment to dig in and learn what that one piece does. The docs are here for exactly that moment.
