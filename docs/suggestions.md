# Final project suggestions for chooseafilm

> [!IMPORTANT]
> Before starting the final, complete and close your "Pre-final feedback" issue.

## Your Week 4 starting point (recap)

Your Week 4 PR shipped real code: a TMDB proxy with search-by-query via `event.queryStringParameters`, fetch + cache + delegated card click + back button via `showDetail(movie, container, onBack)` with a callback parameter. Your cache keys use per-query namespacing (`movies:${search.toLowerCase()}`) — a smarter strategy than caching a single global blob.

The architectural muscle is there. The final builds on it.

## How each pattern fits your project

### Pattern A — translate input to API params

**Standout fit — strongest match for your project specifically.** This is the same kind of "dropdowns become one input" UX win as the rest of the cohort, with a bonus: it solves a real shipped bug as a side effect.

Today, 4 of your 5 dropdowns are decorative (HTML-only, never read by JS), and the 5th defaults to `'movie'` when empty — so distinct user submissions collapse to the same query and therefore the same cache key. Pattern A replaces the broken 5-dropdown form with one natural-language input ("a tense 90s thriller under two hours"), which Groq translates to a TMDB discover-params object. Distinct natural-language queries become distinct API queries become distinct cache keys — the cache-key collision dissolves as a free byproduct of the architectural change.

### Pattern B — narrate the API results

Workable but doesn't address the underlying form/wiring issue. Adding commentary on top of result cards is a real UX win, but it sits over a form that still ignores 4 of 5 dropdowns and still defaults to `'movie'`. If you pick Pattern B, you also need to fix the form wiring as a separate workstream or live with the existing constraint that most queries collapse to the same TMDB results.

### Pattern A+B — both, chained

Plausible only after the form-wiring fix is in place. The cleanest sequencing is: pre-final fixes land → Pattern A replaces the dropdowns with a natural-language input → Pattern B layers commentary on the results. Each step is independently shippable, which is the right shape for a one-week sprint.

## What carries over (and what doesn't)

- **Your per-query cache strategy** — your keys already disambiguate by query. Once the queries themselves are no longer collapsing to `'movie'` (Pattern A or the form fix), the cache keys disambiguate correctly with no further code change.
- **Your delegated card click and `showDetail(movie, container, onBack)` callback** — stays. Groq commentary (if you do Pattern B) can render in the same back-supporting flow.
- **Your serverless transform structure** — stays. The Groq call slots in alongside your TMDB fetch.
- **Your views.js** — keeps `createElement` + `textContent`. Add a refusal renderer for `refused: true`.
- **What changes** — your form. Pattern A replaces it with one text input; Pattern B keeps it (but you also need the wiring fix as a parallel workstream).

## A sketched Pattern A schema for TMDB discover

```js
{
  "with_genres": number[] | null,         // TMDB genre IDs
  "primary_release_year": number | null,  // single year
  "year_range": [number, number] | null,  // for "the 90s" → [1990, 1999]
  "with_runtime.lte": number | null,      // maximum runtime in minutes
  "vote_average.gte": number | null,      // minimum rating
  "mood": string | null,                  // e.g., "tense", "feel-good" (becomes a tag in q)
  "refused": boolean,
  "refusal_reason": string
}
```

Your system prompt lists TMDB's valid genre IDs (the same numeric codes your existing TMDB integration already understands) so Groq returns IDs the API will accept.

## My soft recommendation

If I had to pick one for you, I would pick **Pattern A** with a high degree of confidence. It is the only pattern that solves a real shipped bug as a free side effect — the cache-key collision and the dropdown-wiring problem both dissolve when free-text input replaces the form. Pattern B over a still-broken form would mean shipping commentary that sits on top of the same cached `'movie'` results. Pattern A makes the project work the way users assume it does.

## What to read next

- `INSTRUCTIONS.md` — the assignment overview
- `CHECKLIST.md` — concrete deliverables
- `docs/tutorials/pattern-a-translate-input.md` — Pattern A walkthrough with Open Library; translate the schema to TMDB discover params
- `docs/tutorials/groq-moderation-floor.md` — the four required defenses
