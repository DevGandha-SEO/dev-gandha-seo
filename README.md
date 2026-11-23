# dev-gandha-seo

Website built with [Astro](https://astro.build).

## Requirements

- Node.js `>=22.23.4` (required by Astro 7)
- npm

## Getting started

```sh
npm install
npm run dev
```

The dev server runs at <http://localhost:4321>.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run astro`   | Run Astro CLI commands (e.g. `astro add`)    |

## Project structure

```text
/
├── public/            # Static assets served as-is
├── src/
│   └── pages/         # File-based routing; each .astro file becomes a route
├── astro.config.mjs   # Astro configuration
└── tsconfig.json      # TypeScript config (strict)
```
