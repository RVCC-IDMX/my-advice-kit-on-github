# Error Log

Every console error, browser warning, or lint failure gets a row here. Don't delete rows — the log is a record of how you got better.

| Date | Error message | File + line | My hypothesis | Fix | Blamed |
| ---- | ------------- | ----------- | ------------- | --- | ------ |
| 2026-04-24 | Runtime.HandlerNotFound - api.handler is undefined or not exported | netlify/functions/api.mjs | Netlify can't find my function export | Changed `module.exports` to `export default` for ESM | Me |

Blamed: who or what introduced the error — you, the agent, or the starter code.
