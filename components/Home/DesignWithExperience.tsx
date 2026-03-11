"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/assets/images/design_with_exp.svg"

export default function DesignWithExperience() {
    return (
        <section className="design_experience">
            <div className="container">
                <h2 className="center"><span>Designed</span> with real MAT payroll <br /> experience at its core.</h2>
                <p className="sub-text center">AcadaFix was shaped by a CIPP education payroll professional who has years of experience processing school and MAT payruns — ensuring the system solves real operational challenges and software inadequacies.</p>
                <div className="box">
                    <div className="left-col">
                        <h3>Most payroll systems were built for corporate companies, then retrofitted for schools. AcadaFix is different. Created by a fellow MAT professional for the education sector.</h3>
                        <p>This means every workflow is practical, real-world, and shaped by genuine MAT needs — not assumptions.</p>
                    </div>
                    <div className="right-col">
                        <p>It was created with direct input from a senior MAT payroll specialist who has spent years dealing with:</p>
                        <ul>
                            <li>Multi-job employees</li>
                            <li>Pension discrepancies</li>
                            <li>HMRC corrections</li>
                            <li>Manual spreadsheets</li>
                            <li>Cross-school complexities</li>
                        </ul>
                    </div>
                    <Image src={Icon} className="icon" alt="" />
                </div>
            </div>
        </section>
    );
}