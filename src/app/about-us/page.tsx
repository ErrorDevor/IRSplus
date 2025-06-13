import { HeroSection } from "@/pages/aboutUs/HeroSection";
import { AboutUs } from "@/pages/aboutUs/AboutUs";
import { Since } from "@/pages/aboutUs/Since";
import { Service } from "@/pages/aboutUs/Service";
import { Team } from "@/pages/aboutUs/Team";
import { OurMission } from "@/pages/aboutUs/OurMission";
import { Services } from "@/pages/aboutUs/Services";
import { WhoWeAre } from "@/pages/aboutUs/WhoWeAre";
import { SliderSwiperSection } from "@/pages/aboutUs/SliderSwiperSection";
import { YourCredits } from "@/pages/aboutUs/YourCredits";
import { YourInsight } from "@/pages/aboutUs/YourInsight";
import { GivingBack } from "@/pages/aboutUs/GivingBack";
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
