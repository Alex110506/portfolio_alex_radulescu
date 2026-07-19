# Alexandru Rădulescu — Portfolio

Neo-brutalist single-page portfolio built with React 19, TypeScript, Tailwind CSS v4 and Vite.

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

## Add your images

Static files are served from `public/`. Drop these in with these exact names:

| File | Used for |
| --- | --- |
| `public/assets/alex.jpg` | Hero portrait |
| `public/assets/itecify-1.jpeg`, `public/assets/itecify-2.png` | iTECify case study |
| `public/assets/interro.png` | InterroAI case study |
| `public/assets/jade-1.jpeg`, `public/assets/jade-2.jpeg` | Jade Intimo case study |
| `public/assets/masco-1.png`, `public/assets/masco-2.png` | Masco Baits case study |
| `public/uploads/cv-alex-radulescu.pdf` | "Download CV" button + terminal `cv` command |

## Where things live

- All copy (jobs, case studies, skills, awards, contact links) — `src/data/content.ts`
- Interactive terminal commands — `src/components/Terminal.tsx`
- Theme knobs (accent color `--acc`, hero photo duotone `--pf`/`--po`, ticker speed `--mspd`) — CSS variables on `:root` in `src/index.css`
