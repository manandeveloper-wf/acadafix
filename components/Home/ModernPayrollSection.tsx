"use client";

import Image from "next/image";
import Link from "next/link";
import Image1 from "@/assets/images/modern_payroll_1.png"
import Image2 from "@/assets/images/modern_payroll_2.png"
import Image3 from "@/assets/images/modern_payroll_3.png"
export default function ModernPayrollSection() {
    return (
        <section className="mordern_payroll padding">
            <div className="container">
                <div className="top">
                    <h2><span>A modern</span> payroll workflow for modern Multi-Academy Trusts.</h2>
                    <p>Acadafix brings structure, automation and clarity to MAT payroll — so teams can run accurate payruns without spreadsheets or patch-ups.</p>
                </div>
                <div className="box">
                    <div className="single">
                        <h3>Create your MAT and schools</h3>
                        <p>Set up your trust structure once — AcadaFix links PAYE, pensions and bank details intelligently.</p>
                        <div className="img-wrap">
                            <Image src={Image1} alt="" />
                        </div>
                        <p>Schools can inherit settings automatically or use their own scheme.</p>
                    </div>
                    <div className="single">
                        <h3>Add employees and their roles</h3>
                        <p>Set up your employees with ease - single-role, multi-role and even cross-school allocated. </p>
                        <div className="img-wrap">
                            <Image src={Image2} alt="" />
                        </div>
                        <p>Every contract becomes a role, with its location pension contribution rate allocated.</p>
                    </div>
                    <div className="single">
                        <h3>Run payroll with full visibility</h3>
                        <p>Simplified workflow permissions allocation - to review variances, approve payruns, generate BACS files and send RTI submissions directly to HMRC.</p>
                        <div className="img-wrap">
                            <Image src={Image3} alt="" />
                        </div>
                        <p>Errors are flagged before they reach HMRC or Pension Providers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}