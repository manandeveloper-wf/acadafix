"use client";

import Image from "next/image";
import Link from "next/link";
import BureausEdgeImage from "@/assets/images/Bureaus_Edge_Image.png"
export default function BureausEdge() {
    return (
        <section className="empower_section section3">
            <div className="container">
                <div className="wrap">
                    <Image src={BureausEdgeImage} alt="" />
                    <div className="content">
                        <h2><span>The Bureau’s</span> Edge: Delivering Gold-Standard Payroll to the Education Sector</h2>
                        <p>As a payroll bureau, your reputation is built on accuracy and reliability. But when it comes to the education sector, "standard" commercial payroll isn't enough. From multi-post contracts to complex pension reporting, schools require a level of granularity that standard systems simply don't provide.</p>
                        <p>To win and retain Multi-Academy Trusts (MATs) and schools, you need a platform that
                            masters the complexities of Teacher Pensions, LGPS and fragmented pay scales. Using a sector-specific platform isn't just a preference, it’s a risk-management necessity.</p>
                        <p><b>AcadaFix</b> is the high-performance engine that turns your bureau into a specialist education powerhouse.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}