"use client";

import Image from "next/image";
import Link from "next/link";
import TableImage from "@/assets/images/service_table_image.png"
export default function SharedServiceTable() {
    return (
        <section className="service_table">
            <div className="container">
                <div className="main-wrap">
                    <div className="top">
                        <h3 className="text-reveal">The Shared Services Power Suite</h3>
                        <p className="text-reveal">We’ve built the tools that allow one central team to manage thousands of employees across multiple legal entities with total clarity.</p>
                    </div>
                    <div className="bottom">
                        <div className="custom-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>How it Empowers Your MAT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Multi-Entity Architecture</td>
                                        <td>Manage unlimited Trusts from a single dashboard with secure data storage and unique data permission for total GDPR security.</td>
                                    </tr>
                                    <tr>
                                        <td>Automated TPS & LGPS</td>
                                        <td>In the education sector, an error in a pension return isn't just a mistake, it’s a potential multi-year audit headache. Our software offers built-in logic for complex pensions ensuring your clients are always compliant.</td>
                                    </tr>
                                    <tr>
                                        <td>"Bureau-Style" Permissions</td>
                                        <td>Give partnering Trusts "View-Only" access or local data entry rights while you retain central control.</td>
                                    </tr>
                                    <tr>
                                        <td>White-Label Reporting</td>
                                        <td>Deliver professional, branded payslips and financial reports that carry your MAT’s branding.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="img-wrap">
                            <Image src={TableImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}