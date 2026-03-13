"use client";

import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/assets/images/revenue_icon.svg"
import Icon2 from "@/assets/images/Standardise_Compliance_icon.svg"
import Icon3 from "@/assets/images/Scale_Without_Friction_icon.svg"
export default function SharedServiceList() {
    return (
        <section className="why_shared_service">
            <div className="container">
                <h3 className="center text-reveal">Why "Shared Services" is the Future of Education Finance</h3>
                <p className="sub-text center text-reveal">In a landscape of tightening budgets, efficiency and collaboration is the only way forward. By offering payroll as a shared service, your MAT can:</p>
                <div className="wrap text-reveal">
                    <div className="single">
                        <Image src={Icon1} alt="" />
                        <p className="title">Generate Sustainable Revenue</p>
                        <p className="text">Offset your central team overheads by providing expert payroll services to partnering Trusts.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon2} alt="" />
                        <p className="title">Standardise Compliance</p>
                        <p className="text">Ensure every school in your network meets HMRC and Teacher Pension Scheme (TPS) requirements.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon3} alt="" />
                        <p className="title">Scale Without Friction</p>
                        <p className="text">Add new academies or external Trusts to your platform in clicks, not months, without exponentially increasing headcount.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}