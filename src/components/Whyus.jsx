"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Zap, Star, Link as LinkIcon } from "lucide-react";

export default function WhyusSection() {
  const features = [
    {
      id: 1,
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: "Tailored Services",
      desc: "From general maintenance to advanced Mercedes diagnostics — fully customised for your vehicle.",
    },
    {
      id: 2,
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Fast, Reliable Support",
      desc: "On-site servicing that eliminates garage visits and keeps your day running smoothly.",
    },
    {
      id: 3,
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Mercedes Specialists",
      desc: "Dealership-grade diagnostics, software updates, and control module replacements.",
    },
    {
      id: 4,
      icon: <LinkIcon className="w-6 h-6 text-white" />,
      title: "Seamless Experience",
      desc: "Easy booking, clear communication, and instant WhatsApp support.",
    },
  ];

  return (
    <section className="relative bg-[#FFFFFF] overflow-hidden py-20 px-6 md:px-12">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-tr from-[#B9BDC1]/30 via-[#FFFFFF] to-transparent rounded-t-[100px]" />
      </div>

      {/* Section Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Small Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 w-12 h-12 rounded-2xl bg-[#0078D6]/10 flex items-center justify-center"
        >
          <img
            src="https://framerusercontent.com/images/vcJ3OQtmtbaX89QtoWA8xXSnyqI.svg"
            alt="Icon"
            className="w-7 h-7"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-[#0078D6] leading-snug"
        >
          Why Choose JW Cambridge
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#555555] mt-4 max-w-2xl mx-auto text-base md:text-lg"
        >
          Experience Cambridge’s premium Mercedes specialists, combining advanced diagnostics, meticulous craftsmanship, and uncompromising quality for every vehicle we care for.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="inline-flex items-center gap-2 mt-8 group duration-300 bg-[#0078D6] text-white font-semibold px-7 py-3 rounded-full shadow-md hover:bg-[#0063b4] transition-all"
        >
          <span className="relative flex items-center justify-center overflow-hidden">
            <p className="absolute transform transition-all duration-300 group-hover:-translate-y-8 opacity-100">
              Contact Us
            </p>
            <p className="absolute transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              WhatsApp Us
            </p>
          </span>
          <img
            src="https://framerusercontent.com/images/KOh2aW7z2qWOewMCDslShqhIps.svg"
            alt="Arrow Icon"
            className="w-4 h-4 ml-1"
          />
        </motion.a>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.2 }}
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
            className="bg-gradient-to-b from-[#FFFFFF] to-[#F5F7FA] rounded-2xl p-6 border border-[#B9BDC1]/50 transition-all duration-300 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-[#0078D6] flex items-center justify-center border-2 border-[#FFFFFF]/30 mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h5 className="text-[#0078D6] text-lg font-semibold mb-2">
              {feature.title}
            </h5>

            {/* Description */}
            <p className="text-[#555555] text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
