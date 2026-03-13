"use client";

import Image from "next/image";
import Link from "next/link";
import EfficiencyToolImage from "@/assets/images/Efficiency_Tools_image.png"
export default function EfficiencyToolTable() {
    return (
        <section className="service_table section2">
            <div className="container">
                <div className="main-wrap">
                    <div className="top">
                        <h3 className="text-reveal">Efficiency Tools for the Modern Bureau</h3>
                        <p  className="text-reveal">We didn't just build this for schools; we built it for the people running the payroll. Our Bureau Dashboard gives you a bird's-eye view of your entire educational portfolio.</p>
                    </div>
                    <div className="bottom">
                        <div className="custom-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Your Competitive Advantage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bulk Variation Processing</td>
                                        <td>Review thousands of overtime claims or sickness absences across multiple schools in seconds.</td>
                                    </tr>
                                    <tr>
                                        <td>White-Label Client Portals</td>
                                        <td>Give MAT Finance Directors their own branded portal to approve runs and download reports.</td>
                                    </tr>
                                    <tr>
                                        <td>Automated "Term-Time Only"</td>
                                        <td>Our built-in pro-rata engine calculates complex TTO salaries accurately, every time.</td>
                                    </tr>
                                    <tr>
                                        <td>Workforce Census Ready</td>
                                        <td>Generate the data required for the annual School Workforce Census automatically, saving your clients weeks of work.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="img-wrap">
                            <Image src={EfficiencyToolImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}