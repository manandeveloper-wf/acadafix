import Image from "next/image";

import ServiceBanner from "@/components/SharedServices/ServiceBanner"
import SharedServiceList from "@/components/SharedServices/WhySharedService";
import EmpowerSection from "@/components/SharedServices/EmpowerSection";
import SharedServiceTable from "@/components/SharedServices/SharedServiceTable";
import PrecisionTechnologySection from "@/components/SharedServices/PrecisionTechnologySection";
import InnerCta from "@/components/SharedServices/InnerCta";
import JoinHub from "@/components/SharedServices/JoinHub";
import WhyJoinService from "@/components/SharedServices/WhyJoinService";
import IntroductionSection from "@/components/SharedServices/IntroductionSection";
import InnerCta2 from "@/components/SharedServices/InnerCta2";
import BureausEdge from "@/components/SharedServices/BureausEdge";
import WhyEducationPayroll from "@/components/SharedServices/WhyEducationPayroll";
import EfficiencyToolTable from "@/components/SharedServices/EfficiencyToolTable";
import SecurityDemandSection from "@/components/SharedServices/SecurityDemandSection";
import InnerCta3 from "@/components/SharedServices/InnerCta3";


export default function Home() {
  return (
    <div className="shared-services-main">
      <ServiceBanner />
      <EmpowerSection />
      <SharedServiceList />
      <SharedServiceTable />
      <PrecisionTechnologySection />
      <InnerCta />
      <JoinHub />
      <WhyJoinService />
      <IntroductionSection />
      <InnerCta2 />
      <BureausEdge />
      <WhyEducationPayroll />
      <EfficiencyToolTable />
      <SecurityDemandSection />
      <InnerCta3 />
    </div>
  );
}
