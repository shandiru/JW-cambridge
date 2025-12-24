import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="hero">
      {/* Background Video */}
      <video
        src="/bg-video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Section Content */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div
          className="max-w-4xl w-full text-center space-y-6"
          data-aos="fade-up"
        >
          <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
            Where Quality Meets the Open Road<br />
            <span className="bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
              Expert Mobile Mechanics - Mercedes Specialists
            </span>
          </h1>

          <p className="text-[#CCCCCC] max-w-2xl mx-auto text-xl leading-relaxed">
            Wherever you are, JW Cambridge brings dealership-level expertise
            straight to your driveway. From general servicing to full Mercedes
            diagnostics, our fully equipped mobile vans deliver precision
            repairs without the workshop hassle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <a href="/#contact">
              <button className="border-2 border-[#0078D6] text-[#0078D6] px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-[#0078D6] hover:text-white transition font-semibold">
                <span className="transition-transform duration-300 text-sm lg:text-2xl group-hover:-translate-x-1 group-active:-translate-x-1">
                  Book Your Mobile Service
                </span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 mt-1" />
              </button>
            </a>

            <button className="w-14 h-14 rounded-full border-2 border-[#B9BDC1] flex items-center justify-center hover:border-[#0078D6] transition">
              <FiPlay className="text-2xl text-[#0078D6]" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FFFFFF] text-[#000000] shadow-lg py-10 -mt-12 w-[85%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto z-30 relative border border-[#B9BDC1]/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl items-center">
          {[
            { value: "3+", label: "Cities Covered" },
            { value: "1000+", label: "Cars Helped" },
            { value: "40+", label: "Mile Radius" },
            { value: "5+", label: "Counties Covered" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0078D6]">
                {stat.value}
              </h3>
              <p className="text-[#555555] uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
