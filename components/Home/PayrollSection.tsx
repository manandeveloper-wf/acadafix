"use client";

import Image from "next/image";
import Link from "next/link";
import PayrollImage from "@/assets/images/payroll_system_image.png"
import PayrollIcon from "@/assets/images/payroll_icon.svg"


export default function PayrollSection() {
    return (
        <section className="payroll-section padding">
            <div className="container">
                <div className="wrap">
                    <div className="left-col">
                        <h2><span>Payroll</span> systems weren’t built for Multi-Academy Trusts.</h2>
                        <p>MAT payroll is uniquely complex — but legacy systems treat every school like a standalone company. <br /><b>The result?</b> Errors, rework, and endless manual checks.</p>
                        <div className="img-wrap">
                            <Image src={PayrollImage} alt="" className="image" />
                            <Image src={PayrollIcon} alt="" className="icon" />
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="steps">
                            <div className="single">
                                <div className="info">
                                    <h3>Multi-Role employees confuse legacy payroll tools</h3>
                                    <p>Teachers and support staff with multiple roles cause pension errors.</p>
                                </div>
                                <p className="number">01</p>
                            </div>
                            <div className="single">
                                <div className="info">
                                    <h3>Pension contributions miscalculate too often</h3>
                                    <p>TPS & LGPS verifications aren’t built into traditional payroll systems.</p>
                                </div>
                                <p className="number">02</p>
                            </div>
                            <div className="single">
                                <div className="info">
                                    <h3>Backpay for amended contracts & ended roles often omitted</h3>
                                    <p>Systems calculate from present contract information, unable to include past events.</p>
                                </div>
                                <p className="number">03</p>
                            </div>
                            <div className="single">
                                <div className="info">
                                    <h3>Payroll teams are forced to verify in spreadsheets</h3>
                                    <p>Manual checks, correction cycles and re-keying data waste hours every month.</p>
                                </div>
                                <p className="number">04</p>
                            </div>
                            <div className="single">
                                <div className="info">
                                    <h3>Essential DfE specific reporting not supported</h3>
                                    <p>Manual manipulation of data required for standard annual reporting.</p>
                                </div>
                                <p className="number">05</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}