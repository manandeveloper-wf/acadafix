import Image from "next/image";

import ServiceBanner from "@/components/SharedServices/ServiceBanner"
import SharedServiceList from "@/components/SharedServices/WhySharedService";
import EmpowerSection from "@/components/SharedServices/EmpowerSection";
import SharedServiceTable from "@/components/SharedServices/SharedServiceTable";
import PrecisionTechnologySection from "@/components/SharedServices/PrecisionTechnologySection";
import InnerCta from "@/components/SharedServices/InnerCta";
import JoinHub from "@/components/SharedServices/JoinHub";
import WhyJoinService from "@/components/SharedServices/WhyJoinService";

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
      <WhyJoinService/>
    </div>
  );
}
