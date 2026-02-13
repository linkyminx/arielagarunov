# Logos & Letters — Philosophy Essay Site

A minimal, editorial-style philosophy essay site built with pure HTML, CSS, and JavaScript. No build step required — works directly on GitHub Pages.

## 🚀 Getting Started on GitHub Pages

### 1. Create a new GitHub repository

Go to [github.com/new](https://github.com/new) and create a repository. You can name it anything — for example `philosophy-essays`.

To publish at a clean URL like `yourusername.github.io`, name it exactly `yourusername.github.io` (using your real GitHub username).

### 2. Upload the files

Upload all files in this folder to the root of your repository:

```
index.html
about.html
essay.html
style.css
main.js
README.md
```

You can do this via the GitHub web interface (drag and drop into the repo) or using Git:

```bash
git init
git add .
git commit -m "Initial site"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select `Deploy from a branch`
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**

Your site will be live within a minute or two at:
`https://yourusername.github.io/your-repo-name/`

---

## 📝 Adding Essays

Each essay is an HTML file. To add a new essay:

1. **Duplicate `essay.html`** and rename it (e.g. `essay-my-topic.html`)
2. **Edit the content** — replace the title, tags, date, and body text
3. **Add a card** in `index.html` — copy one of the `<article class="essay-card">` blocks and update it:
   - Set `data-tags` to the relevant topics (e.g. `data-tags="ethics language"`)
   - Update the title, excerpt, date, and tag label
   - Point `href` to your new file (e.g. `href="essay-my-topic.html"`)

### Available tags

The filter bar on the homepage supports these tags (must match exactly):

| Tag label in UI | `data-tags` value |
|---|---|
| Ethics | `ethics` |
| Metaphysics | `metaphysics` |
| Language | `language` |
| Philosophy of Mind | `mind` |
| Political Philosophy | `politics` |

To add a new topic, add a new `<button class="tag-btn" data-tag="yourtopic">` in `index.html` and use that value in `data-tags`.

---

## ✏️ Customizing

### Change the site name
Search for `Logos &amp; Letters` across all HTML files and replace with your preferred title.

### Update the About page
Open `about.html` and fill in your name, bio, and contact details. Replace the portrait placeholder with a real `<img>` tag if you like.

### Change colors or fonts
Open `style.css` and edit the CSS variables at the top:

```css
:root {
  --ink:       #1a1208;   /* main text */
  --warm-bg:   #f5f0e8;   /* page background */
  --parchment: #ede6d4;   /* card/sidebar bg */
  --accent:    #8b2e00;   /* rust red accent color */
  ...
}
```

Fonts are loaded from Google Fonts — swap them out in the `<link>` tag in each HTML file.

---

## 📂 File Structure

```
.
├── index.html      ← Essay listing + search/filter
├── about.html      ← About / bio page
├── essay.html      ← Essay template (duplicate for each essay)
├── style.css       ← All styles
├── main.js         ← Search + filter logic
└── README.md       ← This file
```

---

Built with [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) and [DM Mono](https://fonts.google.com/specimen/DM+Mono).
