"use client";

import Image from "next/image";
import Link from "next/link";
export default function SecurityDemandSection() {
    return (
        <section className="why_shared_service precision">
            <div className="container">
                <h3 className="center text-reveal">Security That Schools Demand</h3>
                <p className="sub-text center text-reveal">In education, data security is non-negotiable. AcadaFix provides enterprise-grade protection that gives School Business Managers and Trust Boards total peace of mind.</p>
                <div className="wrap">
                    <div className="single">
                        <p className="title">ISO 27001 Certified Environment</p>
                        <p className="text">Your clients' sensitive data is hosted in a high-security, UK-based cloud.</p>
                    </div>
                    <div className="single">
                        <p className="title">Granular Permissions</p>
                        <p className="text">Control exactly what school staff can see and do within the portal.</p>
                    </div>
                    <div className="single">
                        <p className="title">Secure Document Delivery</p>
                        <p className="text">An encrypted employee app for payslips and P60s, reducing the GDPR risk of printed or emailed documents.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}