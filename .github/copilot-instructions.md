# Copilot Instructions

This is an Astro-based blog site built from the Astro blog template, customized for a researcher portfolio.

## Build, Test, and Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
npm run astro    # Run Astro CLI commands
```

**Node.js requirement:** >= 22.12.0

No test suite is currently configured.

## Architecture

### Content Collections

Blog posts are managed via Astro's Content Collections in `src/content/blog/`. The collection schema is defined in `src/content.config.ts`:

- Uses the glob loader to automatically discover `.md` and `.mdx` files
- Frontmatter is type-checked with Zod schema
- Required fields: `title`, `description`, `pubDate`
- Optional fields: `updatedDate`, `heroImage` (must be an Astro image)

### Site Structure

```
src/
├── components/     # Reusable Astro components
├── content/
│   └── blog/       # Blog posts (Markdown/MDX)
├── layouts/        # Page layouts (e.g., BlogPost.astro)
├── pages/          # File-based routing
│   ├── index.astro
│   ├── about.astro
│   ├── blog/       # Blog index and [id] routes
│   └── rss.xml.js  # RSS feed generator
├── styles/         # Global CSS
├── assets/         # Images imported by components/content
├── consts.ts       # Global constants (SITE_TITLE, SITE_DESCRIPTION)
└── content.config.ts  # Content collection schemas
```

### Routing

- **File-based routing:** Files in `src/pages/` automatically become routes
- **Blog posts:** Accessed via `/blog/[id]/` where `[id]` is the filename (without extension) from `src/content/blog/`
- **RSS feed:** Generated at `/rss.xml` by `src/pages/rss.xml.js`

### Integrations

Active Astro integrations (see `astro.config.mjs`):
- **@astrojs/mdx:** MDX support for blog posts
- **@astrojs/sitemap:** Auto-generates sitemap.xml
- **@astrojs/rss:** RSS feed generation

## Key Conventions

### Component Structure

Astro components use the frontmatter fence (`---`) for the script section:

```astro
---
// TypeScript/JavaScript logic here
import Component from './Component.astro';
const { prop } = Astro.props;
---

<!-- HTML template here -->
<div>{prop}</div>

<style>
  /* Scoped CSS here */
</style>
```

### Scoped Styles

All component `<style>` blocks are scoped by default. Global styles live in `src/styles/`.

### Blog Post Frontmatter

Blog posts in `src/content/blog/` must include:

```yaml
---
title: 'Post Title'
description: 'Post description for SEO'
pubDate: 'Jul 08 2022'
updatedDate: 'Jul 10 2022'  # Optional
heroImage: '../../assets/image.jpg'  # Optional, relative to content file
---
```

Hero images must use relative paths from the blog post file (e.g., `../../assets/`).

### Site Configuration

- Global site constants are in `src/consts.ts` (`SITE_TITLE`, `SITE_DESCRIPTION`)
- Site URL is configured in `astro.config.mjs` (currently set to `https://example.com`)
- Update both when deploying to production

### Content Queries

Use `getCollection()` to query blog posts:

```ts
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
// Returns typed array of blog posts with data and slug
```

### TypeScript Configuration

The project uses Astro's strict TypeScript config with `strictNullChecks` enabled. Type safety is enforced for content frontmatter via the Zod schema.

### Image Handling

- Static images go in `public/` (served as-is)
- Images imported by components/content go in `src/assets/`
- Use Astro's `<Image>` component from `astro:assets` for optimized images
- Blog hero images are validated through the content schema's `image()` helper
