"use client";

import { useState, useRef, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
    title: string;
    content: ReactNode;
    number?: string;
    icon?: StaticImageData | string;
};

export default function FaqItem({ title, content, icon, number }: Props) {
    const [open, setOpen] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const toggleFaq = () => {
        const el = bodyRef.current;
        if (!el) return;

        if (open) {
            el.style.height = el.scrollHeight + "px";
            requestAnimationFrame(() => {
                el.style.height = "0px";
            });
        } else {
            el.style.height = el.scrollHeight + "px";
        }

        setOpen(!open);
    };

    return (
        <div className={`faq-item ${open ? "active" : ""}`}>
            <div className="faq-header" onClick={toggleFaq}>
                {icon && (
                    <div className="faq-icon">
                        <Image src={icon} alt={title} width={24} height={24} />
                    </div>
                )}
                <h4>{title}</h4>
                {number && <p className="number">{number}</p>}
            </div>

            <div ref={bodyRef} className="faq-body">
                <div className="faq-inner">{content}</div>
            </div>
        </div>
    );
}