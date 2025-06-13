import { HeroSection } from '@/_pages/irsplusTalent/HeroSection';
import { PostsSection } from '@/_pages/irsplusTalent/PostsSection';
import { ExperienceSection } from '@/_pages/irsplusTalent/ExperienceSection';
import { ServicesSection } from '@/_pages/irsplusTalent/ServicesSection';
import { OfferSection } from '@/_pages/irsplusTalent/OfferSection';
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
