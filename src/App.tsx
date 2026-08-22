import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesSection } from './components/FeaturesSection';
import { JourneysSection } from './components/JourneysSection';
import { CtaSection } from './components/CtaSection';
import { SiteFooter } from './components/SiteFooter';

export function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-ink antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <JourneysSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>);

}