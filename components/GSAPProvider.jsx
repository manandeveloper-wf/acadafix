"use client";

import { useEffect } from "react";
import { initGSAPAnimations } from "@/lib/gsapAnimations";

export default function GSAPProvider({ children }) {

    useEffect(() => {
        initGSAPAnimations();
    }, []);

    return children;
}