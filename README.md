# AURELIA — React + Framer Motion

A luxury perfumery e-commerce app converted from static HTML to a fully structured React application with Framer Motion animations.

## 🗂 File Structure

```
aurelia/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Sticky navbar with mobile menu, scroll-aware bg
│   │   │   └── Footer.jsx          # Newsletter + links footer
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx     # Full-screen hero with animated headline
│   │   │   ├── PhilosophySection.jsx  # Quote + 3-pillar brand values
│   │   │   ├── FeaturedCollection.jsx # Staggered product grid
│   │   │   └── BespokeSection.jsx  # Grayscale-to-color atelier image
│   │   └── ui/
│   │       ├── Button.jsx          # Reusable Button (primary/outline/ghost/cta)
│   │       ├── ProductCard.jsx     # ProductCard + ProductGridCard variants
│   │       └── SectionLabel.jsx    # Animated section labels/titles
│   ├── data/
│   │   ├── animations.js           # Shared Framer Motion variants
│   │   └── products.js             # Product data (featured, grid, detail)
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page (all sections)
│   │   ├── CollectionsPage.jsx     # Filterable, sortable product grid
│   │   └── ProductDetailPage.jsx   # Image gallery + scent profile
│   ├── App.jsx                     # Router + layout wrapper
│   ├── index.js                    # React DOM entry
│   └── index.css                   # Tailwind + Google Fonts
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

```bash
npm install
npm start
```

## ✨ Features

- **Framer Motion animations**: page-load reveals, stagger children, scroll-triggered sections, hover micro-interactions
- **React Router**: 3 pages — Home, Collections, Product Detail
- **Reusable components**: Button variants, ProductCard, SectionLabel
- **Centralized animation variants**: `fadeUp`, `slideLeft/Right`, `staggerContainer`, `scaleIn`
- **Filterable collections** with animated tag buttons and sort
- **Responsive**: mobile menu with animated overlay
- **Scroll-aware navbar**: transparent → frosted glass on scroll

## 📦 Dependencies

- `react`, `react-dom`
- `react-router-dom` — client-side routing
- `framer-motion` — all animations
- `tailwindcss` — utility styling
