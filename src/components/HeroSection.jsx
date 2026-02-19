import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Ensure correct import path for your icons

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" id="hero">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/fall.png"
          src="/newhero.mp4"
        >
          <source src="/newhero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Main Layout Wrapper */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center">
        
        {/* HERO CONTENT - Left Aligned Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 w-full">
          <div className="max-w-4xl" data-aos="fade-up">
            
            {/* Heading with Responsive Scaling */}
            <h1 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[68px] leading-[1.1] font-extrabold text-white mb-6">
              Crafting the Standard of 
              <br />
              <span className="bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
                Mercedes-Benz Luxury
              </span>
            </h1>

            {/* Sub-heading */}
            <h2 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-bold text-white mb-5 sm:mb-6">
              Expert Mechanics & Mercedes Specialists
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Wherever you are in Cambridge, JW Cambridge delivers dealership-level expertise 
              from our fully equipped workshop. From general servicing to full diagnostics, 
              our technicians provide precision repairs using manufacturer-grade equipment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6">
              <a
                href="tel:01223311711"
                className="bg-[#E32C2C] hover:bg-white hover:text-black text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm text-center"
              >
                <FiPhone className="text-lg" />
                Call 01223 311 711
              </a>

              <a
                href="https://wa.me/447491016816"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#0078D6] text-white hover:bg-[#0078D6] font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-xs sm:text-sm text-center"
              >
                <FaWhatsapp className="text-lg" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* STATS SECTION - Positioned at the bottom of the hero area */}
        <div className="w-full px-4 pb-12">
          <div className="bg-white/95 backdrop-blur-sm text-black shadow-2xl py-8 px-6 rounded-2xl max-w-6xl mx-auto border border-gray-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "15+", label: "Years Mercedes Experience" },
                { value: "2,000+", label: "Vehicles Serviced" },
                { value: "100%", label: "Mercedes Specialists" },
                { value: "1", label: "Purpose-Built Workshop" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <h3 className="text-xl sm:text-3xl font-bold text-[#0078D6] mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 uppercase tracking-wide text-[10px] sm:text-xs font-semibold leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;