# Why this project does not use Live Server

You may be used to opening HTML files with the Live Server extension in VS Code. This project uses Vite's dev server instead. There are two reasons.

## 1. Your site cannot run from a static file anymore

Once your HTML file uses ES module imports (`<script type="module" src="...">`), the browser needs a real server to load those files. Opening `index.html` directly (as a `file://` URL) or through a basic static server like Live Server will fail with CORS errors because browsers block ES module imports from `file://` paths.

Vite's dev server handles this correctly. It serves your files over `http://localhost`, resolves module imports on the fly, and gives you hot reloading — when you save a file, the browser updates instantly without a full page refresh.

Use `npm run dev` to start the Vite dev server during development, and `npm run preview` to preview the production build locally.

## 2. Live Server has a known security vulnerability

The Live Server extension (ritwickdey.LiveServer) has not been maintained since 2021 and contains a known path traversal vulnerability that allows anyone on your network to read files outside your project directory. This has been reported but not fixed.

This is not a theoretical risk. If you are on shared Wi-Fi (campus, coffee shop, library), another device on the network could access files on your machine through Live Server's open port.

Do not install or use Live Server for this or future projects. Vite, Astro, Next.js, and other modern frameworks all include their own dev servers that are actively maintained and do not have this issue.
