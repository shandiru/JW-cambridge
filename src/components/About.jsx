"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedCounter({ to = 0, suffix = "" }) {
  const ref = useRef(null);
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
          observer.disconnect();
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mv, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#FFFFFF] text-[#000000] py-24 px-6 md:px-12 lg:px-24 font-[Inter] overflow-hidden"
    >
      {/* Subtle glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,120,214,0.15), rgba(0,0,0,0))",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Profile Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative bg-[#F9F9F9]/80 border border-[#B9BDC1]/60 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)]"
        >
          <div className="relative w-full aspect-square">
            <img
              src="https://framerusercontent.com/images/segnJi5cGsCMhvZ3MZQnn4lCk5w.png"
              alt="David Smith"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-2xl backdrop-blur-[3px] bg-linear-to-t from-[#000000]/80 to-transparent">
            <h3 className="text-[#FFFFFF] text-lg font-semibold">David Smith</h3>
            <p className="text-sm bg-clip-text text-transparent bg-linear-to-r from-[#0078D6] to-[#B9BDC1]">
              AI Expert & Advisor
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[
                { Icon: FaXTwitter, href: "https://x.com/" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
                { Icon: FaInstagram, href: "https://instagram.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border border-[#B9BDC1]/40 hover:bg-[#0078D6]/10 transition"
                >
                  <Icon className="text-[#0078D6]" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm text-[#333333] bg-clip-text bg-linear-to-r from-[#0078D6] to-[#B9BDC1] mb-2"
          >
            // About Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-linear-to-r from-[#0078D6] to-[#B9BDC1] mb-6"
          >
            Precision Automotive Care, Delivered to Your Doorstep
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#444444] leading-relaxed mb-2"
          >
            With years of hands-on experience and a passion for premium car care, JW Cambridge provides reliable, professional, and honest mechanical services throughout Cambridge and surrounding areas.
          </motion.p>
            <motion.p
            variants={fadeUp}
            className="text-[#444444] leading-relaxed mb-10"
          >
           Whether it’s routine maintenance, complex diagnostics, or specialised Mercedes repairs, we offer high-quality workmanship backed by transparent communication and real expertise.
          </motion.p>

          <motion.div className="flex gap-4">
            <motion.a
              variants={fadeUp}
              href="#process"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-6 py-3 rounded-lg bg-[#0078D6] text-white hover:bg-[#0063b4] font-medium transition"
            >
              Our Process
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-6 py-3 rounded-lg border border-[#B9BDC1]/60 text-[#0078D6] hover:bg-[#0078D6] hover:text-white font-medium transition"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* METRICS GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto"
      >
        {[
          { to: 100, suffix: "%", label: "Client Satisfaction" },
          { to: 55, suffix: "+", label: "Satisfied Clients" },
          { to: 10, suffix: "+", label: "Years of Experience" },
          { to: 80, suffix: "+", label: "Industry Recognition" },
        ].map(({ to, suffix, label }, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-8 border border-[#B9BDC1]/60 rounded-2xl bg-[#F9F9F9]/50 shadow-[0_0_20px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-4xl font-semibold text-[#0078D6] mb-1">
              <AnimatedCounter to={to} suffix={suffix} />
            </h3>
            <p className="text-sm uppercase bg-clip-text text-transparent bg-linear-to-r from-[#0078D6] to-[#B9BDC1] tracking-wide">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
