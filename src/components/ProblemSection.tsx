import { motion } from 'framer-motion';
import { problems } from '../data/content';

export function ProblemSection() {
  return (
    <section id="problem" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            One teacher. Fifty children.{' '}
            <span className="inline-block rounded-md bg-coral px-2 py-0.5">Who gets left behind?</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            Nothing in a classroom is designed to notice the child who nodded along without
            understanding. That is the child The Primer is built for.
          </p>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {problems.map((problem, index) =>
          <motion.li
            key={problem.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:gap-8">
            
              <div className="sm:w-32 sm:shrink-0">
                <p className="font-display text-2xl font-semibold text-ink">{problem.stat}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">{problem.statLabel}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{problem.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-muted">{problem.body}</p>
              </div>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
