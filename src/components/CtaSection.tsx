import { ShieldCheckIcon, ArrowRightIcon } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="start" className="relative overflow-hidden bg-coral py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 select-none font-display text-[280px] font-semibold leading-none text-ink/10">
        
        ?
      </span>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Give your child a tutor with the patience of fifty teachers
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
          Set it up in five minutes tonight. Your child plays one short game, and tomorrow&apos;s
          lesson already starts at the right place.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#start"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-lime transition-transform duration-150 ease-swift hover:-translate-y-0.5 hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-coral">
            
            Start free trial
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#how"
            className="rounded-full border border-ink/30 px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-150 ease-swift hover:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-coral">
            
            How it works
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink/60">
          <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
          No credit card required · 14-day trial
        </p>
      </div>
    </section>);

}
