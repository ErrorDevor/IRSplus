import { HeroSection } from '@/widgets/irsplusTalent/HeroSection';
import { PostsSection } from '@/widgets/irsplusTalent/PostsSection';
import { ExperienceSection } from '@/widgets/irsplusTalent/ExperienceSection';
import { ServicesSection } from '@/widgets/irsplusTalent/ServicesSection';
import { OfferSection } from '@/widgets/irsplusTalent/OfferSection';
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
