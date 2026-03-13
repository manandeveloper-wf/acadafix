"use client";

import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/assets/images/Pensions _Without_Panic.svg"
import Icon2 from "@/assets/images/The_Multi-Post_Mastery.svg"
import Icon3 from "@/assets/images/Automated_Pay_Spines.svg"
export default function WhyEducationPayroll() {
    return (
        <section className="why_shared_service section3">
            <div className="container">
                <h3 className="center text-reveal">Why Education Payroll is Different (And Why You’ll Win)</h3>
                <p className="sub-text center text-reveal">Generic payroll software creates manual work for your team and risk for your clients. Our platform automates the "education nuances," allowing you to offer a premium, error-free service that generalist bureaus simply can’t match.</p>
                <div className="wrap">
                    <div className="single">
                        <Image src={Icon1} alt="" />
                        <p className="title">Pensions Without the Panic</p>
                        <p className="text">Fully automated MCR (Monthly Contributions Reconciliation) and MDC for Teachers’ Pensions. No more manual spreadsheets; just clean, validated files ready for upload.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon2} alt="" />
                        <p className="title">The "Multi-Post" Mastery</p>
                        <p className="text">Schools often employ one person in two roles (e.g., a Teaching Assistant and a Midday Supervisor). We handle split costs, different pay scales, and multiple pension treatments on a single, clear payslip.</p>
                    </div>
                    <div className="single">
                        <Image src={Icon3} alt="" />
                        <p className="title">Automated Pay Spines</p>
                        <p className="text">We template STPCD and NJC pay scales directly into our system. When national pay awards are announced, you can apply updates across your entire school portfolio with one click.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}