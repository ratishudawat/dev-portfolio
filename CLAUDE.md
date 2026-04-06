# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
- No test framework is configured

## Architecture

Single-page Next.js 14 portfolio site (App Router) with TypeScript, Tailwind CSS, and Framer Motion animations. Dark mode via class strategy (`darkMode: 'class'` in Tailwind config).

### Data flow

All portfolio content (links, projects, skills, experience) is defined in `lib/data.ts` as `const` arrays. Components read from this file directly — there is no CMS or database.

### Context providers

Two React contexts wrap the app in `app/layout.tsx`:
- **ThemeContextProvider** (`context/theme-context.tsx`) — manages light/dark theme, persists to localStorage, respects `prefers-color-scheme`
- **ActiveSectionContextProvider** (`context/active-section-context.tsx`) — tracks which nav section is active based on scroll position

The `useSectionInView` hook (`lib/hooks.ts`) uses `react-intersection-observer` to auto-update the active section. Each section component calls this hook with its name.

### Contact form

The contact form uses a Next.js server action (`actions/sendEmail.ts`) that sends email via the Resend API (`RESEND_API_KEY` env var). Email templates are React components in `email/`.

### Section type safety

`SectionName` type (`lib/types.ts`) is derived from the `links` array in `lib/data.ts`, so adding/removing nav links automatically updates the valid section names.

### Currently disabled

The Projects section is commented out in both `app/page.tsx` and the `links` array in `lib/data.ts`.
