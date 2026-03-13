"use client";

import Image from "next/image";
import Link from "next/link";
import BannerImage from "@/assets/images/shared_service_banner.png"
export default function ServiceBanner() {
    return (
        <section className="inner_banner">
            <div className="container">
                <div className="wrap text-reveal">
                    <h1>Shared <span>Services</span> & <br />Bureau Support</h1>
                    <Image src={BannerImage} alt="" />
                </div>
            </div>
        </section>
    );
}