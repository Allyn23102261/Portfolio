# Portfolio

Personal developer portfolio for Allyn Segundino. Plain HTML/CSS/JS, no build step.

## Files
- `index.html`
- `styles.css`
- `script.js`

## Publish with GitHub Pages

1. On GitHub, create a new repository named `Portfolio`.
2. Don't initialize it with a README — you'll push these files in directly.
3. From this folder, run:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Allyn23102261/Portfolio.git
   git push -u origin main
   ```
4. Go to the repo's **Settings → Pages**. Under "Build and deployment", set source to "Deploy from a branch," branch `main`, folder `/ (root)`, then save. This isn't automatic for a repo named anything other than `username.github.io`, so it needs to be set manually.
5. Wait a minute or two, then visit `https://allyn23102261.github.io/Portfolio/`. Live.

Any future edit: commit and `git push` — the site rebuilds automatically, no separate deploy step.
