import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { steps } from '../data/content';

export function HowItWorks() {
  return (
    <section id="how" className="bg-graph bg-cream-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Three questions in, it already knows"
          subtitle="No placement test, no grade assumption. Just a short game and a lesson that keeps rewriting itself." />
        

        <ol className="scene-3d mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) =>
          <motion.li
            key={step.number}
            initial={{ opacity: 0, y: 20, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="layer-3d relative flex flex-col rounded-[24px] bg-white p-7 shadow-card"
            style={{ transform: `translateZ(${index * 14}px) rotateY(${(index - 1) * -4}deg)` }}>
            
              <div
              className="layer-3d flex h-12 w-12 items-center justify-center rounded-xl bg-ink font-display text-xl font-semibold text-lime"
              style={{ transform: 'translateZ(34px)' }}>
              
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-muted">{step.body}</p>
              <p className="mt-auto pt-6 font-mono text-xs font-semibold uppercase tracking-wide text-ink-muted">
                {step.detail}
              </p>
            </motion.li>
          )}
        </ol>
      </div>
    </section>);

}
