# Portfolio Website

<p align="center">
  <img src="public/portfolio-preview.png" alt="Responsive portfolio website homepage" width="720" />
</p>

## Overview

A modern single-page portfolio website built with Next.js. It uses a clean dark interface, responsive layouts, motion, and anchored navigation to provide a smooth browsing experience across desktop and mobile screens.

## Highlights

- Responsive, mobile-friendly layout
- Section-based navigation
- Smooth animated transitions
- Reusable React components
- Downloadable resume call to action
- Dark and light themes, plus a command palette (Ctrl/Cmd + K)
- Email and social links
- Optimized local images and assets

## Editing content

Nearly everything on the site is data in [`src/app/data.ts`](src/app/data.ts). Components only display it.

| To change | Edit in `data.ts` | Also needed |
| --- | --- | --- |
| Name, role, email, links | `profile` | |
| Add a project | copy an object in `projects` | |
| Add a job or role | `experience` (newest role first) | |
| Add a skill chip | `skills` | icon file in `public/logo` |
| Add a certificate or honor | `certificates` / `honors` | image in `public/certificates` |
| Add or reorder a section | `sections` | add the component in `src/app/page.tsx` with a matching `id` |
| Avatar | | replace `public/berserk.jpg` |

## Design inspiration

The layout and visual style are inspired by [Ashutoshx7's Portfolio-v2](https://github.com/Ashutoshx7/Portfolio-v2-). All content, code and assets in this repository are my own.

## Built with

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Run locally

### Prerequisites

- Node.js 20 or newer
- npm

### Setup

```bash
git clone https://github.com/uditaswal/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Run the production server
```

## Security

Environment files, secrets, generated output, and dependency folders are excluded from version control. Validate all form input before deployment.
