# The Primer — AI Tutor Landing Page

**Live demo:** https://dopocode-gamma.vercel.app/

Landing page for The Primer, an adaptive AI tutor that meets each child at
their real level instead of their grade. Built for the Industrial Hackathon,
Round 3 (Landing Page).

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion
- Three.js (hero background scene)

## Getting started locally

```
npm install
npm run dev
```

Opens at the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Type-checking

```
npx tsc --noEmit
```

Should report no errors — run this before pushing as a sanity check.

## Building for production

```
npm run build
```

Outputs a static build to `dist/`.

## Deployment

Deployed on Vercel using the `vercel.json` in this repo (zero-config: build
command and output directory are already set). A `netlify.toml` is also
included if deploying to Netlify instead — same build command, same output
folder.

## Project structure

```
src/
  components/       UI sections (Hero, Problem, HowItWorks, Features, etc.)
  components/three/ Three.js hero background scene
  data/             Site copy and content, kept separate from markup
```

## Submission checklist

- [x] Deployed and publicly reachable
- [ ] Clicked through every nav link and both CTA buttons on the live link
      (not just localhost) to confirm nothing 404s
- [ ] Checked mobile responsiveness on a phone or with dev tools' device
      toolbar
