# ISAF v2

Static Astro website for ISAF, a Romanian railway infrastructure company focused on signalling, contact lines, electrification, production, and integration services.

The site is built as a single-page landing experience with responsive sections for:

- Hero video and core positioning
- Company history and milestones
- Product and solution carousel
- Production gallery with KPIs
- Partner logos and contact details

## Tech Stack

- [Astro](https://astro.build/) 6
- TypeScript-flavoured Astro components
- Component-scoped CSS
- Local images, SVG icons, fonts, and video assets

## Requirements

- Node.js `>=22.12.0`
- npm

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Astro will serve the site locally, usually at:

```text
http://localhost:4321/isaf-v2
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Astro development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro` | Run Astro CLI commands |

## Project Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   │   ├── diagrams/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── partners/
│   │   ├── svg/
│   │   └── video/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Main Files

- `src/pages/index.astro` composes the landing page sections.
- `src/layouts/Layout.astro` defines document metadata and global page shell styles.
- `src/components/layout/Header.astro` contains the navigation and mobile menu.
- `src/components/Hero.astro` renders the responsive video hero.
- `src/components/About.astro` renders the company overview and timeline.
- `src/components/Solutions.astro` renders the product carousel.
- `src/components/Production.astro` renders the production gallery.
- `src/components/layout/Footer.astro` contains contact information and footer navigation.
- `src/styles/tokens.css`, `global.css`, and `typography.css` define the shared design system.

## Deployment Notes

The Astro config is prepared for GitHub Pages-style hosting:

If the project is deployed to another domain or path, update `site` and `base` in `astro.config.mjs`.
