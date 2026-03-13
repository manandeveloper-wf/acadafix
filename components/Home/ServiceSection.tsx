"use client";

import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/assets/images/Monthly_Subscriptions.svg"
import Icon2 from "@/assets/images/Credits.svg"
import Icon3 from "@/assets/images/Employee_Self_Serve.svg"
import Icon4 from "@/assets/images/Bureau_Support.svg"

export default function ServiceSection() {
    return (
        <section className="service padding">
            <div className="container">
                <h2 className="center text-reveal"><span>Unique</span> AcadaFix Services</h2>
                <div className="wrap">
                    <div className="single">
                        <Image src={Icon1} alt="" />
                        <h3>Monthly Subscriptions</h3>
                        <p>At AcadaFix, we are sure you will appreciate our sector specific payroll and pension functions, which come with no long-term commitments or hidden charges. Subscribe monthly and cancel if you wish. Here at AcadaFix, we are confident that our software will be your solution and therefore have no desire to lock our customers into contracts.  </p>
                    </div>
                    <div className="single">
                        <Image src={Icon2} alt="" />
                        <h3>Credits</h3>
                        <p>AcadaFix has been developed to be user friendly with easy-to-follow workflows and key information explained and supported by our built in AI. Credits can be purchased for further assistance, from onboarding to personalised reporting template design. We are here to support.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon3} alt="" />
                        <h3>Employee Self-Serve</h3>
                        <p>At AcadaFix, we know that letting employees handle their own payroll, saves time and reduces errors. Our system enables staff to directly communicate, report problems early, submit timesheets and claim expenses for approval, streamlining payroll management.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon4} alt="" />
                        <h3>Bureau Support</h3>
                        <p>Managing payroll in schools can be complex, especially when key staff are unavailable. That’s why we are ready to help – simply use your credits and our experts will step in to keep things running smoothly. No retainer fees necessary.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}