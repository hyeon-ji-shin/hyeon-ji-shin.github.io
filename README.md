# hyeon-ji-shin.github.io

Personal academic homepage for **Hyeon-ji Shin** — M.S. Candidate at GIST,
School of Mechanical and Robotics Engineering, Machine Perception and
Intelligence Lab (MPIL).

Live site: <https://hyeon-ji-shin.github.io>

## Local development

Requires Ruby ≥ 3.0 and Bundler.

```bash
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Structure

- `_pages/about.md` — landing page bio + frontmatter (subtitle, keywords, social links)
- `_bibliography/papers.bib` — publications & preprints
- `_projects/` — research projects (one Markdown file per project)
- `_experiences/` — teaching & working experiences (one file per role)
- `_volunteer/` — volunteer activities (one file per entry)
- `_news/` — short news items shown on the home page
- `_data/cv.yml` — education, scholarships, awards
- `_layouts/`, `_includes/` — Jekyll templates (custom site layout)

## Deployment

`main` branch → GitHub Actions (`.github/workflows/deploy.yml`) → builds with
Jekyll → publishes to `gh-pages` branch → served by GitHub Pages.

## Credits

Built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme by
Maruan Al-Shedivat, with extensive layout and content customization for
bilingual (English / 한국어) display, single-page navigation, and
seungjaebk-style table-based publication / project rendering.
