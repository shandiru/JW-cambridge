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
      <section className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20">
        <div
          className="max-w-4xl w-full text-center space-y-4 sm:space-y-6"
          data-aos="fade-up"
        >
          {/* Heading - Improved mobile sizing */}
          <h1 className="text-2xl pt-7 sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white px-2">
            Crafting the Standard of Mercedes-Benz Luxury
            <br className="hidden sm:block" />
            <span className="block sm:inline"> </span>
            <span className="bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
              Expert Mechanics - Mercedes Specialists
            </span>
          </h1>

          {/* Description - Better mobile readability */}
          <p className="text-[#CCCCCC] max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2">
           Located in the heart of Cambridge, JW Cambridge provides dealership-level expertise directly to you. With official licenced Genuine Dealership level equipment and being fully qualified Diagnostic technician trained by Mercedes-Benz themselves, we are the expert. From general servicing to full Mercedes diagnostics, our fully equipped workshop delivers precision repairs with the personal touch.
          </p>

          {/* CTA Buttons - Stack on mobile, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4">
            {/* Call Button (Red Solid) */}
            <a href="tel:+447491016816" className="w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2 bg-[#E32C2C] text-white px-6 sm:px-8 py-3 sm:py-2.5 rounded-lg font-semibold hover:bg-red-700 transition shadow-md w-full sm:w-auto text-base sm:text-lg">
                <FiPhone className="text-lg sm:text-xl" />
                <span>Call +44 7491 016816</span>
              </button>
            </a>

            {/* WhatsApp Button (Blue Solid) */}
            <a
              href="https://wa.me/447491016816"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="flex items-center justify-center gap-2 bg-[#0078D6] text-white px-6 sm:px-8 py-3 sm:py-2.5 rounded-lg font-semibold hover:bg-[#005fa3] transition shadow-md w-full sm:w-auto text-base sm:text-lg">
                <FaWhatsapp className="text-lg sm:text-xl" />
                <span>Message on WhatsApp</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - Improved mobile layout */}
      <section className="bg-[#FFFFFF] text-[#000000] shadow-lg py-6 sm:py-8 -mt-8 sm:-mt-12 w-[90%] sm:w-[85%] px-4 sm:px-6 md:px-12 lg:px-20 rounded-xl sm:rounded-2xl max-w-5xl mx-auto z-30 relative border border-[#B9BDC1]/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl items-center">
          {[
            { value: "15+", label: "Years Mercedes Experience" },
            { value: "2,000+", label: "Mercedes Vehicles Serviced" },
            { value: "100%", label: "Mercedes-Focused Specialists" },
            { value: "1", label: "Purpose-Built Mercedes Workshop" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0078D6] mb-1 sm:mb-2">
                {stat.value}
              </h3>
              <p className="text-[#555555] uppercase tracking-wide text-xs sm:text-sm leading-tight">
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