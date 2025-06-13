import { HeroSection } from '@/pages/incentivesAndCredits/HeroSection';
import { YourCredits } from '@/pages/incentivesAndCredits/YourCredits';
import { OurMission } from '@/pages/incentivesAndCredits/OurMission';
import { Here } from '@/pages/incentivesAndCredits/Here';
import { Challenges } from '@/pages/incentivesAndCredits/Challenges';
import { Guadiens } from '@/pages/incentivesAndCredits/Guadiens';
import { Assurance } from '@/pages/incentivesAndCredits/Assurance';
import { TaxPartner } from '@/widgets/TaxPartner';

export default function IncentivesPage() {
  return (
    <>
      <HeroSection />
      <YourCredits />
      <OurMission />
      <Here />
      <Challenges />
      <Guadiens />
      <Assurance />
      <TaxPartner />
    </>
  );
}
