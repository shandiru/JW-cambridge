
"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

// Adjusted color palette for white background
const palette = {
  bg: "#FFFFFF",               // White background
  primaryBlue: "#0B5ED7",     // Titles, selected boxes, check icons
  primaryRed: "#D70C09",      // Benefit / signs headings
  textGray: "#475569",        // Body text (darker on white)
  cardBg: "#F1F5F9",          // Unselected card background (light gray)
  cardBorder: "#CBD5E1",      // Card border
  selectedBg: "#0B5ED7",      // Selected card background
  selectedText: "#FFFFFF",    // Selected card title
};

export default function NandJServices() {
  const services = [
    {
      key: "fault",
      title: "Fault Investigation & Repair",
      desc: "Accurate diagnosis and professional fault fixing using advanced vehicle diagnostics",
      whyTitle: "Why Choose Professional Fault Investigation?",
      whyDesc: "Modern vehicles, especially Mercedes-Benz models, rely on complex electronics and systems. Expert fault investigation ensures issues are accurately diagnosed and fixed first time, saving time, money, and unnecessary part replacements.",
      benefitsTitle: "Benefits of Expert Fault Investigation",
      benefits: [
        "Accurate identification of vehicle faults",
        "Prevents repeat issues and misdiagnosis",
        "Saves money on unnecessary repairs",
        "Restores performance and reliability",
        "Suitable for Mercedes-Benz and all makes"
      ],
      signsTitle: "Signs You Need Fault Investigation",
      signs: [
        "Warning lights appearing on the dashboard",
        "Vehicle entering limp mode",
        "Intermittent or unexplained faults",
        "Reduced performance or efficiency",
        "Previous repairs not resolving the issue"
      ],
    },
    {
      key: "maintenance",
      title: "General Maintenance & Servicing",
      desc: "Routine servicing to keep your Mercedes and all vehicles running smoothly",
      whyTitle: "Why Is Regular Maintenance & Servicing Important?",
      whyDesc: "Routine maintenance and servicing are essential to keep your Mercedes-Benz or any vehicle running safely and efficiently. Following proper service schedules helps protect key components and maintain long-term reliability.",
      benefitsTitle: "Benefits of General Maintenance & Servicing",
      benefits: [
        "Maintains manufacturer service standards",
        "Improves vehicle safety and reliability",
        "Extends engine and component lifespan",
        "Improves fuel efficiency",
        "Protects resale value"
      ],
      signsTitle: "Signs Your Vehicle Needs Servicing",
      signs: [
        "Service interval reminder displayed",
        "Reduced fuel economy",
        "Unusual noises or vibrations",
        "Engine warning lights",
        "Vehicle feels less responsive"
      ],
    },
    {
      key: "diagnostics",
      title: "Vehicle Diagnostics",
      desc: "Advanced diagnostic testing with detailed fault reporting and analysis",
      whyTitle: "Why Use Advanced Vehicle Diagnostics?",
      whyDesc: "Modern vehicles require advanced diagnostic equipment to accurately assess faults. Professional vehicle diagnostics provide detailed reports and pinpoint issues quickly, particularly on Mercedes-Benz systems.",
      benefitsTitle: "Benefits of Vehicle Diagnostics",
      benefits: [
        "Accurate fault code reading and analysis",
        "Faster diagnosis and repair times",
        "Detailed diagnostic reporting",
        "Reduces guesswork and labour costs",
        "Suitable for Mercedes-Benz and other marques"
      ],
      signsTitle: "Signs You Need Vehicle Diagnostics",
      signs: [
        "Dashboard warning lights illuminated",
        "Engine or gearbox performance issues",
        "Electrical or sensor faults",
        "Vehicle failing to start or stalling",
        "Intermittent system failures"
      ],
    },
    {
      key: "mercedes",
      title: "Mercedes Diagnosis & Repair",
      desc: "Specialist Mercedes diagnostics, repairs, and genuine or OEM parts",
      whyTitle: "Why Choose a Mercedes-Benz Specialist?",
      whyDesc: "Mercedes-Benz vehicles require specialist tools, software, and expertise. Using a dedicated Mercedes specialist ensures repairs and diagnostics meet manufacturer standards while protecting performance and reliability.",
      benefitsTitle: "Benefits of Mercedes Diagnosis & Repair",
      benefits: [
        "Manufacturer-level Mercedes diagnostics",
        "Genuine or OEM Mercedes parts used",
        "Specialist knowledge of Mercedes systems",
        "Accurate repairs carried out first time",
        "Protects long-term vehicle value"
      ],
      signsTitle: "Signs Your Mercedes Needs Specialist Attention",
      signs: [
        "Mercedes-specific warning messages",
        "Gearbox or suspension faults",
        "Electrical or software-related issues",
        "Performance or drivability concerns",
        "Dealer-level diagnostics required"
      ],
    },
    {
      key: "mot",
      title: "MOT Preparation & Pre-MOT Checks",
      desc: "Thorough inspections and repairs to help ensure a smooth MOT pass",
      whyTitle: "Why Book MOT Preparation & Pre-MOT Checks?",
      whyDesc: "Pre-MOT checks help identify and resolve issues before your MOT test, increasing the chances of a pass. We carry out thorough inspections and can subcontract final MOT testing where required.",
      benefitsTitle: "Benefits of MOT Preparation",
      benefits: [
        "Improves MOT pass rates",
        "Identifies issues before test day",
        "Reduces unexpected repair costs",
        "Ensures vehicle safety and compliance",
        "Suitable for Mercedes and all vehicles"
      ],
      signsTitle: "Signs You Need a Pre-MOT Check",
      signs: [
        "MOT test due soon",
        "Previous MOT advisories",
        "Warning lights present",
        "Brakes, tyres, or lights in poor condition",
        "Vehicle hasn't been inspected recently"
      ],
    },
    {
      key: "software",
      title: "Software Updates & Control Modules",
      desc: "Latest ECU programming, software updates, and module replacement",
      whyTitle: "Why Are Software Updates & Control Modules Important?",
      whyDesc: "Modern Mercedes-Benz vehicles rely heavily on software to manage performance, safety, and comfort systems. Professional software updates and module programming ensure your vehicle operates correctly and efficiently.",
      benefitsTitle: "Benefits of Software Updates & Module Programming",
      benefits: [
        "Fixes software-related faults",
        "Improves performance and efficiency",
        "Ensures system compatibility",
        "Restores failed or replaced modules",
        "Uses latest Mercedes-approved software"
      ],
      signsTitle: "Signs You May Need Software Updates or Module Repair",
      signs: [
        "Persistent warning lights after repairs",
        "Electrical systems not functioning correctly",
        "New parts requiring coding",
        "Vehicle behaving unpredictably",
        "Manufacturer updates available"
      ],
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-16" style={{ backgroundColor: palette.bg, color: palette.textGray }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: palette.primaryBlue }}>
            Advanced Vehicle Diagnostics & Repair Service
          </h2>
          <p className="max-w-3xl mx-auto" style={{ color: palette.textGray }}>
            Specialist diagnostics, servicing, and repairs for Mercedes and all makes
          </p>
        </div>

        {/* Service Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-16">
          {services.map((s) => (
            <div
              key={s.key}
              onClick={() => setActiveService(s)}
              className="cursor-pointer rounded-2xl border px-5 py-7 text-center transition hover:scale-105"
              style={{
                borderColor: palette.cardBorder,
                backgroundColor:
                  activeService.key === s.key
                    ? palette.selectedBg
                    : palette.cardBg,
              }}
            >
              <h3
                className="font-semibold mb-1 text-lg"
                style={{
                  color:
                    activeService.key === s.key
                      ? palette.selectedText
                      : palette.primaryBlue,
                }}
              >
                {s.title}
              </h3>

              <p
                className="text-xs leading-snug"
                style={{
                  color:
                    activeService.key === s.key
                      ? palette.selectedText
                      : palette.textGray,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>


        {/* Dynamic Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* WHY + BENEFITS */}
          <div>
            <h3 className="text-3xl font-bold mb-3" style={{ color: palette.primaryBlue }}>
              {activeService.whyTitle}
            </h3>
            <p className="mb-6" style={{ color: palette.textGray }}>
              {activeService.whyDesc}
            </p>

            <h4 className="text-xl font-bold mb-4" style={{ color: palette.primaryRed }}>
              {activeService.benefitsTitle}
            </h4>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeService.benefits.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <FaCheckCircle className="mt-1" style={{ color: palette.primaryBlue }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SIGNS */}
          <div className="rounded-xl border p-8" style={{ backgroundColor: palette.cardBg, borderColor: palette.cardBorder }}>
            <h4 className="text-2xl font-extrabold  mb-4" style={{ color: palette.primaryRed, fontWeight: "900", }}>
              {activeService.signsTitle}
            </h4>
            <ul className="space-y-3" style={{ color: palette.textGray }}>
              {activeService.signs.map((sign, i) => (
                <li key={i}>• {sign}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
