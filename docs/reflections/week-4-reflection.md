# Week 4 reflection

Answer each question thoughtfully. There are no wrong answers — the goal is to reflect on what you learned and how your understanding changed.

---


## 1. The enforcement ladder

The new linter (ESLint 9 + unicorn plugin) caught unsafe DOM methods, missing error handling, and required defensive coding that AGENTS.md alone didn’t enforce. AGENTS.md can catch project-specific rules and best practices that a linter can’t check automatically.

---


## 2. Hooks across contexts

The common pattern is that hooks run code automatically at key moments (like saving, committing, deploying, or handling requests) to enforce rules, automate checks, or trigger actions.

---


## 3. Which enforcement layer changed your habits

Linting (ESLint + unicorn) changed my habits the most, because it blocked unsafe code and forced me to fix issues before committing.

---


## 4. The data swap

I was surprised by how often API data was missing fields or had a different shape than my static data.js. I had to add defensive checks and handle loading/error states.

---


## 5. The transform challenge

The hardest part was mapping TMDB’s response to my app’s expected shape, especially for fields that didn’t exist (like genre or mood). I solved it by providing defaults or omitting those fields.

---


## 6. New API fields

I added overview and poster from the API. These made the app feel more real and visually appealing compared to the static version.

---

## 7. Error handling philosophy

You used try/catch in four different contexts this week: the serverless function, fetch in app.js, the localStorage wrapper, and the npm lint guard. What is the common pattern across all of them? What changes between contexts?
