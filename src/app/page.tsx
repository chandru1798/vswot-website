import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
