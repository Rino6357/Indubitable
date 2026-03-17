# Baker Alshaif's Portfolio & Writing

A personal website built with Next.js, featuring a portfolio of engineering work and a collection of poems and stories. The site features a retro, pixel-art aesthetic inspired by vintage computer interfaces.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/Indubitable](http://localhost:3000/Indubitable) with your browser to see the result. (Note: the `/Indubitable` base path is required in development).

## Content Management

To add new content, simply create a new Markdown (`.md`) file in the appropriate directory within the `content/` folder.

### Adding Poems or Stories

Place your Markdown files in `content/poems/` or `content/stories/`.

Each file must include the following frontmatter:

```markdown
---
title: "Your Title Here"
date: "YYYY-MM-DD"
category: "poem"  # or "story"
---

Your content goes here...
```

### Adding Portfolio Projects

Place your Markdown files in `content/projects/`.

Each file must include the following frontmatter:

```markdown
---
title: "Project Name"
description: "A short description of the project."
tags: ["Tag1", "Tag2"]
date: "YYYY-MM-DD"
---

Detailed project description and case study goes here...
```

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** Markdown with [gray-matter](https://github.com/jonschlinkert/gray-matter) and [remark](https://github.com/remarkjs/remark)
- **Deployment:** Static export to GitHub Pages

## License

All rights reserved.
