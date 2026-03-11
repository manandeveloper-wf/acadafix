"use client";

import Image from "next/image";
import Link from "next/link";
import EmpowerImage from "@/assets/images/join_hub_image.png"
export default function JoinHub() {
    return (
        <section className="empower_section section2">
            <div className="container">
                <div className="wrap">
                    <div className="content">
                        <h2><span>Empower</span> Your MAT to Lead: Launch Your Own Shared Services Hub</h2>
                        <p>Is your Multi-Academy Trust (MAT) ready to turn operational excellence into a collaborative advantage? Most payroll systems are built for single entities, but AcadaFix is engineered for the visionary MAT.</p>
                        <p>Our platform doesn't just manage your payroll; it provides the infrastructure for you to act as <b>a high-performing service bureau</b> for other Trusts, streamlining costs and professionalising central services across the educational sector.</p>
                    </div>
                    <Image src={EmpowerImage} alt="" />
                </div>
            </div>
        </section>
    );
}