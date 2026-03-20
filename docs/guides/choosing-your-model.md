# Choosing your model

Copilot lets you pick which AI model powers your agent. The model picker in VS Code shows a multiplier next to each one — 0x, 1x, 3x, and so on. That number tells you how fast it burns through your monthly premium request budget.

## What the multipliers mean

**0x** models are included with your plan. They cost nothing extra and work fine for most tasks — quick questions, routine edits, code completions. If you run out of premium requests, Copilot falls back to these automatically.

**1x** models are the baseline premium tier. Each interaction costs one premium request. These are strong general-purpose models — good for planning, debugging, and code generation.

**3x and higher** models are more capable but expensive. A 10x model burns ten premium requests per interaction. These are best for complex reasoning, architecture decisions, or stubborn bugs. They are not worth it for simple questions.

**Auto** lets Copilot choose the model for you. It gets a small discount on the multiplier and adapts based on system availability. It is a reasonable default, but when you know a conversation matters, pick the model yourself.

## When to spend and when to save

**Planning conversations — spend more.** When you are creating your `BUILD-PROMPT.md`, model quality matters. A stronger model asks better questions, pushes back on vague ideas, and helps you think through design decisions. One good planning conversation with a 1x or 3x model is worth more than three with a 0x model. The plan shapes everything that comes after it.

**Building from a prompt — save.** Once your build prompt is clear and specific, the build step is mostly execution. A 0x model can follow well-written instructions. Save your premium requests for the work that requires judgment.

**Debugging — it depends.** A lint error or typo does not need a premium model. A subtle logic bug or a question about how something works might. Use your judgment.

**Quick questions — use 0x.** "What does this error mean?" or "How do I link a stylesheet?" do not need premium models.

## What happens when you run out

You do not lose access to Copilot. It falls back to the 0x models, which are still functional. You just cannot use premium models until your budget resets. This is why spending deliberately on planning conversations early in the project is a better strategy than burning through your budget on routine tasks.
