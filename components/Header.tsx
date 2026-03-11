"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png"
export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={isFixed ? "fixed" : ""}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <Link href={'/'}>
              <Image
                src={Logo}
                alt="Main Logo"
              />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href=" ">Product</Link>
              </li>
              <li>
                <Link href=" ">How It Works</Link>
              </li>
              <li>
                <Link href=" ">Features</Link>
              </li>
              <li>
                <Link href=" ">Compliance</Link>
              </li>
              <li>
                <Link href=" ">Resources</Link>
              </li>
              <li>
                <Link href=" ">Pricing</Link>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <Link className="subscribe-btn" href="">Subscribe</Link>
            <Link className="register-btn" href="">
              Register Interest
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0.699219 4.70001H12.6992M12.6992 4.70001L8.19922 0.700008M12.6992 4.70001L8.19922 8.70001" stroke="#1E1A17" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link className="login-btn" href=" ">
              Login
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0.699219 4.70001H12.6992M12.6992 4.70001L8.19922 0.700008M12.6992 4.70001L8.19922 8.70001" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}
