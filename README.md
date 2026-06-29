# ONLY 3 LEFT™ — A Field Guide to Deceptive UX

An interactive catalogue of deceptive user experience patterns — the dark patterns, manipulative interfaces, and persuasive mechanisms used to influence decisions online.

Each pattern is documented as an **interface specimen**: named, classified, explained, and kept at a professional distance. The project includes interactive live demonstrations, severity ratings, psychological breakdowns, and ethical alternatives for every pattern.

## Features

- **40 documented patterns** across 10 categories (Urgency, Pricing Traps, Subscription Traps, Interface Manipulation, Privacy, Social Engineering, Attention Capture, Gamification Abuse, Mobile Addiction, Trust & Authority Abuse)
- **Interactive live specimens** — Fake Countdown, Cookie Simulator, Pricing Trap
- **Detailed visual examples** for every pattern, built as realistic UI mockups
- **Toxicity / severity meter** (1–5 scale)
- **Bilingual** — English and Spanish (custom i18n, no external dependency)
- **No backend required** — all data in typed TypeScript files

## Tech Stack

[Next.js](https://nextjs.org/) 16 · [React](https://react.dev/) 19 · [TypeScript](https://www.typescriptlang.org/) · [Tailwind CSS](https://tailwindcss.com/) 3

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/           # Next.js App Router pages (EN + /es/ for Spanish)
components/    # Reusable React components
content/       # Future MDX pattern content
lib/           # Pattern data, i18n, types, utilities
```

## License

MIT © [Mikel Aramendia](https://github.com/Mendiak)
