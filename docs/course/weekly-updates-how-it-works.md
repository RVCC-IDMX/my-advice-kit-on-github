# How weekly updates work

This project runs across multiple weeks in the same repo. Each week, your instructor delivers new instructions, checklists, and sometimes new tutorials or reference docs. These updates arrive as a GitHub Pull Request.

## What happens each week

1. **Your instructor creates a GitHub Issue** in your repo titled something like "Move to Week 2." The issue describes what is changing and why — read it first.

2. **A Pull Request appears** linked to that issue. The PR contains updated files in the `docs/` folder — new instructions, a new checklist, and any new tutorials for that week's concepts.

3. **You review the PR.** Click the "Files changed" tab to see exactly what is different. This is a real code review — you are reading a diff, understanding what changed, and deciding whether to accept it. This is the same process professional developers use every day.

4. **Approve and merge the PR.** Once you have read through the changes, approve the PR and merge it into your `main` branch on GitHub.

5. **Pull to your local repo.** In your terminal:
   ```bash
   git pull
   ```
   Your local files now match what is on GitHub, including the new week's instructions.

6. **Do the start-of-week workflow.** Review your AGENTS.md and replace your reflection template contents as described in the new instructions.

## What gets updated (and what does not)

**Updated by your instructor via PR:**

- `docs/INSTRUCTIONS.md` — new week's tasks and parts
- `docs/CHECKLIST.md` — new week's completion checklist
- New files in `docs/tutorials/` and `docs/reference/` as needed

**Never touched by your instructor (these are yours):**

- `AGENTS.md` — your personal instructions section belongs to you
- `ai-collaboration-summary-template.md` — you replace the contents yourself
- Everything in `src/` — your code
- `index.html`, `detail.html` — your pages
- `BUILD-PROMPT.md` — your planning deliverable
- `docs/error-log.md` — your error tracking

Your instructor will never overwrite your code or your personal files. The PR only touches documentation files in `docs/` that you do not edit.

## Why it works this way

- **No merge conflicts.** Since you do not edit `docs/INSTRUCTIONS.md` or `docs/CHECKLIST.md`, the PR will always merge cleanly.
- **You see what changed.** The PR diff shows you exactly what is new this week before you accept it. No surprises.
- **Real-world practice.** Reviewing and merging PRs is how teams deliver updates in professional software development. You are practicing that skill here.

## Get notified when updates arrive

By default, GitHub may not notify you when a new issue or PR appears in your repo. Set up watching so you never miss a weekly update:

1. Go to your repo on GitHub
2. Click the **Watch** dropdown button (top right of the page, next to Star and Fork)
3. Select **All Activity**

You will now receive email and web notifications whenever your instructor creates an issue or PR. This is also how professional teams stay aware of activity in repos they contribute to.

## If something goes wrong

- **You accidentally edited a file in `docs/`.** The PR may show a merge conflict. Ask your instructor for help — they can walk you through resolving it.
- **You forgot to pull.** Your local repo will be behind. Run `git pull` before starting the new week's work.
- **You do not see the PR.** Check the "Pull requests" tab in your GitHub repo. If nothing is there, your instructor may not have sent it yet.
