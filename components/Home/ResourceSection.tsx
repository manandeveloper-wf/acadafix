"use client";

import Image from "next/image";
import Link from "next/link";
import Image1 from "@/assets/images/resource_image_1.png"
import Image2 from "@/assets/images/resource_image_2.png"
import Image3 from "@/assets/images/resource_image_3.png"
export default function ResourceSection() {
    return (
        <section className="resource_section padding">
            <div className="container">
                <h2 className="center text-reveal"><span>Helpful</span> resources for MAT finance <br /> and payroll teams.</h2>
                <p className="sub-text center text-reveal">Guides created to support schools and trusts with payroll, pensions and compliance.</p>
                <div className="box">
                    <div className="single">
                        <div className="img-wrap">
                            <Image src={Image1} alt="" />
                        </div>
                        <h3><b>Common payroll acronyms</b></h3>
                        <p className="content">UK Payroll & Payslip Abbreviations A-Z. A glossary of payroll terms and acronyms can be found by clicking on this section.</p>
                    </div>
                    <div className="single">
                        <div className="img-wrap">
                            <Image src={Image2} alt="" />
                        </div>
                        <h3><b>Understanding your payslip</b></h3>
                        <p className="content">Are you confused by payslip jargon and abbreviations? Use this interactive tool to help you understand what your payslip means.</p>
                    </div>
                    <div className="single">
                        <div className="img-wrap">
                            <Image src={Image3} alt="" />
                        </div>
                        <h3><b>Budget Updates</b></h3>
                        <p className="content">Our centralised place for all the latest news and analysis following each government budget.You can access the links to the most recent, and all previously added budget information here.</p>
                    </div>
                </div>
                <div className="btn-wrap center">
                    <a href="" className="view-more">
                        View More Resources
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path d="M0.699219 5.2002H14.6992M14.6992 5.2002L9.44922 0.700195M14.6992 5.2002L9.44922 9.7002" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}