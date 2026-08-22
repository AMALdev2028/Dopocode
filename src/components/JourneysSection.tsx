import { motion } from 'framer-motion';
import { ArrowRightIcon, LightbulbIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { TiltCard } from './TiltCard';
import { journeys } from '../data/content';

export function JourneysSection() {
  return (
    <section id="journeys" className="bg-graph-dark bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tone="dark"
          title="Same class. Same day. Two different lessons."
          subtitle="Both children opened the fractions chapter. Here is what the tutor actually served each of them." />
        

        <div className="scene-3d mt-16 grid gap-8 lg:grid-cols-2">
          {journeys.map((journey, index) => {
            const accent = journey.accent === 'coral' ? 'text-coral' : 'text-lime';
            const accentBar = journey.accent === 'coral' ? 'bg-coral' : 'bg-lime';
            return (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}>
                
                <TiltCard
                  intensity={6}
                  lift={18}
                  className="h-full overflow-hidden rounded-[28px] border border-white/10 bg-ink-soft p-8">
                  
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span className={`h-8 w-1 rounded-full ${accentBar}`} aria-hidden="true" />
                      <p className="text-sm font-semibold text-white/60">{journey.student}</p>
                    </div>

                    <h3 className={`mt-5 font-display text-2xl font-semibold leading-snug text-white`}>
                      {journey.summary}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/65">{journey.body}</p>

                    <ol
                      className="layer-3d mt-auto space-y-2 pt-8"
                      style={{ transform: 'translateZ(26px)' }}>
                      
                      {journey.path.map((node, nodeIndex) =>
                      <li
                        key={node}
                        className="flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-2.5"
                        style={{ transform: `translateZ(${nodeIndex * 6}px)` }}>
                        
                          <ArrowRightIcon className={`h-4 w-4 shrink-0 ${accent}`} aria-hidden="true" />
                          <span className="text-sm text-white/85">{node}</span>
                        </li>
                      )}
                    </ol>
                  </div>
                </TiltCard>
              </motion.div>);

          })}
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-[24px] bg-teal p-6 sm:flex-row sm:items-center sm:gap-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/10 text-ink" aria-hidden="true">
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed text-ink/80">
            <span className="font-semibold text-ink">Same tutor, same content bank.</span>{' '}
            The only difference between these two sessions is pacing — nothing was built twice.
          </p>
        </div>
      </div>
    </section>);

}
