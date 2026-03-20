# How AGENTS.md and your weekly reflection work

Two files in this repo grow with you across the entire project: `AGENTS.md` and `ai-collaboration-summary-template.md`. Neither is graded. Both are read.

## What AGENTS.md is

AGENTS.md is your standing instructions to every AI agent that works in this repo. When you open a Copilot conversation, the agent reads this file before it reads anything else. What you write here shapes how the agent responds to you — not just once, but in every conversation for the rest of the project.

The top half of the file has class-wide rules that your instructor maintains. These set the code standards everyone follows: ES modules, semantic HTML, accessibility, and so on. As the course introduces new concepts, your instructor will update these rules. For example, the rule banning `fetch()` and `async` will be removed when those topics are taught — and replaced with rules about how to use them well.

The bottom half is yours. This is where you write rules based on your own experience working with AI agents. What helps you. What does not. What your project specifically needs. This section starts small and grows every week.

## What the reflection template is

Each week, your instructor provides a new set of questions in `ai-collaboration-summary-template.md`. At the start of the week, you replace the old questions with the new ones. At the end of the week, you fill it out based on what actually happened.

The questions change because what you are learning changes. Week 1 asks about planning conversations and tooling. Week 2 asks about DOM code and debugging. The questions are always tied to the work you just did — not abstract or hypothetical.

## The weekly workflow

**At the start of each week:**

1. Open `AGENTS.md` and read your personal instructions from last week. Some will still be useful. Some will be too vague now that you know more. Some will no longer apply. Rewrite, remove, or sharpen them. A rule like "explain things simply" might become "when explaining DOM methods, show me how to verify it in DevTools Console before writing the JS."

2. Replace the contents of `ai-collaboration-summary-template.md` with the new questions provided in the week's instructions.

**During the week:**

Work on the assignment. When you notice the agent doing something helpful or unhelpful, update your AGENTS.md in the moment. Do not wait until the end. The best rules come from real frustration or real clarity — capture them while they are fresh.

**At the end of the week:**

Fill out the reflection template. Be specific. "The agent helped me" is not useful to you or your instructor. "The agent kept generating innerHTML when I asked for dynamic content, so I added a rule requiring createElement — after that it switched immediately" tells a story about what you learned and how you adapted.

## How your instructor uses these files

Your instructor reads both files every week. Not to grade them — there is no rubric, no points for length, no penalty for short answers. The purpose is to understand:

- **Where you are.** Your AGENTS.md rules reveal what concepts you have internalized and what is still confusing. A student who writes "always guard querySelector against null" has been bitten by that bug and learned from it. A student who has no DOM-related rules may not have engaged deeply with the code yet.

- **What is working.** Your reflections tell your instructor which parts of the assignment landed and which did not. If every student says the nav bar was confusing, the instructions need work — that is the instructor's problem to fix, not yours.

- **How you are growing.** Comparing your AGENTS.md from week 1 to week 4 shows your trajectory. Early rules tend to be about communication style ("explain before showing code"). Later rules tend to be about specific technical patterns ("use event delegation for dynamically created lists"). That progression is learning made visible.

- **How to help you.** If your AGENTS.md has a misconception in it — a rule that sounds reasonable but would lead to problems — your instructor can address it in class or office hours. The file is a conversation starter, not a test.

## What makes a strong AGENTS.md

- **Specific over vague.** "Be helpful" wastes the agent's context window. "When I ask about an error, show me how to reproduce it in DevTools Console before suggesting a fix" changes behavior.
- **Grounded in experience.** The best rules come from something that actually happened. "The agent kept doing X, so I wrote this rule, and now it does Y instead."
- **Maintained, not abandoned.** Delete rules that no longer apply. Rewrite rules that are too broad. A stale AGENTS.md is worse than a short one.
- **Honest about what you do not know.** Writing "I have not worked with event listeners yet — explain them step by step when they come up" is not a weakness. It is good context engineering.

## What makes a strong reflection

- **Evidence, not opinions.** "I learned about the DOM" does not help anyone. "I did not understand why querySelector returned null until I opened DevTools and saw the element had a different ID than what the agent used" helps you remember and helps your instructor understand.
- **Connections between the work and the rules.** The most useful reflections link what happened during the assignment to what changed in AGENTS.md. You noticed something, you encoded it as a rule, and you saw the result.
- **Honesty about what did not work.** If you struggled with something all week and never figured it out, say so. That is the most valuable signal your instructor can get.

## The long game

By the end of the semester, your AGENTS.md will be genuinely useful — not as a class assignment you completed, but as a tool you built for yourself. You will understand that working with AI is not about writing better prompts in the moment. It is about writing better standing instructions that compound over time. That skill transfers to every AI tool you will use in your career.
