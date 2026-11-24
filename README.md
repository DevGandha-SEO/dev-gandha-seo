# dev-gandha-seo

SEO agency website built with [Astro](https://astro.build) and Tailwind CSS v4.

## Requirements

- Node.js `>=22.23.4` (required by Astro 7)
- npm

## Getting started

```sh
npm install
npm run dev
```

Dev server runs at <http://localhost:4321>.

## Commands

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Preview the production build locally            |
| `npx astro check` | Type-check every `.astro` and `.ts` file        |

## Project structure

```text
src/
├── components/
│   ├── ui/          Primitives — no domain knowledge, reusable anywhere
│   ├── cards/       Composite display units (ServiceCard)
│   ├── sections/    Page sections (Hero, Services)
│   ├── layout/      Header, Footer
│   └── seo/         SEO.astro — every meta tag the site emits
├── config/          site.ts · seo.ts · content.ts  (all copy and settings)
├── layouts/         BaseLayout.astro — document shell + motion runtime
├── pages/           index.astro · robots.txt.ts
├── styles/          global.css — Tailwind theme and design tokens
└── types/           Shared TypeScript contracts
```

### The rules that keep it scalable

**Copy never lives in markup.** Everything a non-developer might reword sits in
`src/config/content.ts`. Components render whatever that file hands them, so
copy changes never risk breaking layout — and when this moves to a CMS or to
Astro content collections, only that one file is replaced.

**Components never hardcode a colour.** `global.css` defines two layers: a raw
palette (`--color-navy-900`) and semantic roles (`--color-surface`,
`--color-content`, `--color-accent`). Components only use the semantic ones.
Putting `data-surface="dark"` (or `subtle`, or `accent`) on any element remaps
those variables for its whole subtree, so every button, border and muted label
inside recolours itself. There is not a single `dark:` variant in the codebase.

Adding a new surface is one block in `global.css` plus one entry in the
`Surface` union in `src/types/index.ts`.

**Contrast is checked, not guessed.** There are two working oranges because one
cannot serve both backgrounds: `orange-700` on white is 5.20:1, `orange-500` on
navy-900 is 6.68:1. Both clear WCAG AA; a single orange would fail on one of
them. The ratios are recorded in comments next to the values.

**Motion is opt-in and reversible.** Scroll reveals are driven by one shared
IntersectionObserver in `BaseLayout.astro`. `prefers-reduced-motion` is
honoured in both CSS and JS, and if JavaScript never runs the `.no-js` class
keeps everything visible rather than stranding content at `opacity: 0`.

## Practising SEO on this site

The whole point of the SEO layer is that it is editable in one place and
verifiable in another. Change a value in `src/config/seo.ts`, run
`npm run build`, then read `dist/index.html` — that is exactly what a crawler
sees.

Things worth trying:

| Try this                                            | Then check                                     |
| :-------------------------------------------------- | :--------------------------------------------- |
| Shorten/lengthen `defaultTitle`                      | Google truncates around 55–60 characters        |
| Rewrite `defaultDescription` to lead with a keyword  | Aim for 150–160 characters                      |
| Flip `noindex` to `true`                             | The `robots` meta tag in `dist/index.html`      |
| Edit `buildOrganizationSchema`                       | Paste the JSON-LD into <https://validator.schema.org/> |
| Add a `Disallow:` rule in `src/pages/robots.txt.ts`  | `dist/robots.txt`                               |
| Add a page under `src/pages/`                        | `dist/sitemap-0.xml` picks it up automatically  |

A distinction worth internalising: `Disallow` in robots.txt blocks **crawling**,
not **indexing**. A disallowed URL can still surface in results if other pages
link to it. To keep a page out of the index, use the `noindex` flag — which
requires the page to stay crawlable so the tag can actually be read.

### Before going live

- [ ] Set the real domain in **both** `astro.config.mjs` (`site`) and
      `src/config/site.ts` (`SITE.url`). Canonical tags and the sitemap derive
      from them.
- [ ] Replace `public/og-image.svg` with a **PNG or JPG**. Facebook, LinkedIn
      and X do not render SVG Open Graph images — the current file is a
      placeholder for layout only.
- [ ] Replace the placeholder email, phone and social URLs in
      `src/config/site.ts`.
- [ ] Swap the illustrative statistics in `src/config/content.ts` for real ones.

## Notes

Nothing in `src/config/` is secret — it is all shipped to the browser. Never put
API keys, tokens or private endpoints there; use
[environment variables](https://docs.astro.build/en/guides/environment-variables/)
and keep `.env` out of git (it already is, via `.gitignore`).
