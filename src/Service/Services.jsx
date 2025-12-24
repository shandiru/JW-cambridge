"use client";
import React from "react";
import {
  FaCarSide,
  FaTools,
  FaTachometerAlt,
  FaSnowflake,
  FaCogs,
  FaRegCheckCircle,
} from "react-icons/fa";

// JW Cambridge color palette (NO RED)
const palette = {
  primary: "#0B5ED7",      // blue main brand
  muted: "#475569",        // gray text
  cardBg: "#FFFFFF",       // card background
  cardBorder: "#CBD5E1",   // card border
  checkIcon: "#0B5ED7",    // check icon blue
  iconText: "#FFFFFF",     // icon text inside box
};

export default function JWCambridgeVehicleServices() {
  const services = [
    {
      title: "Fault Investigation & Repair",
      desc: "Accurate diagnosis and professional fault fixing using advanced vehicle diagnostics.",
      icon: <FaTools className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Accurate identification of vehicle faults",
        "Prevents repeat issues and misdiagnosis",
        "Saves money on unnecessary repairs",
        "Restores performance and reliability",
        "Suitable for Mercedes-Benz and all makes",
      ],
    },
    {
      title: "General Maintenance & Servicing",
      desc: "Routine servicing to keep your Mercedes and all vehicles running smoothly.",
      icon: <FaCogs className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Maintains manufacturer service standards",
        "Improves vehicle safety and reliability",
        "Extends engine and component lifespan",
        "Improves fuel efficiency",
        "Protects resale value",
      ],
    },
    {
      title: "Vehicle Diagnostics",
      desc: "Advanced diagnostic testing with detailed fault reporting and analysis.",
      icon: <FaTachometerAlt className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Accurate fault code reading and analysis",
        "Faster diagnosis and repair times",
        "Detailed diagnostic reporting",
        "Reduces guesswork and labour costs",
        "Suitable for Mercedes-Benz and other marques",
      ],
    },
    {
      title: "Mercedes Diagnosis & Repair",
      desc: "Specialist Mercedes diagnostics, repairs, and genuine or OEM parts.",
      icon: <FaCarSide className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Manufacturer-level Mercedes diagnostics",
        "Genuine or OEM Mercedes parts used",
        "Specialist knowledge of Mercedes systems",
        "Accurate repairs carried out first time",
        "Protects long-term vehicle value",
      ],
    },
    {
      title: "MOT Preparation & Pre-MOT Checks",
      desc: "Thorough inspections and repairs to help ensure a smooth MOT pass.",
      icon: <FaSnowflake className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Improves MOT pass rates",
        "Identifies issues before test day",
        "Reduces unexpected repair costs",
        "Ensures vehicle safety and compliance",
        "Suitable for Mercedes and all vehicles",
      ],
    },
    {
      title: "Software Updates & Control Modules",
      desc: "Latest ECU programming, software updates, and module replacement.",
      icon: <FaTachometerAlt className="h-5 w-5" />,
      iconBg: palette.primary,
      points: [
        "Fixes software-related faults",
        "Improves performance and efficiency",
        "Ensures system compatibility",
        "Restores failed or replaced modules",
        "Uses latest Mercedes-approved software",
      ],
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: palette.primary }}
          >
            JW Cambridge – Professional Vehicle Services
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: palette.muted }}
          >
            JW Cambridge offers fault investigation, servicing, diagnostics, Mercedes specialist repair, MOT preparation, and software updates. Our certified technicians ensure precision, reliability, and outstanding customer care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                flex flex-col gap-6 rounded-xl py-6
                border
                transition-all duration-300 hover:shadow-lg
              "
              style={{ backgroundColor: palette.cardBg, borderColor: palette.cardBorder }}
            >
              
              {/* Header with Icon */}
              <div className="grid auto-rows-min items-start gap-1.5 px-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: s.iconBg, color: palette.iconText }}
                  >
                    {s.icon}
                  </div>

                  <div
                    className="text-xl font-bold"
                    style={{ color: palette.primary }}
                  >
                    {s.title}
                  </div>
                </div>

                <div className="text-base" style={{ color: palette.muted }}>
                  {s.desc}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="px-6">
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm"
                      style={{ color: palette.muted }}
                    >
                      <FaRegCheckCircle
                        className="h-4 w-4 mr-2 flex-shrink-0"
                        style={{ color: palette.checkIcon }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
