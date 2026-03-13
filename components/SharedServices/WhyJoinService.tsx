"use client";

import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/assets/images/Reduced_Overhead_icon.svg"
import Icon2 from "@/assets/images/Expert_Oversight_icon.svg"
import Icon3 from "@/assets/images/Plug-and-Play_icon.svg"
import Icon4 from "@/assets/images/Focus_Outcomes_icon.svg"
export default function WhyJoinService() {
    return (
        <section className="why_shared_service section2">
            <div className="container">
                <h3 className="center text-reveal">Why Join an Existing Shared Services Hub?</h3>
                <p className="sub-text center text-reveal">By integrating your payroll into a partner MAT’s hub, you gain more than just AcadaFix software; you gain a professional alliance:</p>
                <div className="wrap">
                    <div className="single">
                        <Image src={Icon1} alt="" />
                        <p className="title">Reduced Overhead</p>
                        <p className="text">Benefit from the economies of scale that come with a centralised central team.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon2} alt="" />
                        <p className="title">Expert Oversight</p>
                        <p className="text">Your payroll is managed by education finance specialists who understand the intricacies of the STPCD and NJC inside out.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon3} alt="" />
                        <p className="title">Plug-and-Play Compliance</p>
                        <p className="text">Immediately inherit the rigorous TPS and LGPS compliance workflows already built into the host's AcadaFix environment.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon4} alt="" />
                        <p className="title">Focus on Outcomes</p>
                        <p className="text">Free your leadership team from back-office administration so they can focus on what matters most: teaching and learning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}