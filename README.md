# Fraternity Site (POC)

Static marketing site — no build step, no framework. Open any `.html` file directly or serve the folder locally.

## Structure
- `index.html`, `about.html`, `rush.html`, `events.html`, `contact.html` — pages
- `css/style.css` — shared styles (brand colors live at the top as CSS variables)
- `js/main.js` — mobile nav toggle + small interactions
- `assets/images/` — logo, photos

## Local preview
Any static server works, e.g.:
```
npx serve .
```
or just double-click `index.html`.

## TODO before this is real
- [ ] Real chapter name, letters, colors, logo
- [ ] Real photos in `assets/images/`
- [ ] Real copy on every page (currently placeholder)
- [ ] Rush form wired to Formspree (or swap for mailto)
- [ ] Deploy to GitHub Pages / Netlify
