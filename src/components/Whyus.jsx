"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Zap,
  Users,
  Link2,
} from "lucide-react"; // icons – optional (replace with your SVGs if needed)

export default function WhyusSection() {
  const features = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Tailored Solutions",
      desc: "Tailored hiring solutions that fit your business perfectly.",
    },
    {
      id: 2,
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Faster Hiring",
      desc: "Streamlined hiring processes that cut hiring time by 30%.",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Access to Top Talent",
      desc: "Connect with highly qualified candidates across industries.",
    },
    {
      id: 4,
      icon: <Link2 className="w-6 h-6 text-white" />,
      title: "Effortless Integration",
      desc: "Seamlessly integrate with your HR tools for effortless hiring.",
    },
  ];

  return (
    <section className="relative bg-[#F9FAF9] overflow-hidden py-20 px-6 md:px-12">
      {/* 🌿 Background Curve */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 w-full h-[500px] bg-linear-to-tr from-[#EAF1EE] via-[#F9FAF9] to-transparent rounded-t-[100px]" />
      </div>

      {/* 🧩 Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 w-12 h-12 rounded-2xl bg-[#1F514C]/10 flex items-center justify-center"
        >
          <img
            src="https://framerusercontent.com/images/vcJ3OQtmtbaX89QtoWA8xXSnyqI.svg"
            alt="HR Pro Icon"
            className="w-7 h-7"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-[#1F514C] leading-snug"
        >
          Platform designed to simplify and enhance the hiring process.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#777272] mt-4 max-w-2xl mx-auto text-base md:text-lg"
        >
          With personalized solutions tailored to your business needs, we connect you
          with the best talent quickly and efficiently, helping you build stronger,
          more effective teams.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="inline-flex items-center gap-2 mt-8  group duration-300 bg-[#1F514C] text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#25675F] transition-all"
        >
          About HR Pro
          <img
            src="https://framerusercontent.com/images/KOh2aW7z2qWOewMCDslShqhIps.svg"
            alt="Arrow Icon"
            className="w-4 h-4"
          />
        </motion.a>
      </motion.div>

      {/* 🌿 Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
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
            transition={{ duration: 0.6 }}
            className="bg-linear-to-b from-white to-[#FFFFFF00] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)] border border-[#E9EAEA] transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-[#1F514C] flex items-center justify-center border-2 border-white/20 mb-4">
              {feature.icon}
            </div>
            {/* Title */}
            <h5 className="text-[#1F514C] text-lg font-semibold mb-2">
              {feature.title}
            </h5>
            {/* Description */}
            <p className="text-[#777272] text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}