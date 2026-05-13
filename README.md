
# What should I watch?

Personalized movie recommendations using natural language, Groq, and TMDB — with robust moderation and accessible UI.

## Project Overview

This app lets you describe the kind of movie you want to watch in your own words (e.g., "a tense 90s thriller under two hours"). Your request is sent to a serverless function that uses Groq to translate your input into TMDB API parameters, fetches matching movies, and returns results. Unsafe or unanswerable requests are safely refused with clear feedback.

**Live demo:** [chooseafilm.netlify.app](https://chooseafilm.netlify.app/)

## How it works

1. User enters a movie request in natural language (single input field)
2. The serverless function (`netlify/functions/api.mjs`) uses Groq to translate the input into TMDB query parameters, enforcing a moderation floor
3. The function fetches matching movies from the TMDB API
4. Results, errors, or refusals are rendered with accessible, a11y-friendly UI

## Key Features

- **Groq-powered natural language understanding** — no dropdowns, just describe what you want
- **Moderation floor** — input is validated and can be safely refused (with a reason)
- **Robust error handling** — all errors and refusals are shown with clear, accessible feedback
- **Per-query caching** — fast repeat searches, no duplicate API calls
- **Accessible UI** — visible focus, keyboard navigation, high contrast, and screen reader support

## File Structure

| File/Folder                  | Purpose                                                      |
|------------------------------|--------------------------------------------------------------|
| netlify/functions/api.mjs    | Serverless API: Groq call, moderation, TMDB fetch, error logic|
| src/js/views.js              | All DOM rendering: results, errors, refusals, loading spinner |
| src/js/app.js                | Handles form, API calls, error/refusal UI, user interaction   |
| src/js/matching.js           | Logic functions (no DOM)                                     |
| src/js/data.js               | Fallback data (if used)                                      |
| src/css/style.css            | All styles: accessible, responsive, and a11y-friendly         |
| index.html                   | Page structure and input form                                |

## Usage

1. **Describe your movie:** Type what you want to watch (e.g., "a feel-good animated movie from the 2000s").
2. **Get recommendations:** Matching movies are shown as cards. Click a card for details.
3. **If input is refused:** Unsafe or unanswerable requests are blocked, with a clear refusal message and reason.
4. **If an error occurs:** Network or API errors are shown with accessible feedback. You can try again immediately.

## Development

### Running locally

1. Install dependencies: `npm install`
2. Start the dev server (with Netlify functions): `npm run dev:api`
	- Or, run Vite only: `npm run dev` (for static front-end)
3. Open [http://localhost:8888](http://localhost:8888) in your browser

### Linting, formatting, and testing

- Lint: `npm run lint`
- Format: `npm run format`
- Test: `npm run test`

### Accessibility & Code Quality

- All DOM updates use `textContent` and `createElement` (never `innerHTML` for dynamic content)
- All interactive elements are keyboard accessible with visible focus
- All error/refusal messages use ARIA roles and icons for clarity
- CSS uses custom properties and high-contrast color schemes

See `AGENTS.md` and `docs/reference/` for full code and accessibility rules.

## AI Collaboration

This project uses Groq for natural language understanding and moderation. See `ai-collaboration-summary.md` for details on AI usage and prompts.

## License

MIT License (Cynthia Teeters) & Kaitlin Taylor
