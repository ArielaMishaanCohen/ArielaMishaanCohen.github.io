# arielamishaancohen.github.io

Personal portfolio of **Ariela Mishaan** — data scientist working on applied machine learning, business intelligence and entrepreneurship.

🌐 **https://arielamishaancohen.github.io**

## Structure

```
index.html              Page layout
assets/css/styles.css   Design system (tokens, light/dark themes, components)
assets/js/data.js       Links, images and tags for every project
assets/js/i18n/*.js     All text, one file per language (en, es)
assets/js/main.js       Rendering, language switch, theme, carousel
assets/reports/         Project reports (PDF)
demo/world-cup-2026/    Live World Cup 2026 prediction dashboard
```

## Editing

- **Change text:** edit `assets/js/i18n/en.js` and `assets/js/i18n/es.js`.
- **Add a repository link:** set `repo` for that project in `assets/js/data.js`.
- **Add a language:** copy `en.js` to e.g. `fr.js`, translate it, and add a `<script>` tag for it in `index.html`. The language switch picks it up automatically.

Static site, no build step — GitHub Pages serves it as is. To preview locally:

```sh
python3 -m http.server 8000
```
