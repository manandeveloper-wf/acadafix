"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <ul className="footer-menu">
                        <li className="text-reveal">
                            <Link href=" ">Product</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">Resources</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">How It Works</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">Pricing</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">Features</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">Contact Us</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">Compliance</Link>
                        </li>
                        <li className="text-reveal">
                            <Link href=" ">T&Cs / Cookie Policy</Link>
                        </li>
                    </ul>
                    <div className="newsletter">
                        <p className="text text-reveal">Get the latest insights on today's world of work delivered straight to your inbox.</p>
                        <div className="input-group text-reveal">
                            <input
                                type="email"
                                placeholder="What's your e-mail?"
                                required
                            />
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                    <path d="M1 12L12 1M12 1H1M12 1V12" stroke="#BC47ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="copyright">© 2025 Acadafix – All rights reserved.</p>
                    <div className="logo">
                        <Link href={'/'}>
                            <Image
                                src={Logo}
                                alt="Main Logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}