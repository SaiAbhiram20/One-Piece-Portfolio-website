# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (hot reload)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

No lint, test, or format scripts are configured.

## Architecture

One Piece-themed portfolio site for a Data Analyst. React 19 + Vite 7, CSS Modules, Motion (Framer Motion) for scroll animations, react-icons for icons.

### Data-Driven Design

All resume content lives in `src/data/` — components are purely presentational. To update site content, edit data files only:

- `resumeData.js` → consumed by Hero, About, Experience, Contact, Footer
- `skillsData.js` → consumed by Skills
- `projectsData.js` → consumed by Projects

### Component Composition

`App.jsx` is flat: `Navbar` + 6 section components + `Footer`, no routing. Each section is wrapped in `ScrollReveal` for fade-in-from-bottom animations on scroll.

### Shared Components (src/components/shared/)

- **SectionHeading** — enforces dual-title pattern: thematic One Piece title + standard professional title (e.g., "Crew's Arsenal" / "Skills & Proficiency"). Every section must have both so recruiters can scan for professional terms.
- **ScrollReveal** — Motion wrapper providing consistent viewport-triggered fade-in animation. Props: `delay`, `className`.
- **Navbar** — fixed nav with scroll class toggle at 50px, hamburger menu below 768px.

### Style System

`variables.css` defines design tokens (colors, fonts, spacing) → imported by `global.css` (reset, base styles, background utilities) → imported once in `main.jsx`. Components use CSS Modules (`*.module.css`).

Background utility classes in `global.css`: `.bg-ocean-animated`, `.bg-parchment-fixed`, `.bg-grand-line-parallax`, `.bg-compass` — all use `::before` pseudo-elements with z-index layering.

Key colors: navy `#0a1628`, gold `#d4a843`, parchment `#f5f0e8`, crimson `#c0392b`. Fonts: Inter (body), Pirata One (thematic display).

### Icon Mapping (Skills component)

Icons are stored as strings in `skillsData.js`. `Skills.jsx` maintains an `iconMap` object mapping string names to react-icons components, with dynamic lookup: `const Icon = iconMap[icon]`.

**Known missing icons in react-icons v5+:**
- Power BI: use `FaChartBar` (not `SiPowerbi`)
- Excel: use `FaFileExcel` (not `SiMicrosoftexcel`)
- AWS: use `FaAws` (not `SiAmazonwebservices`)

Always verify icon existence before adding new ones.

### Contact Form

Uses Web3Forms API (key hardcoded in `Contact.jsx`). Handles states: idle, sending, sent, error.

### Hero Video

`<video>` element with autoPlay/loop/muted/playsInline playing `/One piece landing page.mp4` with a darkening overlay div.
