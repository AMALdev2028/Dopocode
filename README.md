# The Primer — Adaptive AI Tutor (MVP)

**Live links:**
- Landing page: https://dopocode-gamma.vercel.app/
- MVP app (click "Start free trial" on the landing page, or open directly): https://dopocode-backend-3xj7.vercel.app/
- Backend API: https://dopocode-backend.onrender.com

> Note: the backend is on Render's free tier, which sleeps after ~15 minutes
> of inactivity. If the app seems slow to load the first time, give it
> 30-60 seconds to wake up.

## What this is

An adaptive AI tutor that meets a child at their real level instead of their
grade — built for the Industrial Hackathon, Round 4 (MVP). Covers four
subjects (Fractions, Addition & Subtraction, Multiplication, Decimals) across
5 difficulty tiers each.

## Core features

- **Gentle placement** — a 3-question warm-up sets the starting difficulty,
  with no visible score or test feel
- **Adaptive difficulty** — deterministic rules (not ML) raise or lower the
  next question's difficulty based on the previous answer
- **Understanding check** — a correct answer at difficulty 3+ triggers an
  "explain why" follow-up; the explanation is graded as understood / partial
  / rote, separate from raw correctness
- **Points & streaks** — a real day-streak calendar and point system tracked
  in a persistent database, visible in the parent/teacher dashboard
- **Voice in/out** — browser-native speech-to-text and text-to-speech, no
  API key required
- **Multilingual** — English, Hindi, and Telugu. Question text, choices, and
  explanations are translated via the Claude API when a key is configured;
  without one, the app honestly shows English rather than faking a translation

## Tech stack

- **Frontend:** Vite + React + TypeScript + Tailwind (deployed on Vercel)
- **Backend:** Node.js + Express (deployed on Render)
- **Database:** SQLite (file-based, persists on Render's disk)
- **AI:** Anthropic Claude API — used only for grading free-text explanations
  and for translation. The adaptive engine that decides what to ask next is
  100% deterministic and never calls the LLM.

## Project structure

```
client/    React frontend (deployed to Vercel, root directory: client)
server/    Express backend + SQLite (deployed to Render, root directory: server)
```

## Running locally

```
cd server && npm install && npm start        # http://localhost:4000 (API)
cd client && npm install && npm run dev       # http://localhost:5173 (dev UI, proxies to :4000)
```

Or build once and serve everything from one process:

```
cd client && npm run build
cd ../server && npm start                     # now serves the built client too, on :4000
```

To enable real Claude-backed grading and translation, copy
`server/.env.example` to `server/.env` and add your `ANTHROPIC_API_KEY`.
Without a key, the app runs fully functional in offline fallback mode
(keyword-based grading, English-only translation passthrough).

## Deployment notes

- **Backend (Render):** root directory `server`, build command `npm install`,
  start command `npm start`. Add `ANTHROPIC_API_KEY` as an environment
  variable in Render's dashboard to enable live AI features.
- **Frontend (Vercel):** root directory `client`, build command
  `npm run build`, output directory `dist`. Set environment variable
  `VITE_API_URL` to the deployed backend's URL + `/api`
  (e.g. `https://dopocode-backend.onrender.com/api`).

## Demo script

1. Enter a name, pick a language, do the 3-question warm-up
2. Answer a couple of questions correctly in a row — watch the difficulty
   climb and the streak flame light up
3. At difficulty 3+, a correct answer triggers "now tell me why" — try a
   real explanation once, then something like "idk" another time, to show
   the tutor telling the difference
4. Open the parent view (top-right icon) to show the streak calendar,
   total points, and per-skill mastery
