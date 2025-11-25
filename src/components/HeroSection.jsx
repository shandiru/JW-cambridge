import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const primary = "#B9BDC1"; 
  const secondary = "#FFFFFF"; 
  const accent = "#0078D6"; 

  return (
    <div className="bg-[#FFFFFF]" id="hero">
      {/* Hero Section */}
      <section className="bg-[#FFFFFF] text-[#000000] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 border-b border-[#B9BDC1]/40">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="text-xl md:text-3xl lg:text-4xl mt-10 font-extrabold leading-tight tracking-tight">
              Where Quality Meets the Open Road<br />
              <span className="bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
                Expert Mobile Mechanics - Mercedes Specialists
              </span>
            </h1>

            <p className="text-[#333333] max-w-md leading-relaxed">
              Wherever you are, JW Cambridge brings dealership-level expertise straight to your driveway. From general servicing to full Mercedes diagnostics, our fully equipped mobile vans deliver precision repairs without the workshop hassle.
            </p>

            <div className="flex items-center gap-5 pt-4">
              <a href="/#contact">
                <button
                  className="border-2 border-[#0078D6] text-[#0078D6] px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-[#0078D6] hover:text-white transition font-semibold"
                >
                  <span className="transition-transform duration-300 text-sm lg:text-base group-hover:-translate-x-1 group-active:-translate-x-1">
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

          {/* Right Side — VIDEO instead of Image */}
          <div className="relative" data-aos="fade-left">
            <video
              src="/heo.mp4"
              className="w-full h-auto mt-10 rounded-3xl shadow-[0_0_30px_rgba(0,120,214,0.15)] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-[#0078D6]/10 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FFFFFF] text-[#000000] shadow-lg py-10 -mt-12 w-[85%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto z-10 relative border border-[#B9BDC1]/40">
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
