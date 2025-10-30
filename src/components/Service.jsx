"use client";
import React, { useState } from "react";

const services = [
  { id: 1, title: "Panel Beating", subtitle: "Bodywork Restoration", image: "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65266060443e8ae4314a52c9_6.png" },
  { id: 2, title: "Paint Resprays", subtitle: "Blowtherm Technology", image: "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65266025912cc5f97c875c6d_5.png" },
  { id: 3, title: "Dent & Scratch Repair", subtitle: "24-Hour Turnaround", image: "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265ffe92e9f9d8d97cfd4b_4.png" },
  { id: 4, title: "Accident Repairs", subtitle: "Minor to Major Damage", image: "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265fd712c46c5ddd18f7e5_3.png" },
  { id: 5, title: "Insurance Jobs", subtitle: "Claim Support", image: "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265fa40e7a6705c7ef53d4_2.png" },
  { id: 6, title: "Detailing", subtitle: "Polish & Finishing", image: "https://cdn.prod.website-files.com/651fcaf09f0ed92a42afe0e1/65265f40416728f696f95a6e_1.png" },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative bg-[#000000] py-16 px-6 md:px-12 font-['Orbitron',sans-serif] text-white" id="service">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* ✅ Grid layout wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
        {/* Left content (Sticky only on desktop/tablet) */}
        <div className="self-start lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase">
            Ovi Car Body Repair{" "}
            <span className="text-[#D70C09]">Since 2012</span>
          </h2>
          <p className="mt-4 text-[#868386] max-w-md leading-relaxed text-sm sm:text-base">
            With over 28 years of experience, we provide high-quality repairs,
            resprays, and dent removal with unmatched precision and fast
            turnaround — trusted by Sheffield drivers for reliability and
            excellence.
          </p>
          <button className="mt-8 bg-[#D70C09] text-white font-bold px-6 py-3 rounded-md uppercase hover:bg-[#868386] transition-all text-sm sm:text-base">
            Read More
          </button>
        </div>

        {/* Right Services List */}
        <div className="flex flex-col gap-8 relative">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center transition-all duration-300 ease-out border-b border-[#1C1C1C] pb-6"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Text */}
              <div>
                <h3
                  className={`text-[20px] sm:text-[22px] md:text-[24px] font-bold uppercase tracking-wide transition-colors duration-300 ${
                    hoveredId === service.id ? "text-[#D70C09]" : "text-white"
                  }`}
                >
                  <span
                    className={`mr-2 sm:mr-3 text-[22px] sm:text-[26px] md:text-[28px] font-bold transition-colors ${
                      hoveredId === service.id
                        ? "text-[#D70C09]"
                        : "text-[#868386]"
                    }`}
                  >
                    {service.id}
                  </span>
                  {service.title}
                </h3>
                <p
                  className={`uppercase font-semibold text-xs sm:text-sm mt-1 transition-colors ${
                    hoveredId === service.id
                      ? "text-[#D70C09]"
                      : "text-[#868386]"
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Image */}
              <div className="w-full sm:w-[280px] h-[160px] sm:h-[170px] mt-4 sm:mt-0 relative overflow-hidden rounded-sm [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute w-full h-full object-cover transition-all duration-500 ease-out transform ${
                    hoveredId === service.id
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-5 scale-95"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
