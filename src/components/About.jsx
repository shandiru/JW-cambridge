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

  // 👇 IntersectionObserver for visibility detection
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
          observer.disconnect(); // Stop observing once started
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
      className="relative min-h-screen bg-[#0B0F0B] text-gray-200 py-24 px-6 md:px-12 lg:px-24 font-[Inter] overflow-hidden"
    >
      {/* subtle glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-linear(closest-side, rgba(213,253,201,0.15), rgba(0,0,0,0))",
        }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Profile Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative bg-[#101510]/80 border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.35)]"
        >
          <div className="relative w-full aspect-square">
            <img
              src="https://framerusercontent.com/images/segnJi5cGsCMhvZ3MZQnn4lCk5w.png"
              alt="David Smith"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-2xl backdrop-blur-[2px] bg-linear-to-t from-black/80 to-transparent">
            <h3 className="text-white text-lg font-semibold">David Smith</h3>
            <p className="text-sm bg-clip-text text-transparent bg-linear-to-r from-[#D5FDC9] to-[#C9C9C9]">
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
                  className="p-2 rounded-lg border border-white/10 hover:bg-[#D5FDC9]/10 transition"
                >
                  <Icon className="text-[#D5FDC9]" />
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
            className="text-sm text-[#D1D1D1] bg-clip-text bg-linear-to-r from-[#D5FDC9] to-[#C9C9C9] mb-2"
          >
            // About me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-linear-to-r from-[#D5FDC9] to-[#C9C9C9] mb-6"
          >
            AI experiences that solve real problems
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#D1D1D1] leading-relaxed mb-10"
          >
            With 8+ years and 50+ delivered projects, I build reliable
            implementations on your existing stack with a studio-grade look and
            tight performance. I work close to the business, value clear
            communication, and optimize for impact.
          </motion.p>

          <motion.div className="flex gap-4">
            <motion.a
              variants={fadeUp}
              href="#process"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-6 py-3 rounded-lg bg-[#123624] border border-white/10 hover:bg-[#1A452C] text-[#D5FDC9] font-medium transition"
            >
              My process
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="px-6 py-3 rounded-lg bg-[#0B0F0B] border border-white/10 hover:bg-[#101510] text-[#D5FDC9] font-medium transition"
            >
              Contact me
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
            className="p-8 border border-white/10 rounded-2xl bg-white/3"
          >
            <h3 className="text-4xl font-semibold text-white mb-1">
              <AnimatedCounter to={to} suffix={suffix} />
            </h3>
            <p className="text-sm uppercase bg-clip-text text-transparent bg-linear-to-r from-[#D5FDC9] to-[#C9C9C9] tracking-wide">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}