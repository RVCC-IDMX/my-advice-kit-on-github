# Error Log

Every console error, browser warning, or lint failure gets a row here. Don't delete rows — the log is a record of how you got better.

| Date | Error message | File + line | My hypothesis | Fix | Blamed |
| ---- | ------------- | ----------- | ------------- | --- | ------ |
| 2026-04-24 | Runtime.HandlerNotFound - api.handler is undefined or not exported | netlify/functions/api.mjs | Netlify can't find my function export | Changed `module.exports` to `export default` for ESM | Me |
| 2026-05-01 | Groq endpoint/model not found or incorrect | netlify/functions/api.mjs | Groq API changed, endpoint/model outdated | Updated to /openai/v1/chat/completions and llama-3.1-8b-instant | Me |
| 2026-05-01 | Query parsing fails for some user input | netlify/functions/api.mjs | Query extraction not robust for all cases | Switched to context.url.searchParams and improved fallback | Me |
| 2026-05-02 | Year param not handled correctly | netlify/functions/api.mjs | Some queries with years failed or gave wrong results | Improved year parsing and validation logic | Me |
| 2026-05-03 | Error/refusal messages not accessible | src/js/views.js | Error UI not using ARIA roles or icons | Added showMessage with ARIA and icon support | Me |
| 2026-05-03 | Lint errors: innerHTML, unsafe DOM, formatting | src/js/app.js, src/js/views.js | Violated ESLint/project rules | Refactored to use textContent, createElement, and fixed formatting | Me |

Blamed: who or what introduced the error — you, the agent, or the starter code.
