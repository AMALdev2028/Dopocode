import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, LightbulbIcon, PlayIcon } from 'lucide-react';

const AdaptiveCoreScene = lazy(() =>
  import('./three/AdaptiveCoreScene').then((mod) => ({ default: mod.AdaptiveCoreScene }))
);

const badges = ['No formal tests', 'Multilingual', 'KG to Class 12'];

export function Hero() {
  return (
    <section id="top" className="bg-notebook relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-28">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            
            A tutor that meets your child{' '}
            <span className="inline-block rounded-md bg-lime px-2 py-0.5">exactly where they are</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            
            The Primer reads your child&apos;s real level in three questions, then teaches from
            there — whether that means Class 4 fractions or an algebra Boss Challenge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3">
            
            <a
              href="#start"
              className="rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-lime shadow-lift transition-transform duration-150 ease-swift hover:-translate-y-0.5 hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream">
              
              Start free trial
            </a>
            <a
              href="#journeys"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-150 ease-swift hover:border-ink/30 hover:bg-cream-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream">
              
              <PlayIcon className="h-4 w-4" aria-hidden="true" />
              See two journeys
            </a>
          </motion.div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) =>
            <li key={badge} className="flex items-center gap-2 text-sm font-medium text-ink-muted">
                <CheckIcon className="h-4 w-4 text-ink" aria-hidden="true" />
                {badge}
              </li>
            )}
          </ul>
        </div>

        <div className="relative min-h-[460px]">
          <div className="pointer-events-none absolute inset-0 -m-10">
            <Suspense fallback={null}>
              <AdaptiveCoreScene className="h-full w-full" />
            </Suspense>
          </div>

          <div className="scene-3d relative">
            <motion.div
              initial={{ opacity: 0, y: 24, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="layer-3d ml-auto w-full max-w-sm rounded-[28px] border border-white/10 bg-ink p-6 shadow-lift"
              style={{ transform: 'rotateY(-9deg) rotateX(4deg)' }}>
              
              <p className="font-mono text-xs font-medium uppercase tracking-wide text-white/45">
                Live session
              </p>
              <h2 className="mt-1 font-display text-lg font-semibold text-white">Fractions · Aarav</h2>

              <div className="mt-5 flex items-baseline justify-between">
                <span className="text-sm font-medium text-white/50">Mastery</span>
                <span className="font-display text-2xl font-semibold text-lime">73%</span>
              </div>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '73%' }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full rounded-full bg-lime" />
                
              </div>
              <div className="mt-2 flex justify-between font-mono text-xs text-white/40">
                <span>Needs review</span>
                <span>Ready to advance</span>
              </div>

              <div
                className="layer-3d mt-6 flex gap-3 rounded-2xl bg-ink-soft p-4"
                style={{ transform: 'translateZ(30px)' }}>
                
                <LightbulbIcon className="h-5 w-5 shrink-0 text-coral" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-white/85">
                  “That one was tricky. Let&apos;s try it with pizza slices instead.”
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}
