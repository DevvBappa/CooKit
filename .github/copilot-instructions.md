# CooKit AI Coding Agent Instructions

## Project Overview

- **Framework:** Next.js (TypeScript, App Router)
- **Entry Point:** `src/app/page.tsx` (main page), `src/app/layout.tsx` (global layout)
- **Global Styles:** `src/app/globals.css`
- **Config Files:** `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`, `postcss.config.mjs`

## Developer Workflows

- **Start Dev Server:**
  - `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
  - App runs at [http://localhost:3000](http://localhost:3000)
- **Edit Main Page:** Modify `src/app/page.tsx` (hot reload enabled)
- **Linting:** Uses ESLint (`eslint.config.mjs`)
- **Type Checking:** TypeScript (`tsconfig.json`)
- **Styling:** Uses PostCSS (`postcss.config.mjs`), global styles in `globals.css`

## Architectural Patterns

- **App Directory Structure:**
  - All routes/pages/components live under `src/app/`
  - `layout.tsx` wraps all pages for shared UI
  - Static assets (e.g., `favicon.ico`) in `src/app/`
- **Font Optimization:** Uses `next/font` for loading [Geist](https://vercel.com/font)
- **No API routes or backend logic present (as of current structure)**

## Conventions & Patterns

- **File Naming:** Use lowercase for files, camelCase for variables/functions
- **Component Structure:** Prefer function components, colocate styles if needed
- **Config Changes:** Update relevant config files for new dependencies or build changes
- **External Dependencies:** Next.js, Geist font, PostCSS

## Examples

- To add a new page: create a new folder under `src/app/` with a `page.tsx` file
- To update global layout: edit `src/app/layout.tsx`
- To add global styles: edit `src/app/globals.css`

## References

- See `README.md` for setup and deployment details
- See Next.js docs for advanced routing, data fetching, and deployment

---

**If you are unsure about a pattern or workflow, reference the config files and `README.md` before making changes.**
