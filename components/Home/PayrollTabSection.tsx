"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/assets/images/tab_1_icon.svg"
import Icon2 from "@/assets/images/tab_2_icon.svg"
import Icon3 from "@/assets/images/tab_3_icon.svg"
import Icon4 from "@/assets/images/tab_4_icon.svg"
import BigIcon1 from "@/assets/images/tab_1_icon-big.svg"
import BigIcon2 from "@/assets/images/tab_2_icon-big.svg"
import BigIcon3 from "@/assets/images/tab_3_icon-big.svg"
import BigIcon4 from "@/assets/images/tab_4_icon-big.svg"
import Image1 from "@/assets/images/tab_1_image.png"
import Image2 from "@/assets/images/tab_2_image.png"
import Image3 from "@/assets/images/tab_3_image.png"
import Image4 from "@/assets/images/tab_4_image.png"


export default function PayrollTabSection() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="payroll-tab-section">
            <div className="container">
                <h2 className="center text-reveal"><span>The payroll</span> system designed <br />around how MATs actually work.</h2>
                <p className="text center text-reveal">AcadaFix handles MAT structures, schools and education providers with multiple roles and pensions. So payroll and pension reporting is accurate the first time, every time.</p>
                <div className="tab-wrap">
                    <ul className="tab-list">
                        <li className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
                            <Image src={Icon1} alt="" />
                            <p>
                                Multi-Role Employee’s, Built In
                            </p>
                        </li>
                        <li className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>
                            <Image src={Icon2} alt="" />
                            <p>
                                MAT-Level Payruns & Visibility
                            </p>
                        </li>
                        <li className={activeTab === 3 ? "active" : ""} onClick={() => setActiveTab(3)}>
                            <Image src={Icon3} alt="" />
                            <p>
                                Accurate TPS & LGPS Pensions
                            </p>
                        </li>
                        <li className={activeTab === 4 ? "active" : ""} onClick={() => setActiveTab(4)}>
                            <Image src={Icon4} alt="" />
                            <p>
                                HMRC Compliance by Default
                            </p>
                        </li>
                    </ul>
                    <div className="tab-content-list">
                        {activeTab === 1 && (
                            <div className="tab-1 tab-common">
                                <div className="wrap">
                                    <div className="info">
                                        <Image src={BigIcon1} alt="" />
                                        <h3>Multi-Role Employee’s, Built In</h3>
                                        <p className="sub-text">Teachers, support staff, or dual roles — every contract is handled separately and precisely.</p>
                                        <ul>
                                            <li>No more manual adjustments or separate calculations.</li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <Image src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className="tab-1 tab-common">
                                <div className="wrap">
                                    <div className="info">
                                        <Image src={BigIcon2} alt="" />
                                        <h3>MAT-Level Payruns & Visibility</h3>
                                        <p className="sub-text">See everything in one place — variances, anomalies, schools and pay totals across the trust.</p>
                                        <ul>
                                            <li>Run payroll centrally without losing school-level detail.</li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <Image src={Image2} alt="" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className="tab-1 tab-common">
                                <div className="wrap">
                                    <div className="info">
                                        <Image src={BigIcon3} alt="" />
                                        <h3>Accurate TPS & LGPS Pensions</h3>
                                        <p className="sub-text">Pension rules embedded into the core calculation engine.</p>
                                        <ul>
                                            <li>No more manual correction cycles or contribution errors.</li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <Image src={Image3} alt="" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 4 && (
                            <div className="tab-1 tab-common">
                                <div className="wrap">
                                    <div className="info">
                                        <Image src={BigIcon4} alt="" />
                                        <h3>HMRC Compliance by Default</h3>
                                        <p className="sub-text">RTI submissions (FPS/EPS) are automatically generated, checked and error-guarded.</p>
                                        <ul>
                                            <li>Built to stop errors before they ever reach HMRC.</li>
                                        </ul>
                                    </div>
                                    <div className="image">
                                        <Image src={Image4} alt="" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}