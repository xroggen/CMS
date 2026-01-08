# Simple Jekyll Blog

A minimal, flat-file CMS blog built with Jekyll that runs on GitHub Pages for free.

## Features

- Homepage listing all blog posts with title and date (MM YYYY format)
- Individual post pages with title, date, content, and related articles
- Simple navigation to return home
- Clean, responsive design
- No database required - just flat Markdown files

## Local Development

1. Install Ruby and Bundler if you haven't already
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the local server:
   ```bash
   bundle exec jekyll serve
   ```
4. Visit `http://localhost:4000` in your browser

## Adding New Posts

Create a new file in the `_posts` directory with the format:
```
YYYY-MM-DD-title-of-post.md
```

Add the following front matter at the top:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
related_posts: true
---

Your post content here...
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to Settings > Pages
4. Set the source to your main branch
5. Your site will be live at `https://yourusername.github.io/repository-name/`

## Structure

- `_config.yml` - Site configuration
- `_layouts/` - Page layouts
  - `default.html` - Base layout with navigation
  - `post.html` - Blog post layout
- `_posts/` - Blog posts (Markdown files)
- `assets/css/` - Stylesheets
- `index.html` - Homepage

## License

Free to use and modify as you wish.
