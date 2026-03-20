# Logic vs DOM — why they live in separate files

Your AGENTS.md says: "Logic functions (filtering, matching, data) must not touch the DOM — keep them testable." This tutorial explains why.

## Two kinds of code

Look at the files in `src/js/`. They fall into two categories:

**Logic code** — works with data. Filters an array, matches user choices to items, sorts results. This code does not care about the browser. It takes data in and returns data out.

```js
// src/js/matching.js — pure logic, no DOM
export function filterByGenre(items, genre) {
  return items.filter((item) => item.genre === genre);
}
```

**DOM code** — works with the page. Reads form values, creates elements, shows results to the user. This code only makes sense in a browser.

```js
// src/js/app.js — DOM wiring
import { filterByGenre } from './matching.js';

const form = document.querySelector('#search-form');
const results = document.querySelector('#results');
```

## Why separate them

### 1. Logic code is testable

You can test `filterByGenre` by calling it with an array and checking the result. No browser needed. No HTML needed. Just input and output.

```js
const items = [
  { title: 'Song A', genre: 'rock' },
  { title: 'Song B', genre: 'jazz' },
];

const result = filterByGenre(items, 'rock');
// result is [{ title: 'Song A', genre: 'rock' }]
```

If `filterByGenre` also tried to put results on the page, you would need a fake browser (jsdom) just to test whether your filter logic works. That is unnecessary complexity.

### 2. Logic code is reusable

Your matching logic works the same whether results appear as cards, a list, or a table. If the logic is separate, you can change how results look without touching the matching code. You can even use the same logic on a different page.

### 3. Bugs are easier to find

When something goes wrong, the first question is: is the data wrong, or is the display wrong?

- If `filterByGenre` returns the wrong items → the bug is in `matching.js`
- If the right items exist but do not appear on the page → the bug is in `app.js`

When logic and DOM code are mixed together, you cannot tell which part broke without reading everything.

## The pattern in this project

```
src/js/data.js        ← the dataset (an array of objects)
src/js/matching.js    ← functions that filter or match data (no DOM)
src/js/app.js         ← reads the form, calls matching functions, shows results
```

`app.js` is the bridge. It reads user input from the DOM, passes it to logic functions, and puts the results back on the page. The logic functions never know they are running in a browser.

## How to check if you mixed them

If a function in `matching.js` uses any of these, it is touching the DOM and should be moved to `app.js`:

- `document.querySelector`
- `document.getElementById`
- `element.textContent`
- `element.innerHTML`
- `element.classList`
- `element.appendChild` or `element.append`

Logic functions should only use: arrays, objects, strings, numbers, loops, conditionals, and `return`.
