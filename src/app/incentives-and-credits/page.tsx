import { HeroSection } from '@/widgets/incentivesAndCredits/HeroSection';
import { YourCredits } from '@/widgets/incentivesAndCredits/YourCredits';
import { OurMission } from '@/widgets/incentivesAndCredits/OurMission';
import { Here } from '@/widgets/incentivesAndCredits/Here';
import { Challenges } from '@/widgets/incentivesAndCredits/Challenges';
import { Guadiens } from '@/widgets/incentivesAndCredits/Guadiens';
import { Assurance } from '@/widgets/incentivesAndCredits/Assurance';
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
