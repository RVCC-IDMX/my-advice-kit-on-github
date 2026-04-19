# Week 3 reflection

Take a few minutes to think about what happened this week — not just what you built, but how the process went.

---

## Your code

What changed about how you think about your project's structure after creating views.js and wiring events?

Creating views.js made me realize how important it is to separate logic from rendering. By moving all the DOM update code into view functions, my app.js became much cleaner and easier to follow. Wiring events with delegation also made the code more flexible and maintainable.

---

## Your agent

Did preparing your AGENTS.md with modern JS rules before coding change the quality of what your agent produced? What did you notice?

Yes, updating AGENTS.md with rules about querySelector, named callbacks, and avoiding innerHTML made the agent’s suggestions much safer and more modern. The code it generated was easier to understand and matched what I was learning in class.

---

## The rules

Which modern JS rule from `docs/rules/` stuck with you most? What clicked about it?

The rule about always using querySelector instead of getElementById really stuck with me. It’s more flexible and matches how CSS selectors work, which made my code more consistent and powerful.

---

## Biggest win or biggest loss

What was the moment this week that affected you most — something that finally worked, or something that really frustrated you?

My biggest win was seeing the detail view work with just one event listener and a back button. It felt great to see the whole flow working smoothly. My biggest frustration was tracking down why my cards weren’t clickable at first, but event delegation solved it.
