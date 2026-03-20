# Vite and Vitest basics

## Vite — your dev server and build tool

Vite (pronounced "veet," French for "fast") does two things:

**1. Dev server** — When you run `npm run dev`, Vite starts a local server that serves your site. It watches your files and updates the browser instantly when you save changes. No need to manually refresh.

**2. Build tool** — When you run `npm run build`, Vite bundles your site into optimized files in a `dist/` folder. This is what you deploy to Netlify.

Vite is configured in `vite.config.js`. This project's config sets up one entry point — `index.html` — so Vite knows which page to include in the build.

## Vitest — your test runner

Vitest runs your tests. It uses the same config as Vite, so you do not need a separate setup. In this project, it is configured with `jsdom` so your tests can work with DOM elements.

You may not write tests in this assignment, but the tool is ready if you want to try the stretch goals in `docs/guides/adding-features.md`.

## Key commands

| Command           | What it does                               |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload       |
| `npm run build`   | Build the site for production into `dist/` |
| `npm run preview` | Preview the production build locally       |
| `npm run test`    | Run tests with Vitest                      |

## Things to know

- Vite serves files from the project root
- Your HTML files (`index.html`) go in the project root
- Your JS files go in `src/js/` and are linked from HTML with `<script type="module" src="/src/js/app.js"></script>`
- Vite handles ES modules natively — `import` and `export` work without any extra setup
