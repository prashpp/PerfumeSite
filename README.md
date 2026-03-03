# Aurelia Perfume — Frontend

## Project overview

Luxe, artisanal perfume showcase built with React, Framer Motion and Tailwind. The site emphasizes editorial imagery, subtle motion, and a restrained gold accent to convey craft and luxury.

## Repository layout (current)

Project root:

- App.jsx
- index.html
- main.jsx
- package.json
- tailwind.config.js
- vite.config.js
- README.md
- src/

Key `src/` folders:

- `src/components/layout/` — `Navbar.jsx`, `Layout.jsx`, `Footer.jsx`
- `src/components/sections/` — `HeroSection.jsx`, `FeaturedCollection.jsx`, `BespokeSection.jsx`, `PhilosophySection.jsx`
- `src/components/ui/` — `Button.jsx`, `ProductCard.jsx`, `FadeInSection.jsx`, `GoldDivider.jsx`, `SectionLabel.jsx`
- `src/data/` — `products.js`, `animations.js`
- `src/pages/` — `HomePage.jsx`, `CollectionsPage.jsx`, `ProductDetailPage.jsx`

This README reflects the current file/folder structure and the implemented features.

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- react-router-dom
- lucide-react (icons)

## Exact setup (copy & paste)

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Design decisions (summary)

- Serif display + sans body for editorial hierarchy.
- Dark canvas `#0D0D0E` and warm-gold accent `#C5A059`.
- Product grid responsive: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Product cards use `aspect-[4/5]` for bottle-like proportions.
- Hover CTA uses `group-hover` so hovering anywhere on a card reveals the Quick View button.

## Product detail error handling

- Product detail page resolves `:id` from the URL. If no product is found it renders a friendly "Product not found" panel with navigation links instead of a blank page or runtime error.

## Verification checklist

1. Start dev server: `npm run dev`.
2. Open `/product/1` — product detail should render.
3. Open `/product/999` — the "Product not found" panel should appear.
4. Open `/collections` — filters and sort should update the product grid.

## Known limitations

- Client-side data only (`src/data/products.js`) — not suitable for very large catalogs or SSR/SEO.
- No production image CDN configured (images currently use external URLs).
- Accessibility work remains (a11y audit recommended).

## Next steps (recommended)

- Add a backend or headless CMS for product data and server-side rendering.
- Add E2E tests (Playwright) for critical flows.
- Perform accessibility pass and Lighthouse audits.

---

If you want, I can add a Playwright test for the invalid-product flow or expand this README with contribution guidelines and developer scripts. Tell me which you'd like next.
