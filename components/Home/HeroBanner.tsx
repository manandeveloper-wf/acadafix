"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage1 from "@/assets/images/HeroBanner_1.png"
import HeroImage2 from "@/assets/images/HeroBanner_2.png"
import HeroIcon1 from "@/assets/images/HeroBanner_1-icon.svg"
import HeroIcon2 from "@/assets/images/HeroBanner_2-icon.svg"

export default function HeroBanner() {
    return (
        <section className="hero_banner">
            <div className="container">
                <div className="wrap">
                    <div className="left-col">
                        <h1><span>Streamlined</span> Payroll & Pension Solution for the Education Sector</h1>
                        <p className="content">Our software has been founded by a Multi-Academy Trust Finance & Payroll Professional. Simplifying payroll & pension reporting for in-house processing.</p>
                        <div className="btn-group">
                            <Link className="purple-btn" href="">
                                Subscribe
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                    <path d="M0.699219 5.20001H14.6992M14.6992 5.20001L9.44922 0.700012M14.6992 5.20001L9.44922 9.70001" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link className="border-btn" href="">
                                Register Interest
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                    <path d="M0.699219 5.20001H14.6992M14.6992 5.20001L9.44922 0.700012M14.6992 5.20001L9.44922 9.70001" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <p className="bottom-text">Subscribe……That’s right. No contracts, subscribe monthly.</p>
                    </div>
                    <div className="right-col">
                        <div className="first-img">
                            <Image src={HeroImage1} alt="" />
                            <Image src={HeroIcon1} alt="" />
                        </div>
                        <div className="second-img">
                            <Image src={HeroImage2} alt="" />
                            <Image src={HeroIcon2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}