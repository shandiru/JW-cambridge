"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Award } from "lucide-react"; // or use a simple SVG
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
            <h3 className="text-[#FFFFFF] text-lg font-semibold">Jake Williams</h3>
            <p className="text-sm bg-clip-text text-transparent bg-linear-to-r from-[#0078D6] to-[#B9BDC1]">
              Offically Mercedes Trained & Qualified <br />  Mercedes Benz Technician Owner
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
            Expert Mercedes-Benz Care, Trusted Servicing for All Vehicles
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

          <div className="flex flex-col gap-6">
            {/* Buttons Container */}
            <motion.div className="flex gap-4">
              <motion.a
                variants={fadeUp}
                href="#service"
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

            {/* New Authorization Text */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-[#0078D6]"
            >
              <Award size={20} className="text-[#0078D6]" />
              <span className="text-sm md:text-base font-semibold tracking-tight">
                Mercedes Benz Authorised Independent Service Provider
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* METRICS GRID */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-24 grid sm:grid-cols-2 gap-8 text-center max-w-5xl mx-auto"
      >
        {[
          {
            title: "Mercedes-Benz Service A",
            subtitle: "Minor Service",
            price: "£249 + VAT",
          },
          {
            title: "Mercedes-Benz Service B",
            subtitle: "Major Service",
            price: "£349 + VAT",
          },
        ].map(({ title, subtitle, price }, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.02,
              borderColor: "#0078D6",
            }}
            whileTap={{
              y: -8,
              scale: 1.02,
              borderColor: "#0078D6",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-12 border border-[#B9BDC1]/60 rounded-2xl bg-[#F9F9F9]/50 cursor-pointer flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-lg font-medium text-[#0078D6] mb-4">
              {subtitle}
            </p>
            <p className="text-3xl font-semibold text-gray-800">
              From <span className="text-[#0078D6]">{price}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
