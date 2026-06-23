"use client";

import React, { useEffect, useRef } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HERO_VIDEO_SRC = "/newhero.mp4";

const HeroSection = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const videos = videoRefs.current.filter(Boolean);
    const cleanupFns = [];

    videos.forEach((video) => {
      const tryPlay = () => {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise?.catch) {
          playPromise.catch(() => {});
        }
      };

      tryPlay();
      video.addEventListener("canplay", tryPlay);
      cleanupFns.push(() => video.removeEventListener("canplay", tryPlay));
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#e5e9ee] pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 xl:gap-10 items-center lg:items-stretch">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-[2.45rem] xl:text-[3.6rem] text-center lg:text-left font-black leading-[1.05] text-[#0078D6]">
                Maintaining the Standard of

                {/* MOBILE ONLY VIDEO - Appears right after the first line */}
                <div className="block lg:hidden my-5 w-full min-h-[280px] overflow-hidden rounded-2xl shadow-xl relative border-2 border-gray-100">
                  <video
                    ref={(el) => {
                      videoRefs.current[0] = el;
                    }}
                    src={HERO_VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    poster="/fall.png"
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full bg-black object-contain"
                  />
                </div>

                <br className="hidden lg:block" />
                <span className="text-[#0078D6]">
                  Mercedes-Benz Luxury
                </span>
              </h1>

              <p className="text-xl text-center lg:text-left font-bold text-[#0078D6]">
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
          <div className="hidden lg:block relative w-full h-full" data-aos="fade-left">
            <div className="w-full h-full min-h-[520px] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <video
                ref={(el) => {
                  videoRefs.current[1] = el;
                }}
                src={HERO_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                poster="/fall.png"
                preload="auto"
                className="absolute inset-0 h-full w-full bg-black object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
