# Contributing to LogFiend Site

Thank you for contributing! This repository hosts the LogFiend consulting site built with Jekyll using the Just the Docs theme.

## Quick start

- Requirements: Ruby, Bundler
- Install: `bundle install`
- Run locally: `bundle exec jekyll serve`
- Build: `bundle exec jekyll build`

## Project structure

- `index.md`: Homepage composition via includes
- `_includes/`: Reusable HTML partials (hero, services, cta, footer, components)
- `_layouts/`: Page templates
- `docs/`: Content pages (services, pricing, about, contact, articles)
- `assets/`: CSS (`assets/css/main.scss`), images, and JS
- `_config.yml`: Site configuration, SEO, navigation

## Content guidelines

- Prefer updating includes for shared sections across pages
- Keep copy concise and action-oriented; primary CTA is “Book a call” → `/docs/contact`
- Use `.btn`, `.btn-primary`, `.btn-outline` for CTAs
- Use `.page-hero` for the top section of docs pages

## Style guidelines

- Edit `assets/css/main.scss` for design system tokens and utilities
- Use existing utility classes for spacing, layout, and effects
- Avoid inline styles; reuse classes where possible

## Submitting changes

1. Create a branch
2. Make changes and run local build
3. Open a PR with a clear description and screenshots

## Common tasks

- Add a new article: create `docs/articles/YYYY-MM-DD-title.md` and link from `docs/articles/index.md`
- Add a new page: create `docs/<page>.md` with frontmatter (`title`, `layout`, `nav_order`)
- Update navigation: adjust `_config.yml` aux links if needed 