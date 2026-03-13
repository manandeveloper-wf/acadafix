"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initGSAPAnimations() {

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".section").forEach(section => {

        section.querySelectorAll(".parallax-img").forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true
                },
                y: -100,
                ease: "none"
            });
        });

        section.querySelectorAll(".move-top").forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1,
                    invalidateOnRefresh: true
                },
                y: -30,
                ease: "none"
            });
        });

        section.querySelectorAll(".move-bottom").forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1,
                    invalidateOnRefresh: true
                },
                y: 30,
                ease: "none"
            });
        });

    });

    document.querySelectorAll(".gsap-text").forEach(textBlock => {

        let words = textBlock.innerText.split(" ");
        textBlock.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(" ");

        gsap.to(textBlock.querySelectorAll(".word"), {
            scrollTrigger: {
                trigger: textBlock,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
            },
            opacity: 1,
            stagger: 0.1,
            ease: "none"
        });

    });

    document.querySelectorAll(".text-reveal").forEach(txt => {
        gsap.to(txt, {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1.3,
            scrollTrigger: {
                trigger: txt,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    document.querySelectorAll(".clip-reveal img").forEach(img => {
        gsap.to(img, {
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1.2,
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }); 

}