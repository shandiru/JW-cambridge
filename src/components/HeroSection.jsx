import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const accent = "#C0C0C0"; // Chrome silver
  const hoverAccent = "#F5F5F5"; // White reflection tone

  return (
    <div className="bg-black" id="hero">
      {/* Hero Section */}
      <section className="bg-[#0A0A0A] text-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 border-b border-[#1A1A1A]">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="text-2xl md:text-4xl lg:text-5xl mt-10 font-extrabold leading-tight tracking-tight">
              Where Quality Meets the Open Road<br />
              <span className="bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] bg-clip-text text-transparent">
                Expert Mobile Mechanics
              </span>
            </h1>

            <p className="text-[#BBBBBB] max-w-md leading-relaxed">
              Wherever you are, JW Cambridge brings the garage to you. From oil changes to engine diagnostics, our fully equipped vans ensure your vehicle runs perfectly — without visiting a workshop.
            </p>

            <div className="flex items-center gap-5 pt-4">
              <a href="/#contact">
                <button
                  className="border-2 border-[#C0C0C0] text-white px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-[#C0C0C0] hover:text-black transition font-semibold"
                >
                  <span className="transition-transform duration-300 text-sm lg:text-base group-hover:-translate-x-1 group-active:-translate-x-1">
                    Book Your Mobile Service
                  </span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 mt-1" />
                </button>
              </a>

              <button className="w-14 h-14 rounded-full border-2 border-[#555555] flex items-center justify-center hover:border-[#C0C0C0] transition">
                <FiPlay className="text-2xl text-[#C0C0C0]" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="fade-left">
            <img
              src="image.png"
              alt="Car Service"
              className="w-full h-auto mt-10 rounded-3xl shadow-[0_0_30px_rgba(192,192,192,0.15)] object-cover"
            />
            {/* Chrome glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F9F9F9] text-[#1A1A1A] shadow-lg py-10 -mt-12 w-[85%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto z-10 relative border border-[#E0E0E0]/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl items-center">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7A7A7A]">3+</h3>
            <p className="text-[#7A7A7A] uppercase tracking-wide text-sm">Cities Covered</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7A7A7A]">1000+</h3>
            <p className="text-[#7A7A7A] uppercase tracking-wide text-sm">Cars Helped</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7A7A7A]">40+</h3>
            <p className="text-[#7A7A7A] uppercase tracking-wide text-sm">Mile Radius</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7A7A7A]">5+</h3>
            <p className="text-[#7A7A7A] uppercase tracking-wide text-sm">Counties Covered</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
