"use client";

import Image from "next/image";
import Link from "next/link";
import HeroIcon1 from "@/assets/images/HeroBanner_2-icon.svg"
import CreditIcon from "@/assets/images/credit-icon.svg"


export default function PricingSection() {
    return (
        <section className="pricing-section padding">
            <div className="container">
                <h2 className="center"><span>Payroll</span> Software Pricing</h2>
                <p className="sub-text center">Here at AcadaFix we believe in a transparent and open subscription pricing policy.</p>
                <div className="wrap">
                    <div className="single">
                        <div className="info">
                            <p className="title">Subscription</p>
                            <p className="text">Monthly cost per active employee</p>
                            <a href="" className="purple-btn">
                                Subscribe
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                    <path d="M0.699219 5.19995H14.6992M14.6992 5.19995L9.44922 0.699951M14.6992 5.19995L9.44922 9.69995" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <div className="price">
                            <p>£3.00</p>
                        </div>
                        <Image src={HeroIcon1} alt="" />
                    </div>
                    <div className="single">
                        <div className="info">
                            <p className="title">Credits</p>
                            <p className="text">
                                <b>Need assistance?</b><br />Tell us how we can help and we’ll let you know how many credits.
                            </p>
                            <a href="" className="purple-btn">
                                Purchase
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                    <path d="M0.699219 5.19995H14.6992M14.6992 5.19995L9.44922 0.699951M14.6992 5.19995L9.44922 9.69995" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <div className="price">
                            <p>£15.00</p>
                        </div>
                        <Image src={CreditIcon} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}