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
                        <li>
                            <Link href=" ">Product</Link>
                        </li>
                        <li>
                            <Link href=" ">Resources</Link>
                        </li>
                        <li>
                            <Link href=" ">How It Works</Link>
                        </li>
                        <li>
                            <Link href=" ">Pricing</Link>
                        </li>
                        <li>
                            <Link href=" ">Features</Link>
                        </li>
                        <li>
                            <Link href=" ">Contact Us</Link>
                        </li>
                        <li>
                            <Link href=" ">Compliance</Link>
                        </li>
                        <li>
                            <Link href=" ">T&Cs / Cookie Policy</Link>
                        </li>
                    </ul>
                    <div className="newsletter">
                        <p className="text">Get the latest insights on today's world of work delivered straight to your inbox.</p>
                        <div className="input-group">
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