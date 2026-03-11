import Image from "next/image";
import HeroBanner from "@/components/Home/HeroBanner";
import ServiceSection from "@/components/Home/ServiceSection";
import PricingSection from "@/components/Home/PricingSection";
import BuildSection from "@/components/Home/BuildSection"
import PayrollSection from "@/components/Home/PayrollSection"
import PayrollTabSection from "@/components/Home/PayrollTabSection";
import ModernPayrollSection from "@/components/Home/ModernPayrollSection";
import EverythingNeed from "@/components/Home/EverythingNeed";
import DesignWithExperience from "@/components/Home/DesignWithExperience";
import ResourceSection from "@/components/Home/ResourceSection";
import HomeCta from "@/components/Home/HomeCta";
export default function Home() {
  return (
    <div className="homepage-main">
      <HeroBanner />
      <ServiceSection />
      <PricingSection />
      <BuildSection />
      <PayrollSection />
      <PayrollTabSection />
      <ModernPayrollSection />
      <EverythingNeed />
      <DesignWithExperience />
      <ResourceSection />
      <HomeCta/>
    </div>
  );
}
