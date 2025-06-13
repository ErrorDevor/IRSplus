import { HeroSection } from "@/_pages/aboutUs/HeroSection";
import { AboutUs } from "@/_pages/aboutUs/AboutUs";
import { Since } from "@/_pages/aboutUs/Since";
import { Service } from "@/_pages/aboutUs/Service";
import { Team } from "@/_pages/aboutUs/Team";
import { OurMission } from "@/_pages/aboutUs/OurMission";
import { Services } from "@/_pages/aboutUs/Services";
import { WhoWeAre } from "@/_pages/aboutUs/WhoWeAre";
import { SliderSwiperSection } from "@/_pages/aboutUs/SliderSwiperSection";
import { YourCredits } from "@/_pages/aboutUs/YourCredits";
import { YourInsight } from "@/_pages/aboutUs/YourInsight";
import { GivingBack } from "@/_pages/aboutUs/GivingBack";
import { Slider } from "@/widgets/Slider";
import { TaxPartner } from "@/widgets/TaxPartner";

export default function IncentivesPage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Since />
      <Service />
      <Team />
      <OurMission />
      <YourInsight />
      <Services />
      <WhoWeAre />   
      <SliderSwiperSection />       
      <YourCredits />
      <GivingBack />
      <Slider />
      <TaxPartner />
    </>
  );
}
