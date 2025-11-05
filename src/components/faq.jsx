"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  const accent = "#C0C0C0"; // Chrome Silver

  const faqs = [
    {
      q: "What areas do you cover?",
      a: "We’re based in Nottingham and cover the whole of Nottinghamshire and surrounding areas. Whether you’re at home, work, or a garage, our mobile auto electricians come directly to you for convenience and efficiency.",
    },
    {
      q: "What types of vehicles do you work on?",
      a: "We work on all makes and models, including modern vehicles with complex electrical systems. From BMW, Audi, and Mercedes to Ford, Volkswagen, and Japanese brands — we’ve got the expertise and diagnostic tools for every vehicle.",
    },
    {
      q: "What services do you provide?",
      a: "Our services include vehicle diagnostics, electrical repairs, retrofits, dashcam installations, key programming, and component protection removals. We handle everything from simple wiring faults to advanced system upgrades.",
    },
    {
      q: "Do I need to bring my car to a garage?",
      a: "No — that’s the benefit of choosing AutoPlus Nottingham. We’re fully mobile and come to you. If your repair requires specialist equipment or a ramp, we’ll arrange to use our own workshop facilities.",
    },
    {
      q: "Can you work with garages or car traders?",
      a: "Absolutely. We already work with garages, car dealerships, and motor traders across Nottinghamshire, providing electrical support, coding, and diagnostic assistance when needed.",
    },
    {
      q: "How long does a diagnostic or repair usually take?",
      a: "Most diagnostic checks take 30–60 minutes depending on the complexity of the fault. Repairs vary, but we always provide an estimated timeframe before starting work.",
    },
    {
      q: "Do you offer key programming or replacement keys?",
      a: "Yes — we provide key cutting and programming for all brands. Whether you’ve lost your key, need a spare, or want to replace a faulty one, we can help on-site.",
    },
    {
      q: "How can I book a visit?",
      a: "You can contact us via phone, WhatsApp, or our social media pages to arrange a booking. We’ll confirm a convenient time and send one of our mobile electricians to your location.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      id="faq"
      className="bg-[#000000] text-white font-inter py-16 sm:py-20 md:py-24 px-4 sm:px-8 border-t border-[#1A1A1A]"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto border border-[#1A1A1A] rounded-md overflow-hidden bg-[#0A0A0A] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="p-6 sm:p-8 md:p-10 border-b border-[#1A1A1A] text-center"
        >
          <p className="inline-block border border-[#C0C0C033] text-[11px] sm:text-xs tracking-[4px] uppercase px-4 sm:px-6 py-1 rounded-full text-[#C0C0C0] mb-4 sm:mb-6">
            FAQ
          </p>

          <h2
            data-aos="zoom-in"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-snug sm:leading-tight md:leading-[1.2] text-[#EAEAEA]"
          >
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#E0E0E0] to-[#A8A8A8] bg-clip-text text-transparent block sm:inline">
              Questions
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-[#AAAAAA] mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about our premium automotive electrical
            services across Nottinghamshire.
          </p>
        </div>

        {/* FAQ Two Columns */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="md:columns-2 border-t border-[#1A1A1A] gap-x-0"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
              onClick={() => toggle(i)}
              className={`break-inside-avoid border-b border-[#1A1A1A] p-5 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${
                openIndex === i
                  ? "bg-[#0E0E0E] shadow-[inset_0_0_30px_rgba(192,192,192,0.06)]"
                  : "hover:bg-[#111111]"
              }`}
            >
              {/* Question */}
              <div className="flex justify-between items-center select-none">
                <h3 className="text-base sm:text-lg md:text-lg font-medium text-[#EAEAEA] pr-4">
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#C0C0C0]"
                >
                  <Plus size={20} />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    data-aos="fade-in"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#AAAAAA] mt-3 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
