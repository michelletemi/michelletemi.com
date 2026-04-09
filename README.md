# michelletemi.com

My personal website and digital platform — software engineer, career coach, and advocate for non-traditional pathways into tech.

Live at **[michelletemi.com](https://michelletemi.com)**

---

## About

This site is the home for everything I build, write, and offer for people breaking into tech from non-traditional backgrounds. It combines my personal story, free tools, career resources, and coaching services in one place.

I'm a mid-level software engineer at a UK fintech — I didn't take the traditional route. I went from a Civil Engineering MSc → customer support → data analytics apprenticeship → software engineering. This platform is the resource I wish I had when I was starting out.

---

## What's on the site

- **Story** — my career journey and what drives the work I do here
- **Free Tools** — browser-based tools including a visual budget tracker (no sign-up, no data collection)
- **Resources** — guides, templates, and e-books for career changers and aspiring developers
- **Services** — 1:1 career coaching, mock interviews, and CV reviews
- **Newsletter** — practical advice on breaking into tech, delivered to your inbox

---

## Tech stack

- React + React Router
- HTML5 / CSS3 / JavaScript
- Chart.js — budget tracker visualisations
- Google Fonts — Fraunces, Geist, Geist Mono
- Deployed via GitHub Pages with a custom domain

---

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Previewing the Production Build

Preview the production build locally:

```bash
npm run preview
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Deployment is done using the Wrangler CLI.

To build and deploy directly to production:

```sh
npm run deploy
```

To deploy a preview URL:

```sh
npx wrangler versions upload
```

You can then promote a version to production after verification or roll it out progressively.

```sh
npx wrangler versions deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---
