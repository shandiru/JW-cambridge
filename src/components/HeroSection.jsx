import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="hero">
      {/* Background Video */}
      <video
        src="/newhero.mp4"
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

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* Call Button (Red Solid) */}
            <a href="tel:+447491016816" className="w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 bg-[#E32C2C] text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition shadow-md">
                <span className="text-lg">Call </span>
                <FiPhone className="text-xl" />
                +44 7491 016816
              </button>
            </a>

            {/* WhatsApp Button (Blue Solid) */}
            <a
              href="https://wa.me/447491016816"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="flex items-center justify-center gap-2 bg-[#0078D6] text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-[#005fa3] transition shadow-md">
                <span className="text-lg">WhatsApp</span>
                <FaWhatsapp className="text-xl" />
              </button>
            </a>


          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FFFFFF] text-[#000000] shadow-lg py-10 -mt-12 w-[85%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto z-30 relative border border-[#B9BDC1]/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl items-center">
          {[
          [
              { value: "15+", label: "Years Mercedes Experience" },
              { value: "2,000+", label: "Mercedes Vehicles Serviced" },
              { value: "100%", label: "Mercedes-Focused Specialists" },
              { value: "1", label: "Purpose-Built Mercedes Workshop" }
            ]

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
