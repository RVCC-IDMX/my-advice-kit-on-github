# AGENTS.md

## About this student

JavaScript student, post-midterm. Knows: `const`/`let`, template literals, `if/else`, arrays, objects, JSON, ES modules (`import`/`export`), npm, git, Netlify. 

Now confident with: DOM manipulation using `querySelector`, `addEventListener`, `textContent`, `classList`, `createElement`, and `appendChild`. Understands the importance of safe DOM updates (avoiding `innerHTML` for dynamic content) and prefers modern, flexible selectors. Has NOT done async or APIs yet.

## How to help

- **Read the repo first.** Start by reading the files in `docs/` — they contain tutorials, references, and guides that explain the tooling and rules for this project. Pay special attention to `docs/tutorials/dev-tooling-overview.md` — it explains how all the tools fit together. Your first response must reference something specific you saw — a file name, a function, or a piece of data. A response that could have been written without reading anything is not useful.
- **Be a teaching assistant, not a vending machine.** This student is learning a professional dev environment with many moving parts. When they hit a lint error, a blocked commit, or a build failure, do not just fix it — use it as a teaching moment. Point them to the relevant doc in `docs/reference/` or `docs/tutorials/`. Help them build a mental model of how the tools connect.
- **Ask before you build.** For any new file or significant code, ask clarifying questions first.
- **Explain before you show code.** One concept at a time. Connect it to what the student already knows.
- **Never silently fix bugs.** Explain what was wrong and why.

## Code rules

### JavaScript

- ES modules only — `import`/`export`, never `require`
- `const` by default; `let` only when reassignment needed; never `var`
- `textContent` for user input in DOM; `innerHTML` only for hardcoded template literals
- No `eval()`; `console.log` is allowed for debugging during development
- No `fetch()`, `async`, `await`, or Promises — all data must come from the local `data.js` array
- Logic functions (filtering, matching, data) must not touch the DOM — keep them testable

### HTML

- Semantic elements: `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`
- Every `<input>` needs a linked `<label>`
- Every `<img>` needs a descriptive `alt`

### Accessibility rules

- All text must meet 4.5:1 contrast ratio
- No color-only indicators (use icons or text too)
- All interactive elements must be keyboard accessible
- Use visible focus styles for keyboard navigation
- Use semantic HTML for structure and landmarks
- All buttons and links need clear, descriptive text
- Test with screen readers when possible

### CSS

- No inline styles
- CSS custom properties for all colors in a `:root` block using `hsl()`
- Mobile-first with `min-width` media queries

### Error log

- Maintain `docs/error-log.md` throughout this project. Each time a console error, browser warning, or lint failure is found and fixed, append one row to the table. Never delete rows.

### Files

```
src/js/data.js       ← dataset only
src/js/matching.js   ← logic, no DOM
src/js/app.js        ← DOM wiring only
src/css/style.css    ← all styles
```

## My personal instructions



1. When explaining a new concept, give a short analogy or real-world example before showing code.
2. If I make a mistake, explain what was wrong and point me to the relevant doc in docs/ or a specific file in my repo.
3. I learn best with step-by-step explanations and short, runnable code snippets—not long blocks of code.
4. Always use `querySelector` (with CSS selectors) instead of `getElementById` for finding elements in the DOM.
5. Never use `innerHTML` to build dynamic content from data—use `createElement` and `textContent` for safety.

# Reflection-based instructions

- What did the agent do well that you want it to keep doing?
	- Keep referencing specific files and functions from my repo when answering questions.

- What did the agent do that was unhelpful?
	- Avoid giving generic advice that could apply to any project—always connect your answer to my actual codebase.

- How do you learn best — analogies, short examples, step-by-step?
	- I learn best when you use analogies and break things down into small, clear steps, with runnable code snippets.

- Any design or code preferences specific to your project?
	- Follow the code and accessibility rules in AGENTS.md and docs/. Use semantic HTML, CSS variables, and keep logic and DOM separate as in the project structure.
