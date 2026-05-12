> [!IMPORTANT]
> **Action required before you start the final.** Three things are blocking your final-project setup: your `AGENTS.md` still tells your AI agent that fetch and async are forbidden (which directly contradicts the Week 4 code you just shipped), your `docs/error-log.md` has no Week 4 entries, and a real bug in your search/cache flow is currently making different searches return the same results. Read this Issue carefully, work through the checklist, and close the issue when all three are resolved. Your instructor monitors closed issues to confirm you are ready for the final.

## Checklist

- [ ] Read this issue in full
- [ ] Run `npm install` and then `npm audit fix` (see class-wide note at the bottom)
- [ ] Update `AGENTS.md` to reflect what your Week 4 code actually does
- [ ] Add at least one Week 4 entry to `docs/error-log.md`
- [ ] Read the cache-bug debugging guide (see link below) and fix the root cause
- [ ] Run `npm run lint` — passes
- [ ] Run `npm run dev` and confirm different searches return different results
- [ ] Commit and push
- [ ] Close this issue

## What's working

Your Week 4 code does substantive work and the architecture is right. This issue is not "you didn't do Week 4." Your Issue #6 follow-through table from the Week 3 wrap-up shows 7 Done, 1 Partial, 0 Missing — Issues #1 and #3 closed, code map filled, `experiments.js` deleted, `views.js` extracted, SPA navigation wired, root duplicates removed, Week 3 reflection completed, event/SPA rules added to AGENTS.md.

- **TMDB serverless proxy.** Your `netlify/functions/api.mjs` reads the search query, calls TMDB, and returns the data your views expect. The proxy pattern landed.
- **Cache keyed by search query.** Your `loadCache` and `saveCache` use a `movies:${search.toLowerCase()}` key — a smarter strategy than caching a single global blob, which is what most students would have written first. (Note: there's a subtle bug in how the key is built in some flows — see the "Before you start the final" section below.)
- **SPA detail navigation with a callback.** Your `showDetail(movie, container, onBack)` takes the back handler as a parameter — clean separation between the view function and what should happen on back.
- **Event delegation on the results container.** One click listener with `.closest()` and an early return. Textbook pattern, and you applied it correctly.
- **Async/await throughout `app.js`.** Real fetch + cache + render flow that does what the assignment asked for.

The work shipped. The blockers below are around the work — process artifacts and one real bug — not the work itself.

## Before you start the final

Three items are tangling each other. Your `AGENTS.md` says you don't write fetch or async, which means if you ask Copilot or Claude Code for help with your final project, the agent will refuse to write the kind of code your project already uses. Your `error-log.md` is empty for Week 4, so there's no record of what you debugged. And there's a real cache bug in the search flow that needs fixing before the final, so you don't end up debugging it then under time pressure.

### 1. Update `AGENTS.md` to match what you actually wrote

Right now your `AGENTS.md` "About this student" section reads, roughly:

- "Has NOT done async or APIs yet"
- "No fetch() / async / await / Promises — all data must come from local data.js"

That is the direct opposite of what your Week 4 code does. The reason this is a blocker, and not just a paperwork item, is that **`AGENTS.md` is the live instruction file your AI assistant reads every session.** If you start the final and ask your agent for help with anything that touches your TMDB flow, the agent will see those rules and refuse to suggest fetch or async. You'll get pushback on day one and you won't understand why — until you reread your own AGENTS.md.

**What to change:**

- Replace the "Has NOT done async or APIs yet" line with what you actually did: serverless proxy, fetch-and-cache flow keyed by search query, async/await throughout `app.js`, view delegation. Two or three sentences in your own words.
- Remove the "No fetch() / async / await / Promises" rule outright. It is no longer true.
- Add a Week 4 personal-instructions block. At minimum two rules that describe how you actually built this — for example: "API keys live in serverless functions, never in the front-end; cache by query, not globally; fetch goes through `fetch('/.netlify/functions/api?...')`, not directly to the third-party API." Use your own wording.

The point of this section is to give your agent a fair description of where you are now, not where you were three weeks ago.

### 2. Add a Week 4 entry to `docs/error-log.md`

Your error log has no Week 4 entries. The error log is the file that captures lint failures, build errors, runtime issues, and the lessons you took from them. Even a clean week is worth one entry, because it's evidence that you ran the pipeline.

**What to add:** at least one entry from Week 4. Anything real counts — a unicorn rule that flagged something, an issue you hit while wiring the proxy, a cache key you got wrong the first time, a TMDB response shape that surprised you. One paragraph: what you saw, where, what you changed, what you learned. Format it like the Week 3 entries you've already written.

If you genuinely had no errors during Week 4 (unlikely but possible), the entry should say so explicitly: "No lint or runtime errors during Week 4 build; pipeline ran clean from Part 0 through Part 4." That is a real entry — it's evidence that the pipeline ran, not a placeholder.

### 3. Fix the cache bug — debugging guide is in your repo

There's a real bug in your Week 4 search flow: different selections in the preference form return the same movies (or movies whose fields are all `undefined`). The full debugging guide is in your repo — open it and work through it.

**Open this file in your repo:** `reports/evaluations/my-advice/week-4/assessments/my-advice-kit-cache-bug.md`

A short summary so you know what you're walking into:

- The cache key isn't capturing enough information about each search, so different selections sometimes hit the same cached entry. That is the root cause for the "same movie no matter what I select" symptom.
- There is also a parameter-parsing issue in the serverless function. If you used `event.queryStringParameters`, that's the **legacy** Netlify Functions API. The newer ESM `export default` form receives a standard `Request` object instead, and reading `queryStringParameters` on a `Request` silently returns `undefined`. Your filters never apply, and you get no error.
- Card fields like genre, mood, time may render as `undefined` because the field names your views read don't match what TMDB actually returns. Walk the data shape from `app.js` → `views.js` → TMDB Network response.

**The guide is structured as an investigation path, not a fix.** It tells you where to put `console.log` calls, what to look for in the Network tab, what to inspect in localStorage, and which Copilot suggestions to ignore (it specifically warns against the `event.queryStringParameters` suggestion, the "add cache TTL" band-aid, and the "use `/search/movie`" reflex when you actually want `/discover/movie`). Read it in full before you start changing code. The debugging discipline you build here is exactly the muscle the final will exercise.

When you've fixed the bug:

- Clear localStorage in DevTools (Application → Local Storage → right-click → Clear).
- Restart `netlify dev`.
- Try several different combinations in the form. Confirm each combination returns different results and the card fields are populated.

## Class-wide note — npm audit warnings on `npm i`

After you run `npm i`, you'll see audit warnings like "6 vulnerabilities (2 low, 2 moderate, 2 high)." They are not blocking the final.

- **Run `npm audit fix` first (no `--force`).** That command only installs upgrades that stay within the same major version range — it cannot break your build. On this assignment's `package.json`, it drops 6 vulnerabilities to 2 in one command. Commit the resulting `package-lock.json` change.
- **For anything left, ask your AI agent to investigate, not to fix.** A useful prompt: "Read `package-lock.json` and `npm audit` output. For each remaining advisory, write a short report — which package, dev-only or runtime, what the actual exploit requires, what the suggested upgrade is, and what the breakage risk of that upgrade is. End with a recommendation per advisory: act now, defer, or ignore."
- **Do not run `npm audit fix --force` on `main`.** It is allowed to install major-version-breaking upgrades. If you want to try it, do it on a branch (`git checkout -b try-audit-fix-force`) and verify `npm run dev`, `npm run lint`, and `npm run build` still pass before merging.

This is the same skill you'll use after the course. Your agent's first instinct is to fix everything; your job is to ask it for the analysis first. Full breakdown at `reports/evaluations/my-advice/week-4/week4-blockers-analysis.md` (the "Class-wide note" section).

> [!NOTE]
> Close this issue once `AGENTS.md` reflects your real Week 4 work, `error-log.md` has at least one Week 4 entry, and the cache bug is fixed (different searches return different results, no more `undefined` fields). Your instructor monitors closed issues to confirm you are ready for the final.

