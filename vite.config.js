// Vite is the build tool and dev server for this project.
// This file tells Vite where to find your HTML entry point
// and configures the test environment for Vitest.
//
// See docs/reference/vite-vitest-basics.md for an overview.
// See docs/tutorials/project-structure.md for how src/ and dist/ relate.

import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// ES modules do not have __dirname (that is a CommonJS feature).
// This is the standard way to recreate it in an ES module.
const __dirname = resolve(fileURLToPath(import.meta.url), "..");

export default defineConfig({
  // Vite looks for index.html starting from this directory.
  root: ".",

  build: {
    rollupOptions: {
      // Which HTML files Vite should include in the production build.
      // If you add a second page (like detail.html), add it here too.
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },

  test: {
    // Vitest uses jsdom to simulate a browser DOM in your tests.
    // This lets you test code that uses document.querySelector, etc.
    environment: "jsdom",
  },
});
