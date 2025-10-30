"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AutoPlusTestimonial() {
  const accent = "#C0C0C0"; // Chrome silver

  const testimonials = [
    {
      name: "Mason Wright",
      role: "Customer from Nottingham",
      text: "Exceptional and speedy service with honest prices, would absolutely recommend.",
      img: "m.png",
    },
    {
      name: "Simon Andreou",
      role: "Customer from Nottingham",
      text: "Excellent service with reasonable prices. Recommended.",
      img: "s.png",
    },
    {
      name: "Hannah S.",
      role: "Customer from Nottingham",
      text: "Fantastic trustworthy angels run this place. Have used them for years and they have never let me down. Best on service, price, and advice.",
      img: "im.png",
    },
    {
      name: "Ibbie Hart",
      role: "Customer from Nottingham",
      text: "Honourable garage. Kind and friendly, quick service. As a woman on her own I always feel safe here. Genuine, honest, and dependable.",
      img: "i.png",
    },
    {
      name: "Oliver S.",
      role: "Customer from Nottingham",
      text: "Another garage told me I needed new pads and discs. Took it here, and they said I still had 20K miles left — even showed me the brakes. Honest team.",
      img: "im2.png",
    },
    {
      name: "Sarah Thackray",
      role: "Customer from Nottingham",
      text: "Knows his stuff and will do his best for you at a very reasonable price.",
      img: "s.png",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  // ✅ Typewriter effect
  useEffect(() => {
    let i = 0;
    const text = String(t.text || "");
    setTypedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (i < text.length && typeof text[i] === "string") {
        setTypedText((prev) => prev + text[i - 1]);
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [index, t.text]);

  return (
    <section
      className="bg-[#000000] text-white font-inter py-20 md:py-24 px-4 sm:px-6 overflow-hidden border-t border-[#1A1A1A]"
      id="review"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto border border-[#1A1A1A] bg-[#0A0A0A] rounded-md overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="text-center py-10 sm:py-12 border-b border-[#1A1A1A] px-4"
        >
          <p className="inline-block border border-[#C0C0C033] text-xs tracking-[4px] uppercase px-6 py-1 rounded-full text-[#C0C0C0] mb-6">
            Reviews
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-[#EAEAEA]">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="text-[#AAAAAA] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Genuine feedback from satisfied customers across Nottinghamshire who
            trust AutoPlus for professional diagnostics, maintenance, and service
            excellence.
          </p>
        </div>

        {/* Main Section */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row overflow-hidden"
        >
          {/* LEFT SIDE */}
          <div className="flex-1 p-8 sm:p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#0A0A0A]/60 [background-image:radial-gradient(900px_700px_at_20%_20%,rgba(192,192,192,0.08),transparent_70%)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col h-auto"
              >
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="relative">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div
                      className="absolute -right-3 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: accent }}
                    >
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-black/70 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#E0E0E0] mb-8 sm:mb-10">
                  {typedText}
                  {isTyping && (
                    <span className="animate-pulse text-[#C0C0C0]">|</span>
                  )}
                </p>

                {/* Name + Role */}
                <div className="mt-auto">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-[#888888] text-sm sm:text-base">{t.role}</p>
                </div>

                {/* Counter */}
                <p className="mt-4 text-[#666666] text-xs sm:text-sm tracking-wide">
                  {index + 1}/{testimonials.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-[320px] flex flex-col justify-end bg-[#0A0A0A] border-t md:border-t-0 border-l border-[#1A1A1A]">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="flex items-center gap-1 justify-start px-8 py-5 border-b border-t border-[#1A1A1A] hover:text-[#C0C0C0] transition-colors"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex items-center gap-1 justify-end px-8 py-5 hover:text-[#C0C0C0] transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
