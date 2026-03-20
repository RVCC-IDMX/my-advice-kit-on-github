# CLI tools — Netlify CLI and GitHub CLI

This project uses two command-line tools beyond Node.js and npm. Both are optional during early parts of the assignment but required for deployment (Netlify CLI) and for the gist workflow in Part 1 (GitHub CLI).

---

## GitHub CLI (gh)

The GitHub CLI lets you interact with GitHub from your terminal — creating gists, managing repos, checking pull requests, and more. In this assignment you may use it to publish and download your `BUILD-PROMPT.md` as a private gist.

### Install on macOS

GitHub CLI is installed through Homebrew, the package manager for macOS. If you do not have Homebrew yet, install it first.

**Install Homebrew** (skip if you already have it):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the on-screen instructions. When it finishes, close and reopen your terminal so the `brew` command is available.

**Install GitHub CLI:**

```bash
brew install gh
```

### Install on Windows

Download the installer from the [GitHub CLI releases page](https://cli.github.com/). Run the `.msi` file and follow the prompts. After installation, open a new terminal window so `gh` is available.

### Install on Linux

Follow the instructions for your distribution on the [GitHub CLI install page](https://cli.github.com/).

### Authenticate

After installing, log in to your GitHub account:

```bash
gh auth login
```

Choose "GitHub.com," then follow the prompts. You will authenticate through your browser. When it finishes, verify with:

```bash
gh auth status
```

You should see your GitHub username and that you are logged in.

---

## Netlify CLI

The Netlify CLI lets you deploy your site to Netlify directly from the terminal — no need to use the Netlify web dashboard.

### Install

```bash
npm install -g netlify-cli
```

This installs the `netlify` command globally so it is available in any project.

### Authenticate

Log in to your Netlify account:

```bash
netlify login
```

This opens your browser for authentication. When it finishes, verify with:

```bash
netlify status
```

You should see your Netlify user info.

### First-time project setup

Before you can deploy, you need to link this project to a Netlify site. From the root of your repo:

```bash
netlify init
```

When prompted:

- Choose **"Create & configure a new site"**
- Pick your team (usually your personal account)
- Choose a site name or accept the random one
- Set the **build command** to `npm run build`
- Set the **publish directory** to `dist`

These settings are also saved in `netlify.toml` at the root of this repo, so Netlify already knows how to build your project.

### Deploy

Once the site is linked:

```bash
netlify deploy --prod
```

This builds your project and pushes the `dist/` folder to Netlify's CDN. Your site is live at the URL shown in the output.

---

## Quick reference

| Command              | What it does                              |
| -------------------- | ----------------------------------------- |
| `gh auth login`      | Log in to GitHub                          |
| `gh auth status`     | Check your GitHub login                   |
| `gh gist create`     | Create a new gist                         |
| `gh gist view`       | View a gist's contents                    |
| `netlify login`      | Log in to Netlify                         |
| `netlify status`     | Check your Netlify login                  |
| `netlify init`       | Link your project to a Netlify site       |
| `netlify deploy --prod` | Deploy your site to production         |
