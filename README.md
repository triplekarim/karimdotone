# karim.one

My personal website: the **.one** and only. Built with [Astro](https://astro.build), with React islands for the interactive parts, an [ogl](https://github.com/oframe/ogl) WebGL shader in the hero, and [Motion](https://motion.dev) springs.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the build
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/main.yml`.

## Writing content

**Blog post:** add `src/content/blog/my-post.md` (or `.mdx`). It's served at `/blog/my-post/`.

```md
---
title: My post
description: One-line summary used on cards, in RSS and in meta tags.
pubDate: 2026-11-24
tags: [webdev]
draft: false      # drafts only show up in `npm run dev`
# cover: ./cover.png   (optional, relative image)
---
```

**Project:** add `src/content/projects/my-project.md`.

```md
---
title: My project
summary: What it is in a sentence or two.
tags: [Rust, WebGPU]
links:
  - label: GitHub
    href: https://github.com/...
year: 2026
featured: true    # show on the landing page (first 3 by `order`)
order: 1
---
```

## Where things live

| Path | What |
| --- | --- |
| `src/site.ts` | Name, links, e-mail, meta description |
| `src/styles/tokens.css` | Colours, radii, fonts, spring easing curves |
| `src/components/Hero.astro` | Landing hero |
| `src/components/FluidBackground.jsx` | The WebGL fluid shader |
| `src/components/About.astro` | About section copy |
| `src/pages/` | Routes |
