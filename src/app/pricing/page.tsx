import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PricingSection } from '@/components/PricingSection';

export const metadata = {
  title: 'Pricing | GrowthGrid',
  description: 'Simple, transparent pricing for GrowthGrid. Start for free, upgrade when you need to.',
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
