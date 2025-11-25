"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  const primary = "#B9BDC1"; // metallic tone
  const accent = "#0078D6"; // brand blue

 const faqs = [
  {
    q: "Do you use genuine Mercedes-Benz diagnostic equipment?",
    a: "Yes. We use factory-grade Mercedes-Benz STAR diagnostics and OEM data, allowing us to read fault codes, perform adaptations, update software, and diagnose issues to the same standard as a main dealer.",
  },
  {
    q: "Will servicing my Mercedes with JW Cambridge keep my warranty valid?",
    a: "Absolutely. All servicing follows Mercedes-Benz manufacturer schedules, and we use genuine or OEM-approved parts, ensuring your warranty remains fully protected under UK law.",
  },
  {
    q: "Can you handle complex Mercedes electrical or ECU issues?",
    a: "Yes — this is one of our core specialties. We carry out ECU programming, control module replacements, SCN coding, electrical tracing, and software updates using the latest Mercedes dealer-level tools.",
  },
  {
    q: "Do you offer a pre-MOT check specifically for Mercedes models?",
    a: "Yes. We provide Mercedes-specific pre-MOT assessments, checking common failure points such as suspension components, emissions systems, sensors, and electrical modules. We can also arrange the MOT with our trusted subcontract partner.",
  },
  {
    q: "How do your Mercedes services compare to a main dealer?",
    a: "You receive the same diagnostic capability, same technical depth, and same calibration accuracy — but with lower labour costs, faster turnaround times, and direct communication with the specialist working on your vehicle.",
  },
  {
    q: "Can you investigate unusual noises, warning lights, or performance loss on my Mercedes?",
    a: "Yes. We specialise in fault investigation, including engine judder, gearbox issues, electrical warnings, and sensor faults. Our Mercedes STAR system helps us pinpoint the issue quickly and accurately.",
  },
  {
    q: "Do you provide software updates for Mercedes-Benz vehicles?",
    a: "Yes. We can update ECUs, gearboxes, steering modules, safety systems, infotainment units, and more — ensuring your Mercedes runs the latest approved software for optimal performance and reliability.",
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
      className="bg-[#FFFFFF] text-[#000000] font-inter py-16 sm:py-20 md:py-24 px-4 sm:px-8 border-t border-[#B9BDC1]/40"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto border border-[#B9BDC1]/40 rounded-md overflow-hidden bg-[#FFFFFF] shadow-[0_0_30px_rgba(0,0,0,0.05)]"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="p-6 sm:p-8 md:p-10 border-b border-[#B9BDC1]/30 text-center"
        >
          <p className="inline-block border border-[#0078D6]/40 text-[11px] sm:text-xs tracking-[4px] uppercase px-4 sm:px-6 py-1 rounded-full text-[#0078D6] mb-4 sm:mb-6">
            FAQ
          </p>

          <h2
            data-aos="zoom-in"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-snug sm:leading-tight md:leading-[1.2] text-[#000000]"
          >
            Mercedes Specialist{" "}
            <span className="bg-gradient-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent block sm:inline">
               FAQs
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-[#555555] mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
           Everything you need to know about our expert diagnostics, repairs, and servicing here in Cambridge
          </p>
        </div>

        {/* FAQ Two Columns */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="md:columns-2 border-t border-[#B9BDC1]/30 gap-x-0"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={100 + i * 50}
              onClick={() => toggle(i)}
              className={`break-inside-avoid border-b border-[#B9BDC1]/30 p-5 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${
                openIndex === i
                  ? "bg-[#F7FAFF] shadow-[inset_0_0_20px_rgba(0,120,214,0.1)]"
                  : "hover:bg-[#F9FAFC]"
              }`}
            >
              {/* Question */}
              <div className="flex justify-between items-center select-none">
                <h3
                  className={`text-base sm:text-lg md:text-lg font-medium pr-4 ${
                    openIndex === i ? "text-[#0078D6]" : "text-[#000000]"
                  }`}
                >
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-[#0078D6]`}
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
                    <p className="text-[#444444] mt-3 text-sm sm:text-base leading-relaxed">
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
