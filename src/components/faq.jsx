"use client";
import React, { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "HOW LONG WILL IT TAKE TO FIX MY CAR?",
    answer:
      "Repair times depend on the issue and parts availability. Most services are completed within 1–3 days, while complex repairs or restorations may take longer.",
  },
  {
    question: "DO I NEED TO MAKE AN APPOINTMENT?",
    answer:
      "Yes, we recommend scheduling an appointment to ensure prompt service and availability of our specialists.",
  },
  {
    question: "DO YOU HAVE A WARRANTY?",
    answer:
      "Absolutely. We offer a comprehensive service warranty on all repairs, covering both labor and replacement parts.",
  },
  {
    question: "DO YOU DO COMPLETE AUTO RESTORATIONS?",
    answer:
      "Yes! Our team specializes in full restorations — from classic models to modern vehicles, including paint, bodywork, and mechanical rebuilds.",
  },
  {
    question: "CAN YOU DO A FULL TECHNICAL INSPECTION OF THE CAR?",
    answer:
      "Yes, we provide full diagnostic and safety inspections using advanced tools to ensure your vehicle is in top condition.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#000000] text-white py-24 px-6 md:px-12 font-['Orbitron',sans-serif]"
    >
      {/* 🔥 Red Gradient Glow (Same as Testimonials Section) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start z-10"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div data-aos="fade-right">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">
            <span className="text-white">FAQ’S & </span>
            <span className="text-[#D70C09]">NEWS</span>
          </h2>

          <p className="text-[#868386] text-[17px] leading-relaxed mb-10 max-w-lg">
            At <span className="text-[#D70C09] font-semibold">Ovi Car Body Repair</span>,
            customer satisfaction drives our reputation. We combine experience,
            precision, and care to deliver high-quality results — every time.
          </p>

          <div
            className="rounded-xl overflow-hidden shadow-lg border border-[#1C1C1C]"
            data-aos="zoom-in"
          >
            <img
              src="im1.jpeg"
              alt="Car Workshop"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        {/* Right Section (FAQs) */}
        <div className="space-y-6" data-aos="fade-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-[#1C1C1C] pb-5"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <button
                className="w-full flex justify-between items-center text-left group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3
                  className={`text-xl md:text-2xl font-bold tracking-wide uppercase transition-colors ${
                    openIndex === i
                      ? "text-[#D70C09]"
                      : "text-white group-hover:text-[#D70C09]"
                  }`}
                >
                  {faq.question}
                </h3>
                <IoChevronDownOutline
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-[#D70C09]" : "text-white"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#868386] text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge Fades for Smooth Depth */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none"></div>
    </section>
  );
}
