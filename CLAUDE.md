# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules
- **Never commit or push.** Do not run `git commit`, `git push`, or `git add` (see `AGENTS.md`).

## Project
Single-page personal portfolio: React 19 + Vite 7 + Tailwind CSS v4 + React Router v7, plain JS/JSX (no TypeScript).

## Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint (flat config in `eslint.config.js`) |

No test framework is set up.

## Architecture

- **Path alias:** `@` → `src/` (configured in `vite.config.js`).
- **Routing:** `src/App.jsx` defines only two routes: `index` → `pages/Home.jsx` and `*` → `pages/NotFound.jsx`. `<Toaster />` is mounted at the app root, outside the router.
- **Page composition:** `Home.jsx` stacks the section components from `src/components/` (Hero, About, Work, Skills, Projects, Education, Contact) plus a fixed `ThemeToggle`, `StarBackground` and `NavBar`. Navigation is hash anchors (`#hero`, `#about`, …), so each section's `id` must match the Navbar links. Portfolio content (projects, skills, jobs) is hardcoded inside each section component.
- **Toasts:** shadcn-style setup — Radix toast primitives in `components/ui/toast.jsx`/`toaster.jsx`, state in `hooks/use-toast.js`. Call `useToast().toast({ title, description })`. The contact form in `ContactSection.jsx` doesn't send anything; it fakes submission with a `setTimeout` and a toast.

### Styling (Tailwind v4, CSS-first)
There is no `tailwind.config.js`; all customization lives in `src/index.css`:
- `@theme` for colors, animations, keyframes
- `@layer base` for the light/dark CSS variables (`--background`, `--foreground`, `--primary`, …) behind classes like `bg-background`, `text-primary`
- `@utility` for reusable class compositions (e.g. `container`, `text-glow`, `cosmic-button`)

Dark mode is a `dark` class on `<html>`, saved in `localStorage` under the `"theme"` key (`components/ThemeToggle.jsx`).

Combine classes with `cn()` from `@/lib/utils` (clsx + tailwind-merge).

### Conventions
- Both named and default exports are used; match the file you're editing (and import accordingly, e.g. `StarBackground`/`ThemeToggle` are default exports, most sections are named).
- `src/Component.jsx` is empty leftover scaffolding; ignore it or remove it.

## design-md/
`design-md/<brand>/DESIGN.md` files are reference design-system write-ups (color tokens, typography, component notes) for various brands. They are inspiration material for the in-progress redesign, not app code, and nothing in `src/` imports them.
