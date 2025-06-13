import { HeroSection } from '@/_pages/incentivesAndCredits/HeroSection';
import { YourCredits } from '@/_pages/incentivesAndCredits/YourCredits';
import { OurMission } from '@/_pages/incentivesAndCredits/OurMission';
import { Here } from '@/_pages/incentivesAndCredits/Here';
import { Challenges } from '@/_pages/incentivesAndCredits/Challenges';
import { Guadiens } from '@/_pages/incentivesAndCredits/Guadiens';
import { Assurance } from '@/_pages/incentivesAndCredits/Assurance';
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
