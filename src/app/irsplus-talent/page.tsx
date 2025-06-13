import { HeroSection } from '@/pages/irsplusTalent/HeroSection';
import { PostsSection } from '@/pages/irsplusTalent/PostsSection';
import { ExperienceSection } from '@/pages/irsplusTalent/ExperienceSection';
import { ServicesSection } from '@/pages/irsplusTalent/ServicesSection';
import { OfferSection } from '@/pages/irsplusTalent/OfferSection';
import { TaxPartner } from '@/widgets/TaxPartner';

export default function TalentPage() {
  return (
    <>
      <HeroSection />
      <PostsSection />
      <ExperienceSection />
      <ServicesSection />
      <OfferSection />
      <TaxPartner />
    </>
  );
}
