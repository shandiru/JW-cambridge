"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Award } from "lucide-react";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
      <div className="flex justify-center items-center">
        <p className="inline-block border  border-[#B9BDC1]/50 text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#0078D6] mb-6">
          About
        </p>
      </div>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-bold leading-tight text-center mb-5 bg-clip-text text-transparent bg-linear-to-r from-[#0078D6] to-[#B9BDC1]"
      >
        Mercedes-Benz Specialists in Cambridge – Dealer-Level Diagnostics with Personal Service
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN: Heading + Original Profile Card */}
        <div className="flex flex-col gap-10">
          {/* Main Heading Moved to Left */}

          {/* LEFT: Profile Card (Original Design Restored) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative bg-[#F9F9F9]/80 border border-[#B9BDC1]/60 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)]"
          >
            <div className="relative w-full">
              <img
                src="aboutimage.jpeg"
                alt="Jake Williams"
                className="w-full h-full rounded-2xl"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-2xl backdrop-blur-[3px] bg-linear-to-t from-[#000000]/80 to-transparent">
              <h3 className="text-[#FFFFFF] text-lg font-semibold">Jake Williams</h3>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-black">
                    Offically Mercedes Trained & Qualified
                  </p>
                  <Award size={20} className="text-[#0078D6] shrink-0" />
                </div>
                <p className="text-sm font-medium text-black">
                  Mercedes Benz Technician Owner
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                {[
                  { Icon: FaInstagram, href: "https://instagram.com", external: true },
                  {
                    Icon: FaPhoneAlt,
                    href: "tel:+447491016816",
                    external: false,
                  },
                ].map(({ Icon, href, external }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="p-2 rounded-lg border border-[#B9BDC1]/40 hover:bg-[#0078D6]/10 transition"
                    aria-label="Contact"
                  >
                    <Icon className="text-[#0078D6]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Text Content (Remaining as is) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >


          <motion.p
            variants={fadeUp}
            className="text-[#444444] leading-relaxed mb-6"
          >
            JW Cambridge is an independent Mercedes-Benz specialist based in Cambridge, run by an officially trained and qualified Mercedes-Benz technician. We use genuine Mercedes licences, the authorised Mercedes Xentry Diagnostic system, and have full access to the Mercedes Digital Service Book (DSB), allowing us to carry out manufacturer-level Mercedes servicing, diagnostics, and repairs.
          </motion.p>


          <motion.p
            variants={fadeUp}
            className="text-[#444444] leading-relaxed mb-6"
          >
            We specialise in Mercedes-Benz vehicles of all models and ages, offering expert Mercedes servicing in Cambridge, advanced Mercedes diagnostics, electrical fault finding, and specialist Mercedes repairs. From routine Mercedes maintenance and A & B servicing to complex warning lights, ECU faults, and drivability issues, your car is worked on using the same systems as a main dealer – without the dealership experience.
          </motion.p>

          <div className="flex flex-col gap-6 mt-10">
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
            whileHover={{ y: -8, scale: 1.02, borderColor: "#0078D6" }}
            className="p-12 border border-[#B9BDC1]/60 rounded-2xl bg-[#F9F9F9]/50 cursor-pointer flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-lg font-medium text-[#0078D6] mb-4">{subtitle}</p>
            <p className="text-3xl font-semibold text-gray-800">
              From <span className="text-[#0078D6]">{price}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}