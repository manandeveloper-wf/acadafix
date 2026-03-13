"use client";

import Image from "next/image";
import Link from "next/link";
export default function InnerCta2() {
    return (
        <section className="inner_cta section2">
            <div className="container">
                <div className="wrap">
                    <h2 className="text-reveal"><span>Ready to</span> find your partner?</h2>
                    <p className="text-reveal">Let us make the introduction. If you’re interested in joining a Shared Services Hub, or if you'd like to learn more about how our network operates, get in touch today.</p>
                    <a href="" className="text-reveal white-btn">
                        Connect With Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                            <path d="M0.699219 5.2002H14.6992M14.6992 5.2002L9.44922 0.700195M14.6992 5.2002L9.44922 9.7002" stroke="#1E1A17" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}