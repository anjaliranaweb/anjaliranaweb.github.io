# Dr. Anjali Rana - Research Portfolio Website

A personal research portfolio and blog website for Dr. Anjali Rana, a researcher specializing in Evolutionary Genetics, Genomics & Microbiome studies.

## About the Website

This project is a high-performance, custom-built portfolio website designed for a prominent academic researcher and blogger. It features a statically generated Astro frontend paired with a Sanity headless CMS, allowing the client to easily publish blog posts and research papers. The site includes a dedicated CV section, an automated publication showcase, and an integrated, fee-free scheduling system that replaces third-party consultation platforms. Built for speed and SEO optimization, it provides the client with complete ownership over her digital identity and monetization infrastructure.

## Tech Stack

- **Frontend**: [Astro](https://astro.build) - Static site generator
- **CMS**: [Sanity.io](https://sanity.io) - Headless CMS for blog content
- **Styling**: Scoped CSS with Astro components

## Project Structure

```
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   └── styles/         # Global CSS
├── docs/               # Documentation
│   ├── sanity-blog-guide.md    # How to publish blog posts
│   ├── markdown-style-guide.md # Markdown formatting reference
│   └── using-mdx.mdx           # MDX usage guide
├── website-cms/        # Sanity Studio (CMS)
└── public/             # Static assets
```

## Getting Started

### Prerequisites
- Node.js >= 22.12.0

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## Content Management

Blog posts are managed through Sanity Studio. See [`docs/sanity-blog-guide.md`](docs/sanity-blog-guide.md) for detailed instructions on creating and publishing posts.

### Running Sanity Studio Locally

```bash
cd website-cms
npm install
npm run dev
```

Visit `http://localhost:3333` to access the studio.

## Documentation

- [Sanity Blog Guide](docs/sanity-blog-guide.md) - Step-by-step guide to publishing posts
- [Markdown Style Guide](docs/markdown-style-guide.md) - Markdown formatting reference
- [Using MDX](docs/using-mdx.mdx) - MDX components and usage

## License

All rights reserved © Dr. Anjali Rana
