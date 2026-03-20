# GitHub Actions 101

## What is CI?

CI stands for **Continuous Integration**. It means running automated checks on your code every time you push to GitHub. You do not have to remember to run the checks — GitHub does it for you.

In this project, the CI workflow runs the same linter you run locally with `npm run lint`. The idea is simple: if it passes on your machine, it should pass on GitHub. If it fails on GitHub, something slipped through.

## How it works in this repo

The workflow file lives at `.github/workflows/lint.yml`. You do not need to write or edit this file — just understand what it does.

When you push code or open a pull request, GitHub:

1. Spins up a fresh Ubuntu machine
2. Checks out your code
3. Installs Node.js 20
4. Runs `npm install`
5. Runs `npm run lint`

If the linter passes, you get a green check. If it fails, you get a red X.

## How to read the Actions tab

After you push to GitHub:

1. Go to your repo on GitHub
2. Click the **Actions** tab at the top
3. You will see a list of workflow runs — each one is triggered by a push or pull request
4. Click on a run to see the details
5. Click on the **lint** job to see the step-by-step output

If everything passed, every step has a green checkmark. If something failed, the failing step has a red X and you can expand it to see the error message — it will look just like the lint output you see in your terminal.

## Green check vs red X

- **Green check** means your code passed all the automated checks. It does not mean your code is perfect — it means it follows the rules.
- **Red X** means something failed. Click into the run, find the failing step, and read the error. It is almost always a lint error that you can fix locally with `npm run lint`, then push again.

## Why this matters

On a team, CI is the safety net. Even if someone forgets to run the linter locally, or if Husky is not set up on their machine, CI catches the problem. It is the same check, just running in a different place.

You now have two layers of protection:

- **Husky** catches problems before you commit
- **GitHub Actions** catches problems before code is merged
