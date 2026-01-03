import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ChallengesSection } from "@/components/home/ChallengesSection";
import { WhatsIncludedSection } from "@/components/home/WhatsIncludedSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ChallengesSection />
      <ProcessSection />
      <WhatsIncludedSection />
      <WhyChooseSection />
      <PlatformSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
