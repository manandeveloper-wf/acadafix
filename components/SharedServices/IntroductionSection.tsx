"use client";

import Image from "next/image";
import Link from "next/link";
import IntroductionImage from "@/assets/images/introduction_image.png"
export default function IntroductionSection() {
    return (
        <section className="introduction_section">
            <div className="container">
                <div className="wrap">
                    <div className="img-wrap">
                        <Image src={IntroductionImage} alt="" />
                    </div>
                    <div className="content">
                        <h3 className="text-reveal">How the Introduction Works</h3>
                        <p>We act as the matchmaker. We look at your Trust’s size, location and specific  requirements and connect you with a lead MAT whose Shared Service Hub is the perfect cultural and technical fit.</p>
                        <p><b>No referral fees,</b> we simply encourage MAT’s and Education Providers to form alliances, working together for the best outcomes for those we serve.</p>
                        <p><i>"We wanted the power of AcadaFix technology, but didn't have the internal capacity to manage it.Being introduced to a partner Hub through the AcadaFix network was a game-changer for our operational stability."</i></p>
                    </div>
                </div>
            </div>
        </section>
    );
}