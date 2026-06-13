# TechNerd Consulting

Static Jekyll site for TechNerd Consulting, published to GitHub Pages at
https://technerd.tech.

## Local Setup

Install Ruby and Bundler, then install the site dependencies:

```sh
bundle install
```

## Local Development

Run the site locally:

```sh
bundle exec jekyll serve
```

The local server usually opens at http://127.0.0.1:4000.

## QA Checks

Before publishing changes, run:

```sh
bundle exec jekyll build
```

GitHub Pages also builds and deploys the site through
`.github/workflows/pages.yml` on pushes to `main`.
