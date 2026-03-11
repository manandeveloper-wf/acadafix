"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import Logo from "@/assets/images/logo.png"
export default function Header() {

  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    const html = document.documentElement;

    if (!menuOpen) {
      html.classList.add("menu-open");
    } else {
      html.classList.remove("menu-open");
    }

    setMenuOpen(!menuOpen);
  };
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

  useEffect(() => {
    if (!menuRef.current || !buttonsRef.current) return;

    const items = menuRef.current.querySelectorAll("li");
    const buttons = buttonsRef.current.querySelectorAll("a");

    if (menuOpen) {
      const tl = gsap.timeline({ delay: 1 });

      // animate menu items
      tl.fromTo(
        items,
        {
          opacity: 0,
          yPercent: -10
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: "expo.out"
        }
      )

        // animate buttons after menu items
        .fromTo(
          buttons,
          {
            opacity: 0,
            yPercent: -10
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "expo.out"
          },
          "-=1.2"
        );
    }
  }, [menuOpen]);
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
          <div className="res_navigation">
            <a className={`nav-toggle ${menuOpen ? "active" : ""}`} id="trigger-overlay" onClick={toggleMenu}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </a>
          </div>
          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <ul ref={menuRef}>
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
              <li>
                <Link href=" ">Contact Us</Link>
              </li>
              <li>
                <Link href=" ">T&Cs / Cookie Policy</Link>
              </li>
            </ul>
            <div className="mobile header-buttons" ref={buttonsRef}>
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
      </div>
    </header >
  );
}
