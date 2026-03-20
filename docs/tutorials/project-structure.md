# Project structure — src, dist, and public

## The three folders

A typical Vite project has three important directories. Each one has a specific role in how your code moves from development to deployment.

### src/ — your source code

This is where you write code. In this project:

```
src/
  css/
    style.css        ← starter styles with CSS custom properties
  images/
    .gitkeep         ← empty for now; add images here as needed
  js/
    app.js           ← imports greeting.js and sets the page message
    greeting.js      ← exports a function (ES module example)
```

Everything in `src/` is code you author and edit. The starter includes a basic stylesheet and a minimal `app.js` so the project builds from day one. Your AI agent conversation will add more files here — `data.js`, `matching.js`, and others — as you build your site.

Vite watches these files during development and processes them during build.

### dist/ — the build output

When you run `npm run build`, Vite reads your `index.html` and follows every `<script>` and `<link>` tag to find the files it needs. It then:

- Bundles your JavaScript into fewer files
- Minifies your code (removes whitespace, shortens variable names)
- Adds hashed filenames for cache-busting (e.g., `app-3a7f2c.js`)
- Writes everything to `dist/`

The code inside `dist/` will look nothing like what you wrote. Variable names are shortened to single letters, whitespace is stripped, and filenames have random hashes. This is normal — Vite optimized it for browsers, not for humans.

**Never edit files in `dist/`.** This is the most common mistake beginners make. If you open `dist/index.html` or `dist/assets/main-3a7f2c.js` and change something, your fix will vanish the next time anyone runs `npm run build` — Vite overwrites the entire folder from scratch. Every change you make to `dist/` is temporary.

**When you are debugging:**

1. Always edit files in `src/` (or `index.html` in the project root)
2. Vite's dev server picks up changes instantly — save the file and check the browser
3. If you are not sure which file to edit, look at `src/` — that is your code
4. If you accidentally opened a file from `dist/`, close it and find the matching file in `src/`

A good habit: if the file path starts with `dist/`, stop. You are in the wrong place.

`dist/` is in `.gitignore` because it should not be committed — it can always be rebuilt from source. If you delete `dist/` and run `npm run build` again, you get the exact same result.

### public/ — static files (not used in this project)

Some projects have a `public/` folder for files that should be copied to `dist/` as-is, without processing. Common examples: `favicon.ico`, `robots.txt`, or images that do not need optimization.

Vite copies everything in `public/` to the root of `dist/` during build. A file at `public/favicon.ico` ends up at `dist/favicon.ico`.

This project does not use `public/` yet, but you may see it in other Vite projects.

## How Vite knows what to build

Vite starts from your HTML file. The `vite.config.js` tells it which HTML files are entry points:

```js
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
    },
  },
},
```

From `index.html`, Vite follows every `<script type="module" src="...">` and `<link rel="stylesheet" href="...">` to discover your source files. If a file is not referenced from an HTML entry point (directly or through imports), it will not be included in the build.

This is why adding a second HTML page (like `detail.html`) requires updating `vite.config.js` — Vite will not find it otherwise.

## What gets deployed

When you deploy to Netlify, only the `dist/` folder goes to the server. Your source code, documentation, configuration files, and `node_modules/` stay behind. This is controlled by the `netlify.toml` file.

### netlify.toml

This file tells Netlify how to build and deploy your project:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

- **command** — the shell command Netlify runs to build your project. This produces the `dist/` folder.
- **publish** — the directory Netlify deploys to its CDN. Only files inside this directory are uploaded.

Everything outside `publish` — your `src/` folder, `docs/`, `node_modules/`, `AGENTS.md`, `package.json` — never reaches the server. Visitors to your site only see what ended up in `dist/`.

### Why this matters

- **Security** — source code, config files, and documentation are not exposed to the public
- **Performance** — only optimized, minified files are served
- **Clarity** — you always know what is deployed by looking at `dist/`

## The full picture

```
You write code here           Vite builds here               Netlify serves here
──────────────────            ──────────────                 ───────────────────
src/js/app.js           →    dist/assets/main-ChcHI4Sk.js   →    yoursite.netlify.app
src/js/greeting.js      →    (bundled into main-*.js)
src/css/style.css       →    dist/assets/main-CRt0Bs3T.css  →    yoursite.netlify.app
src/images/             →    dist/images/ (when you add files here)
index.html              →    dist/index.html                 →    yoursite.netlify.app
public/ (not used yet)  →    dist/ (copied as-is when present)
docs/ (stays behind)
AGENTS.md (stays behind)
node_modules/ (stays behind)
```

Notice that `greeting.js` does not get its own file in `dist/`. Vite bundled it into `main-*.js` along with `app.js` because `app.js` imports it. This is what "bundling" means — multiple source files become one optimized output file.
