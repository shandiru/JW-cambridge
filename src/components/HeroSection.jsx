"use client";

import React, { useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#e5e9ee] pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl text-center lg:text-left font-black leading-tight bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
                Crafting the Standard of

                {/* MOBILE ONLY VIDEO - Appears right after the first line */}
                <div className="block lg:hidden my-6 w-full overflow-hidden rounded-xl shadow-xl aspect-video relative border-2 border-gray-100">
                  <video
                    src="/newhero.mp4"
                    autoPlay
                    muted
                    loop
                    poster="/fall.png"
                    playsInline
                    className="object-cover absolute inset-0 h-full w-full"
                  />
                </div>

                <br className="hidden lg:block" />
                <span className="bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
                  Mercedes-Benz Luxury
                </span>
              </h1>

              <p className="text-xl text-center lg:text-left font-bold bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
                Expert Mechanics — Mercedes Specialists
              </p>
            </div>

            <p className="text-lg text-center lg:text-left leading-relaxed text-gray-700 ">
              Wherever you are in Cambridge and the surrounding area, JW Cambridge delivers
              dealership-level expertise from our fully equipped workshop. From general servicing
              to full diagnostics, our specialist technicians provide precision repairs using
              manufacturer-grade equipment—without the dealership hassle.
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center lg:justify-start flex-col sm:flex-row gap-4" data-aos="fade-up">
              <a
                href="tel:01223311711"
                className="inline-flex items-center justify-center gap-2 text-sm bg-[#0dc94b] text-white shadow h-12 rounded-md px-8 font-semibold transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
              >
                <FiPhone className="h-5 w-5" />
                Call 01223 311 711
              </a>

              <a
                href="https://wa.me/447491016816"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm border-2 border-[#0078D6] text-[#0078D6]  h-12 rounded-md px-8 font-semibold transition-all duration-300 hover:bg-[#0078D6] hover:text-white"
              >
                <FaWhatsapp className="h-5 w-5" />
                Message on WhatsApp
              </a>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 ">
              <div>
                <p className="text-2xl font-black text-[#0078D6]">15+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0078D6]">2,000+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Vehicles Serviced</p>
              </div>
            </div>
          </div>

          {/* DESKTOP VIDEO - Hidden on mobile screens */}
          <div className="hidden lg:block relative w-full" data-aos="fade-left">
            <div className="aspect-video sm:aspect-4/3 w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ">
              <video
                src="/newhero.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/fall.png"
                className="object-cover absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-[#0078D6]/10 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;