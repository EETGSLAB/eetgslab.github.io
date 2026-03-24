# EET-GS Lab Website

**Energy Equity & Transition for the Global South**  
Live site → [firuzahamed.github.io/eetgslab](https://firuzahamed.github.io/eetgslab)

---

## Project Structure

```
eetgslab/
├── _config.yml             # Jekyll site configuration
├── Gemfile                 # Ruby gem dependencies
├── index.html              # Home page
│
├── projects/
│   └── index.html          # Research programs page
│
├── publications/
│   └── index.html          # Publications & reports page
│
├── members/
│   └── index.html          # Lab members page
│
├── contact/
│   └── index.html          # Contact & collaboration page
│
├── _layouts/
│   └── default.html        # Shared HTML layout (nav + footer)
│
├── assets/
│   ├── css/
│   │   └── style.css       # All site styles
│   └── js/
│       └── main.js         # Navigation & interactivity
│
└── images/
    ├── README.md           # Image guidelines
    ├── favicon.png         # Browser tab icon (add your own)
    ├── Nahid.png           # Lab director photo
    └── placeholder.png     # Generic member avatar
```

---

## Local Development

### Prerequisites
- Ruby ≥ 3.0
- Bundler (`gem install bundler`)

### Run locally

```bash
bundle install
bundle exec jekyll serve
# → Visit http://localhost:4000/eetgslab/
```

---

## Customisation Guide

### Adding a new team member
Open `members/index.html`, copy a `<div class="member-card">` block inside the relevant section and update:
- `src` → path to photo in `/images/`
- `alt` → person's name
- Member name, role, and email

### Adding a publication
Open `publications/index.html`, copy an `<article class="pub-card">` block and fill in the year, title, venue, and description.

### Adding a project
Open `projects/index.html`, copy an `<article class="project-card">` block. Badge classes:
- `badge-active` → green
- `badge-dev` → amber
- `badge-partner` → blue

### Changing colours / fonts
All design tokens are CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --color-accent:   #2d6a4f;   /* forest green */
  --color-accent2:  #d4a017;   /* amber */
  --font-display:   'Sora', sans-serif;
  --font-body:      'Lora', serif;
  /* ... */
}
```

### Contact form
The contact form in `contact/index.html` uses [Formspree](https://formspree.io).  
Replace `YOUR_FORM_ID` in the `action` attribute with your Formspree endpoint.

---

## Deployment (GitHub Pages)

This site is already configured for GitHub Pages with Jekyll.

1. Push this folder to the `main` branch of your repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. GitHub will build and publish automatically

---

## License

GPL-3.0 — see [LICENSE](LICENSE)
