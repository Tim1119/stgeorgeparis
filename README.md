# Saint George's Anglican Church, Paris — Website

A responsive React (Vite + TypeScript + Tailwind CSS) rebuild of the church website design.
This is a plain React SPA — **not** Next.js — so it runs entirely as static files once built.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:3000`).

## Build for production

```bash
npm run build
```

This outputs static files to `dist/`, which you can upload to any static host or serve
behind Nginx/Apache. Preview the production build locally with:

```bash
npm run preview
```

## What's here

- **Home** — hero carousel, welcome section, latest news, weekly service calendar, livestream
  callout, safeguarding notice.
- **About us** — tabbed page (About us / Who's who / Giving).
- **Malagasy Community** — tabbed page (Malgaches / Malagasy / Petites annonces).
- **Worship & Music** — tabbed page (Worship, with Baptism / Weddings / Funeral sub-tabs, and
  Music).
- **History of St G's**, **Friends of St G's**, **Communion Anglicane** — content pages.

The navbar dropdowns are click-to-open (not hover), and clicking a parent item with a dropdown
(e.g. "About us") never navigates by itself — only the links inside the dropdown do. Mobile uses
a slide-in sidebar.

## Notes on content and images

- Real copy has been pulled from the church's current site (stgeorgesparis.com) wherever
  possible — the logo, address, service times, staff list, and page text.
- Where the design called for a photo the real site doesn't have (e.g. interior shots, baptism/
  wedding photography), placeholder photography from Unsplash is used — these are hotlinked and
  should be swapped for the church's own photos before this goes live.
- Fonts: the exact Figma font couldn't be confirmed (see note below), so this uses **Inter**,
  loaded from Google Fonts in `index.html`. It's a close, professional match to the geometric
  sans used in the design. If you get font names from the real Figma file later, swap the
  `font-sans` value in `src/index.css` and the `<link>` in `index.html`.
- I wasn't able to pull live design specs (exact colors/spacing/components) directly from your
  Figma file — the connected Figma tool didn't have access to it. The layout here is built from
  the exported screenshots, so double-check spacing/sizing against Figma once file access is
  sorted out.

## Project structure

```
src/
  components/   Navbar, Footer, TabSwitcher, PageHeader, and Home page sections
  pages/        One file per route
  App.tsx       Router setup
  index.css     Tailwind config + theme colors (primary red, etc.)
```
