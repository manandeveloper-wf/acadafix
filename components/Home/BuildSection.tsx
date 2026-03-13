"use client";

import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/assets/images/HMRC_icon.svg"
import Icon2 from "@/assets/images/security_icon.svg"
import Icon3 from "@/assets/images/BACS-Ready_icon.svg"
import Icon4 from "@/assets/images/Multi-Role_icon.svg"
import Icon5 from "@/assets/images/Auto-Enrolment_icon.svg"
import Icon6 from "@/assets/images/GDPR_icon.svg"
import Icon7 from "@/assets/images/Audit-Ready_icon.svg"


export default function BuildSection() {
    return (
        <section className="builed-section padding">
            <div className="container">
                <h2 className="center text-reveal"><span>Built</span> for Accuracy. <br />Engineered for Compliance.</h2>
                <p className="sub-text center text-reveal">AcadaFix meets the highest standards for payroll, pensions, HMRC compliance, reporting and data security - giving MAT’s confidence from day one.</p>
                <div className="wrap">
                    <div className="top">
                        <div className="single">
                            <Image src={Icon1} alt="" />
                            <p className="title">HMRC RTI Compatible</p>
                            <p className="text">FPS & EPS automation built into every payrun.</p>
                        </div>
                        <div className="single">
                            <Image src={Icon2} alt="" />
                            <p className="title">TPS & LGPS Pension Rules Built In</p>
                            <p className="text">Accurate contribution calculations for teachers and support staff.  </p>
                        </div>
                        <div className="single">
                            <Image src={Icon3} alt="" />
                            <p className="title">BACS-Ready Payroll Files</p>
                            <p className="text">Generate fully compliant BACS files.</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="single">
                            <Image src={Icon4} alt="" />
                            <p className="title">Multi-Role Payroll Logic</p>
                            <p className="text">Purpose-built for MAT employees with multiple roles.</p>
                        </div>
                        <div className="single">
                            <Image src={Icon5} alt="" />
                            <p className="title">Auto-Enrolment Compliance</p>
                            <p className="text">Staging dates and re-declaration handled at MAT or school level.</p>
                        </div>
                        <div className="single">
                            <Image src={Icon6} alt="" />
                            <p className="title">GDPR & Secure Data Handling</p>
                            <p className="text">UK-first data protection built into the platform.</p>
                        </div>
                        <div className="single">
                            <Image src={Icon7} alt="" />
                            <p className="title">Audit-Ready Workflow Engine</p>
                            <p className="text">Full payroll change tracking and approval visibility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}