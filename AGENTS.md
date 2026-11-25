# AGENTS.md

## Rules
- **Never commit or push** — no `git commit`, `git push`, or `git add`.

## Project
React 19 + Vite 7 + Tailwind CSS v4 + React Router v7 portfolio site (JS/JSX).

## Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Architecture

### Path alias
`@` maps to `src/` (see `vite.config.js`).

### Routing
Two routes in `src/App.jsx`: `index` (Home) and `*` (NotFound). Navigation uses hash-anchor links (`#hero`, `#about`, etc.) — this is a single-page app.

### Styling: Tailwind CSS v4
Tailwind v4 is **CSS-first** — there is no `tailwind.config.js`. All customization lives in `src/index.css`:
- `@theme` block for colors, animations, keyframes
- `@layer base` for CSS variables (light/dark theme)
- `@utility` blocks for reusable class compositions (e.g. `.container`, `.text-glow`, `.cosmic-button`)

Dark mode: toggled by adding/removing `dark` class on `<html>`. Persisted via `localStorage` key `"theme"`. See `src/components/ThemeToggle.jsx`.

### Class merging
Use the `cn()` helper from `@/lib/utils` (clsx + tailwind-merge) when combining Tailwind classes.

### Exports
Both named and default exports are used. Match the pattern of the file you're editing.

### Stray files
`src/Component.jsx` is empty — leftover scaffolding, ignore or remove.
