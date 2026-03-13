"use client";

import Image from "next/image";
import FaqGroup from "@/components/FaqGroup";
import Image1 from "@/assets/images/faq_image_1.png"
import Image2 from "@/assets/images/faq_image_2.png"

import Icon1 from "@/assets/images/faq_icon_1.svg";
import Icon2 from "@/assets/images/faq_icon_2.svg";
import Icon3 from "@/assets/images/faq_icon_3.svg";
import Icon4 from "@/assets/images/faq_icon_4.svg";
import Icon5 from "@/assets/images/faq_icon_5.svg";
import Icon6 from "@/assets/images/faq_icon_6.svg";
export default function EverythingNeed() {
    const faqGroup1 = [
        {
            title: "Easily Managed Onboarding",
            icon: Icon1,
            content: (
                <>
                    <p>
                        Starters & Leavers, P45 details & HMRC starter declarations.
                    </p>

                    <p>No more chasing paperwork across schools.</p>

                    <ul>
                        <li>Automatic starter forms</li>
                        <li>P45 data capture</li>
                        <li>HMRC declaration support</li>
                    </ul>
                </>
            ),
        },

        {
            title: "Pay Scales & Spine Points",
            icon: Icon2,
            content: (
                <>
                    <p><b>Starters & Leavers, P45 details & HMRC starter declarations.</b></p>
                    <p>No more chasing paperwork across schools.</p>
                </>
            ),
        },
        {
            title: "Pay Scales & Spine Points",
            icon: Icon3,
            content: (
                <>
                    <p><b>Starters & Leavers, P45 details & HMRC starter declarations.</b></p>
                    <p>No more chasing paperwork across schools.</p>
                </>
            ),
        },
        {
            title: "Pay Scales & Spine Points",
            icon: Icon4,
            content: (
                <>
                    <p><b>Starters & Leavers, P45 details & HMRC starter declarations.</b></p>
                    <p>No more chasing paperwork across schools.</p>
                </>
            ),
        },
        {
            title: "Pay Scales & Spine Points",
            icon: Icon5,
            content: (
                <>
                    <p><b>Starters & Leavers, P45 details & HMRC starter declarations.</b></p>
                    <p>No more chasing paperwork across schools.</p>
                </>
            ),
        },
    ];
    return (
        <section className="everything_need padding">
            <div className="container">
                <div className="wrap">
                    <div className="image">
                        <Image src={Image1} alt="" />
                    </div>
                    <div className="info">
                        <h2 className="text-reveal"><span>Everything</span> MAT payroll teams need. Nothing they don’t.</h2>
                        <p className="sub-text">AcadaFix includes all the essential tools required to run accurate, compliant payroll across every school in your trust — without the clutter of legacy systems.</p>
                        <FaqGroup faqs={faqGroup1} />
                    </div>
                </div>
                <div className="wrap">
                    <div className="image">
                        <Image src={Image2} alt="" />
                    </div>
                    <div className="info">
                        <h2 className="text-reveal"><span>Accuracy</span> you can rely on. Compliance you can trust.</h2>
                        <p className="sub-text">AcadaFix is built to meet the payroll, pension and reporting requirements of UK Multi-Academy Trusts — with automated checks, audit trails and RTI-ready workflows.</p>
                        <FaqGroup faqs={faqGroup1} />
                    </div>
                </div>
            </div>
        </section>
    );
}