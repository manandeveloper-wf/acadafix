"use client";

import Image from "next/image";
import Link from "next/link";
import CapImage from "@/assets/images/cap_image.png"
import HeroIcon1 from "@/assets/images/HeroBanner_2-icon.svg"
export default function HomeCta() {
    return (
        <section className="home_cta padding">
            <div className="container">
                <div className="wrap">
                    <div className="left-col">
                        <h2><span>Ready</span> to modernise payroll <br />across your MAT?</h2>
                        <p>See how AcadaFix brings accuracy, compliance and visibility to every school in your trust.</p>
                        <div className="btn-wrap">
                            <a href="" className="white-btn">
                                Subscribe
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                    <path d="M0.699219 5.2002H14.6992M14.6992 5.2002L9.44922 0.700195M14.6992 5.2002L9.44922 9.7002" stroke="#1E1A17" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href="" className="border-btn">
                                Register Interest
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                    <path d="M0.699219 5.2002H14.6992M14.6992 5.2002L9.44922 0.700195M14.6992 5.2002L9.44922 9.7002" stroke="#FEFBF4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="right-col">
                        <Image src={CapImage} alt="CapImage" />
                    </div>
                    <Image src={HeroIcon1} alt="" className="icon" />
                </div>

            </div>
        </section>
    );
}