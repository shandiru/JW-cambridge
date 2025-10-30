"use client";
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Any Car Problems",
    subtitle: "Expert Fault Investigation & Fixing",
    image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/car-repair-2557576_1280.jpg",
  },
  {
    id: 2,
    title: "General Maintenance & Servicing",
    subtitle: "Keeping Your Vehicle in Peak Condition",
    image: "https://cdn.pixabay.com/photo/2017/03/12/20/46/car-repair-2132450_1280.jpg",
  },
  {
    id: 3,
    title: "Vehicle Diagnosis",
    subtitle: "Advanced Diagnostic Equipment & Reporting",
    image: "https://cdn.pixabay.com/photo/2020/03/04/16/19/car-diagnostics-4900302_1280.jpg",
  },
  {
    id: 4,
    title: "Mercedes Diagnosis & Repair",
    subtitle: "Specialist Mercedes Tools & Genuine Parts",
    image: "https://cdn.pixabay.com/photo/2022/03/21/15/37/mercedes-7083463_1280.jpg",
  },
  {
    id: 5,
    title: "MOT Preparation & Pre-MOT Checks",
    subtitle: "We Undertake Pre-MOT & Subcontract Final MOT",
    image: "https://cdn.pixabay.com/photo/2017/08/06/07/36/car-2592485_1280.jpg",
  },
  {
    id: 6,
    title: "Software Updates & Control Modules",
    subtitle: "Latest ECU Programming & Module Replacement",
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/auto-1209713_1280.jpg",
  },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="service"
      className="relative bg-[#000000] py-16 px-6 md:px-12 font-['Orbitron',sans-serif] text-white"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D70C09]/30 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D70C09]/20 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* ✅ Grid layout wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
        {/* Left content */}
        <div className="self-start lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white uppercase">
            JW Cambridge <span className="text-[#D70C09]">Garage Services</span>
          </h2>
          <p className="mt-4 text-[#868386] max-w-md leading-relaxed text-sm sm:text-base">
            We specialise in **Mercedes-Benz** servicing, diagnostics, and
            electrical repairs using the latest factory-grade tools. Whether
            it’s maintenance, pre-MOT work, or advanced ECU updates — JW
            Cambridge ensures your Mercedes performs flawlessly, mile after
            mile.
          </p>
          <button className="mt-8 bg-[#D70C09] text-white font-bold px-6 py-3 rounded-md uppercase hover:bg-[#868386] transition-all text-sm sm:text-base">
            Discover More
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
