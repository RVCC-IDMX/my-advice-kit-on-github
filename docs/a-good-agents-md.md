# What Makes a Good AGENTS.md

`AGENTS.md` is read by every AI agent that works in your repo — GitHub Copilot, Claude Code, and others. One file, all tools. It replaces `.github/copilot-instructions.md`.

Think of it as standing instructions you give every collaborator before they touch your code. The shorter and more specific it is, the better it works.

## The three things it must do

**1. Tell the agent who it's working with.**
An agent that knows your skill level gives better explanations. It won't waste time explaining `const` vs `var`, but it will slow down when you hit something new.

**2. Set the code rules.**
Non-negotiable standards for this project. The agent follows them even when it thinks another approach might work.

**3. Leave room for you.**
The bottom section is yours. This is where you customize the agent based on what you learn works for you. This is called context engineering and it is a real professional skill.

## What good looks like — a real example

Here is an actual agent response after reading an `AGENTS.md` like the one in this repo:

> _"Here's what I see from your workspace: `index.html` presents a form for users to select their vibe, duration, genre, and activity. The site is titled 'What Should I Listen To?' `data.js` contains an array of song options with properties: title, activity, vibe, genre, and duration in seconds. `matching.js` provides functions to check if a song matches user preferences using clear, testable logic with no DOM."_

That response is useful because the agent read five files before writing a word. It named specific things it actually saw.

Compare it to this response to the exact same prompt, from an agent without good instructions:

> _"Great plan! Here's how we can proceed: 1. Review the current project to understand its features. 2. Plan your new site. 3. Draft a markdown prompt..."_

That second response could have been written for a weather app, a recipe site, or a blank repo. The agent read nothing.

**The test:** If the agent's first response could have been written without reading a single file, it didn't read the files. Push back.

## What good looks like — and where it can still improve

The real example above got the first part right: read, then summarize specifically. But it ended with four questions at once. A good agent asks one focused question and waits. If you get a list of questions, answer only the one that matters most.

## How to write your personal instructions section

Pay attention to your interactions. When the agent helps you well, ask yourself what made it work. Write it down.

Examples of useful personal instructions:

- _"When I ask you to explain something, use an analogy before showing code."_
- _"I work better with short examples I can run immediately, not long complete solutions."_
- _"This project uses a warm editorial aesthetic. Don't suggest minimal designs."_

Examples that don't help:

- _"Be helpful."_ — too vague
- _"Write good code."_ — too vague

## Keeping it lean

The `AGENTS.md` in this repo is intentionally short. Every line occupies space in the agent's context window. A long `AGENTS.md` crowds out the actual files the agent needs to read.
