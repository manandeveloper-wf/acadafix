"use client";

import Image from "next/image";
import Link from "next/link";
export default function PrecisionTechnologySection() {
    return (
        <section className="why_shared_service precision">
            <div className="container">
                <h3 className="center">Precision Technology for Education Pay Scales</h3>
                <p className="sub-text center">Education payroll isn't standard business payroll. We handle the "educational nuances" that trip up generic systems:</p>
                <div className="wrap">
                    <div className="single">
                        <p className="title">Term-Time Only (TTO) Calculations</p>
                        <p className="text">Automated pro-rata formulas that eliminate manual spreadsheet errors for support staff.</p>
                    </div>
                    <div className="single">
                        <p className="title">Back-Pay Management</p>
                        <p className="text">Effortlessly handle retrospective pay rises and increments across complex NJC and STPCD scales.</p>
                    </div>
                    <div className="single">
                        <p className="title">Integrated HR & Finance</p>
                        <p className="text">Sync data seamlessly with your existing MIS and accounting software (like SIMs, Arbor, Bromcom, Sage & PSF) to eliminate double entry.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}