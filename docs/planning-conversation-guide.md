# Planning your "What should I...?" site

This guide walks you through a planning conversation with an AI agent. You should be reading this in your browser while your **original** "What Should I...?" repo is open in VS Code.

When you finish, you will have a `BUILD-PROMPT.md` file ready to take back to your my-advice repo.

---

## Before you start — choose your model

Copilot lets you pick which AI model powers your agent. The model picker in VS Code shows a multiplier next to each one — 0x, 1x, 3x, and so on. That number tells you how fast it burns through your monthly premium request budget.

- **0x** models are free. They work fine for routine tasks.
- **1x** models are the baseline premium tier — strong for planning, debugging, and code generation.
- **3x and higher** models are more capable but expensive. Best for complex reasoning, not simple questions.
- **Auto** lets Copilot choose. Reasonable default, but for a planning conversation, pick the model yourself.

**This is a planning conversation. Spend the 1x or 3x here.** One good planning conversation beats three mediocre ones. The plan shapes everything that comes after it. Save the 0x models for building from a clear prompt later.

---

## Step 1 — Start the conversation

Open your original "What Should I...?" repo in VS Code. Start a Copilot agent conversation and send this exact message:

> "Review the files in this repo. This was one of my first assignments in my JS class. Now I am being asked in a different assignment and a different repo to recreate this with brand new html/css/js. I want to create a prompt here using a markdown file you and I create after we plan together how that new site will be mine with my ideas and my design decisions. Then I will copy that file to the new repo and have an AI agent help me build that site."

---

## Step 2 — Check the agent's first response

A **good** response names specific things the agent actually saw in your files:

> "Here's what I see from your workspace: `index.html` presents a form for users to select their vibe, duration, genre, and activity. The site is titled 'What Should I Listen To?' `data.js` contains an array of song options with properties: title, activity, vibe, genre, and duration..."

A **bad** response is generic and could apply to any project:

> "Great plan! Here's how we can proceed: 1. Review the current project. 2. Plan your new site. 3. Draft a markdown prompt..."

If the agent gives you a generic response, push back. Tell it to read the files first and tell you specifically what it sees.

---

## Step 3 — Answer questions one at a time

The agent will ask you questions about your design decisions. Answer them one at a time.

- If it asks too many questions at once, tell it to slow down and ask one question.
- If it tries to write the build prompt before you have made your design decisions, tell it you are not ready yet.
- Take your time. This is where your site becomes yours.

---

## Step 4 — Create BUILD-PROMPT.md

When your planning conversation is complete, the result is a file called `BUILD-PROMPT.md`. This file captures your design decisions and tells the next agent exactly what to build.

**Important: your data stays inside `BUILD-PROMPT.md`.** Any dataset, array, or object from your original repo should be included as a code block inside the build prompt — not copied as a separate file. No source files travel between repos. The build prompt is the only thing that crosses over.

---

## Step 5 — Save BUILD-PROMPT.md to your my-advice repo

`BUILD-PROMPT.md` must end up in the **root** of your my-advice repo (right next to `index.html`, `AGENTS.md`, and `package.json`). This file is a deliverable — your instructor will review it to understand your planning process.

You have two options:

### Option A — Copy the file manually

Find `BUILD-PROMPT.md` in your original repo's file explorer. Copy its contents, then open your my-advice repo, create a new file called `BUILD-PROMPT.md` in the root, and paste.

### Option B — Use a private gist (recommended)

Ask your Copilot agent to publish `BUILD-PROMPT.md` as a private gist and then download it into your other repo. Say:

> "Create a private GitHub gist from BUILD-PROMPT.md using the gh CLI. Then show me the command to download it into my other repo."

The agent will run something like:

```bash
gh gist create BUILD-PROMPT.md --desc "Build prompt for my-advice site" --public=false
```

It will give you a gist URL. Then, when you open your my-advice repo, you can download it directly into the root:

```bash
gh gist view <gist-id> --raw > BUILD-PROMPT.md
```

The gist approach is a useful professional skill — gists are how developers share snippets across projects.

### Verify it landed in the right place

Your my-advice repo should now look like this:

```
my-advice/
  BUILD-PROMPT.md   ← your planning deliverable (right here in the root)
  index.html
  AGENTS.md
  package.json
  src/
  docs/
  ...
```

---

## You are done here

Go back to your my-advice repo and continue with **Part 2** in `docs/INSTRUCTIONS.md`.
