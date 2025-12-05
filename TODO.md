# Wayne Portfolio Launch Checklist

## Immediate

- [x] Add project `.gitignore` for macOS, Python venv, node_modules, build, IDE cruft
- [x] Add `rel="noopener noreferrer"` to every external `target="_blank"` link
- [ ] Verify image paths and favicon load on GitHub Pages
- [ ] Add basic SEO meta tags (title/description/og) per page
- [ ] Run a quick Lighthouse pass (performance/accessibility/SEO)

## Security & Privacy

- [ ] Add SRI hashes or self-host critical JS/CSS (Tailwind CDN, FontAwesome, Plotly, Vanta)
- [ ] Ensure contact form is client-side only (no secrets); wire to form backend only with env vars
- [ ] Confirm no secrets in repo (API keys, tokens, .env)

## QA

- [ ] Test all nav links across `index`, `about`, `projects`, `contact`
- [ ] Validate layout on mobile breakpoints (hero, grids, charts, form)
- [ ] Smoke-test `serve.py` local server (`python serve.py 8000`)

## Deployment

- [ ] Initialize git repo and push to `wtrout187/waynetrout-portfolio`
- [ ] Enable GitHub Pages on `main` (root)
- [ ] Verify site loads at `https://wtrout187.github.io/waynetrout-portfolio/`
