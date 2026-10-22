# Alexandru Rădulescu — Portfolio

Neo-brutalist single-page portfolio built with React 19, TypeScript, Tailwind CSS v4 and Vite.

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

## Add your images

Static files are served from `public/`:

| File | Used for |
| --- | --- |
| `public/assets/alex.jpg` | Hero portrait |
| `public/uploads/cv-alex-radulescu.pdf` | "Download CV" button + terminal `cv` command |

Case-study screenshots are kept full size in `source-assets/screenshots/`, which is outside `public/` so they never ship. The site serves recompressed JPEG copies from `public/assets/shots/` at 960px and 1920px wide. After adding or replacing a screenshot, run:

```sh
npm run images   # macOS: uses the built-in `sips`
```

Then reference the file's base name (e.g. `church-1`) in that project's `images` list in `src/data/content.ts`.

## Where things live

- All copy (jobs, case studies, skills, awards, contact links) — `src/data/content.ts`
- Theme knobs (accent color `--acc`, plus `--acc-deep` for small accent text and behind white text) — CSS variables on `:root` in `src/index.css`
- Interactive terminal — `src/components/Terminal.tsx`; its facts (projects, stack, awards, contact) are read from `content.ts`
