"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import featuresTabData from "./featuresTabData";

export default function FeaturesScroll() {
  return (
    <div className="p-10">
        <StickyScroll content={featuresTabData} />
    </div>
  );
}
