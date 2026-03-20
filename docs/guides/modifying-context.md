# Modifying context — customizing your AGENTS.md

## What is context engineering?

When you edit `AGENTS.md`, you are doing context engineering — shaping the information an AI agent reads before it responds to you. This is a real skill used by professional developers. The better your context, the better the agent's output.

`AGENTS.md` is read by every AI agent that works in your repo: GitHub Copilot, Claude Code, and others. One file controls them all.

## Where to make changes

Open `AGENTS.md` in the repo root. The top sections — "About this student," "How to help," and "Code rules" — are set for the whole class. Do not change those.

The section you own is **"My personal instructions"** at the bottom. This is where you add rules based on what you have learned about how you work best with AI agents.

## What full credit looks like

Imagine the agent keeps giving you long blocks of code with no explanation. You add this to your personal instructions:

> - When I ask for help, explain the approach in one or two sentences before showing any code.

Or maybe the agent keeps suggesting minimal black-and-white designs when your site has a warm, colorful aesthetic:

> - This site uses a warm color palette. Do not suggest minimal or monochrome designs.

That is what context engineering looks like in practice — you notice a problem, you write a rule, and the agent follows it next time. You are not just fixing one conversation. You are fixing every future conversation.

## How to write good personal instructions

Think about your experience so far:

- **What worked?** If the agent explained something in a way that clicked, write down what made it work. Example: _"When I ask you to explain something, use an analogy before showing code."_
- **What did not work?** If the agent gave you a wall of code when you wanted a short example, say so. Example: _"I work better with short examples I can run immediately, not long complete solutions."_
- **What is specific to your project?** If your site has a particular aesthetic or design direction, tell the agent. Example: _"This project uses a warm editorial aesthetic. Don't suggest minimal designs."_

## Instructions that do not help

Vague instructions waste context window space:

- _"Be helpful"_ — the agent is already trying to be helpful
- _"Write good code"_ — too broad to act on
- _"Follow best practices"_ — which best practices? Be specific.

## Try it out

After adding your instructions, start a short agent conversation. Ask it to do something related to your instructions and see if its behavior changes. If it does not, your instruction might need to be more specific.
