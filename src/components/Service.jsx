import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Any Car Problems",
    subtitle: "Expert Fault Investigation & Fixing",
    image:
      "img4.jpg",
  },
  {
    id: 2,
    title: "General Maintenance & Servicing",
    subtitle: "Keeping Your Vehicle in Peak Condition",
    image:
      "img5.jpg",
  },
  {
    id: 3,
    title: "Vehicle Diagnosis",
    subtitle: "Advanced Diagnostic Equipment & Reporting",
    image:
      "img6.jpg",
  },
  {
    id: 4,
    title: "Mercedes Diagnosis & Repair",
    subtitle: "Specialist Mercedes Tools & Genuine Parts",
    image:
      "img4.jpg",
  },
  {
    id: 5,
    title: "MOT Preparation & Pre-MOT Checks",
    subtitle: "We Undertake Pre-MOT & Subcontract Final MOT",
    image:
      "img5.jpg",
  },
  {
    id: 6,
    title: "Software Updates & Control Modules",
    subtitle: "Latest ECU Programming & Module Replacement",
    image:
      "img6.jpg",
  },
];

const ServiceSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="service"
      className="relative bg-[#FFFFFF] py-20 px-6 md:px-12 font-['Poppins'] text-[#000000] border-t border-[#B9BDC1]/40"
    >
      {/*  Blue Metallic Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-linear-to-br from-[#0078D6]/10 to-transparent blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-linear-to-tl from-[#B9BDC1]/20 to-transparent blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Grid layout wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
        {/* Left content */}
        <div className="self-start lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight uppercase text-[#000000]">
            JW Cambridge{" "}
            <span className="bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
              Garage Services
            </span>
          </h2>
          <p className="mt-5 text-[#333333] max-w-md leading-relaxed text-sm sm:text-base">
           We specialise in Mercedes-Benz servicing, diagnostics, and electrical repairs using factory-grade tools, alongside professional servicing for selected other vehicles. Whether it’s maintenance, pre-MOT work, or advanced ECU updates, JW Cambridge delivers reliable performance, mile after mile.
          </p>
         <a href="/service">
  <button className="mt-8 bg-[#0078D6] text-[#FFFFFF] font-semibold px-6 py-3 rounded-md uppercase hover:bg-[#0063b4] hover:shadow-[0_0_25px_rgba(0,120,214,0.4)] transition-all text-sm sm:text-base">
    Discover More
  </button>
</a>

        </div>

        {/* Right Services List */}
        <div className="flex flex-col gap-8 relative">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center transition-all duration-300 ease-out border-b border-[#B9BDC1]/40 pb-6"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Text */}
              <div>
                <h3
                  className={`text-[20px] sm:text-[22px] md:text-[24px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    hoveredId === service.id
                      ? "text-[#0078D6]"
                      : "text-[#000000]"
                  }`}
                >
                  <span
                    className={`mr-2 sm:mr-3 text-[22px] sm:text-[26px] md:text-[28px] font-bold transition-colors ${
                      hoveredId === service.id
                        ? "text-[#0078D6]"
                        : "text-[#B9BDC1]"
                    }`}
                  >
                    {service.id.toString().padStart(2, "0")}
                  </span>
                  {service.title}
                </h3>
                <p
                  className={`uppercase font-semibold text-xs sm:text-sm mt-1 transition-colors ${
                    hoveredId === service.id
                      ? "text-[#0078D6]"
                      : "text-[#666666]"
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Image */}
              <div className="w-full sm:w-[280px] h-40 sm:h-[170px] mt-4 sm:mt-0 relative overflow-hidden rounded-md [clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] shadow-[0_0_15px_rgba(0,0,0,0.08)] border border-[#B9BDC1]/30">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className={`absolute w-full h-full object-cover transition-all duration-500 ease-out transform ${
                    hoveredId === service.id
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-5 scale-95"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-linear-to-br from-transparent via-[#0078D6]/15 to-transparent transition-opacity duration-500 ${
                    hoveredId === service.id ? "opacity-60" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
