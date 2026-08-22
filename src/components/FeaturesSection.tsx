import { motion } from "framer-motion";
import { BrainIcon, HeartIcon, LineChartIcon, MicIcon, RouteIcon, LanguagesIcon, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { features, Feature } from "../data/content";
const iconMap: Record<Feature['icon'], LucideIcon> = {
  route: RouteIcon,
  brain: BrainIcon,
  languages: LanguagesIcon,
  chart: LineChartIcon,
  heart: HeartIcon,
  mic: MicIcon
};
const core = features.filter((feature) => feature.tag === 'Core');
const bonus = features.filter((feature) => feature.tag === 'Bonus');
export function FeaturesSection() {
  return <section id="features" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="What makes it a tutor, not a worksheet" subtitle="Three things it must do well, and three more that parents tell us they cannot live without." />

        <div className="scene-3d mt-16 grid gap-6 md:grid-cols-3">
          {core.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return <motion.div key={feature.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-80px'
          }} transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: [0.23, 1, 0.32, 1]
          }}>
                <TiltCard className="h-full rounded-[24px] bg-cream-soft p-7">
                  <div className="flex h-full flex-col">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-ink">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-ink-muted">{feature.body}</p>
                  </div>
                </TiltCard>
              </motion.div>;
        })}
        </div>

        <div className="mt-6 grid gap-x-10 gap-y-5 rounded-[24px] border border-ink/10 p-7 sm:grid-cols-3">
          {bonus.map((feature) => {
          const Icon = iconMap[feature.icon];
          return <div key={feature.id} className="flex gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-ink" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{feature.body}</p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
