# Portfolio Operation Guide

This guide explains how to run, update, build, and deploy this portfolio.

Live site:

```text
https://mohamedabusubiyan.github.io/portfolio_abu/
```

Repository:

```text
git@github.com:mohamedabusubiyan/portfolio_abu.git
```

## Project Stack

- React
- Vite
- TypeScript
- Framer Motion
- GitHub Pages

The main portfolio source lives in:

```text
src/main.tsx
src/styles.css
public/
```

## Local Development

Install dependencies if needed:

```bash
pnpm.cmd install
```

Start the local dev server:

```bash
pnpm.cmd run dev
```

The local URL is usually:

```text
http://127.0.0.1:5173
```

## Production Build

Build the portfolio:

```bash
pnpm.cmd run build
```

The generated static site is written to:

```text
dist/
```

## GitHub Pages Configuration

This repository is deployed as a project page, so the Vite base path must stay:

```ts
base: "/portfolio_abu/"
```

That setting is in:

```text
vite.config.ts
```

GitHub Pages settings:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

## Deploy Flow

Use this flow after any portfolio update.

1. Build:

```bash
pnpm.cmd run build
```

2. Commit source changes to `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

3. Create a temporary deployment worktree:

```bash
git fetch origin gh-pages
git worktree add .gh-pages-worktree gh-pages
```

4. Replace the deployment files with the latest build:

```powershell
$target = Resolve-Path .gh-pages-worktree
Get-ChildItem -LiteralPath $target.Path -Force |
  Where-Object { $_.Name -ne ".git" } |
  Remove-Item -Recurse -Force

Copy-Item -Path dist\* -Destination $target.Path -Recurse -Force
```

5. Commit and push the deployment branch:

```bash
git -C .gh-pages-worktree add -A
git -C .gh-pages-worktree commit -m "Deploy latest portfolio"
git -C .gh-pages-worktree push origin gh-pages
```

6. Remove the temporary worktree:

```bash
git worktree remove .gh-pages-worktree --force
```

GitHub Pages usually updates within a few minutes.

## Resume Replacement

The resume download file is stored in:

```text
public/MOHAMED ABU SUBIYAN M - SOFTWARE DEVELEPOR.pdf
```

The download URL is defined in:

```text
src/main.tsx
```

Current code:

```ts
const resumeHref = `${import.meta.env.BASE_URL}MOHAMED%20ABU%20SUBIYAN%20M%20-%20SOFTWARE%20DEVELEPOR.pdf`;
```

When replacing the resume:

1. Copy the new PDF into `public/`.
2. Keep the same filename, or update `resumeHref`.
3. Run `pnpm.cmd run build`.
4. Commit to `main`.
5. Redeploy `gh-pages`.

## Common Updates

### Update Portfolio Text

Edit:

```text
src/main.tsx
```

Important content arrays and sections:

- `skills`
- `projects`
- `Experience`
- `Education`
- `Certifications`
- Hero and About copy

### Update Styling

Edit:

```text
src/styles.css
```

Mobile styles are under:

```css
@media (max-width: 680px)
```

### Update README

The public GitHub repo profile is:

```text
README.md
```

Keep it resume/profile focused.

## Troubleshooting

### Site Shows Old Version

Hard refresh the browser:

```text
Ctrl + F5
```

GitHub Pages may also take 1-3 minutes to refresh after deployment.

### Assets Do Not Load

Check that `vite.config.ts` still contains:

```ts
base: "/portfolio_abu/"
```

### Resume Download Fails

Confirm the PDF exists in `public/` and that `resumeHref` uses
`import.meta.env.BASE_URL`.

### Deployment Branch Has Source Files

The `gh-pages` branch should contain only built static files from `dist/`, not
the full source project.

## Useful Commands

```bash
pnpm.cmd run dev
pnpm.cmd run build
git status --short --branch
git push origin main
git push origin gh-pages
```
