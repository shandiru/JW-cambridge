"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
];

// reusable scrolling logo strip
const LogoStrip = ({ direction = "left" }) => {
  return (
    <div className="overflow-hidden w-1/3 sm:w-1/4 lg:w-1/5 flex items-center justify-center">
      <motion.div
        className="flex gap-10"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="brand logo"
            className="w-24 sm:w-28 md:w-32 lg:w-40 opacity-90"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function LogoShowcase() {
  return (
    <section className="relative bg-[#D70C09] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Rotating 3D Shape */}
      <motion.img
        src="/image.svg"
        alt="background pattern"
        className="absolute w-[300px] opacity-20 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Content Grid */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl px-6 gap-6">
        {/* Left Scrolling Logos */}
        <LogoStrip direction="left" />

        {/* Center Text */}
        <div className="flex flex-col items-center text-center flex-1">
          <h2 className="text-black text-xl font-semibold tracking-[0.2em] uppercase">
            You've chosen the best
          </h2>
        </div>

        {/* Right Scrolling Logos */}
        <LogoStrip direction="right" />
      </div>
    </section>
  );
}
