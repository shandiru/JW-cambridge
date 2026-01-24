import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function WheelTyreHero() {
  const handleQuoteClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <section
      className="py-16 pt-30"
      style={{
        background: "#EEF2F5", // second box background
        color: "#020617",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">

          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-medium mb-4"
            style={{
              backgroundColor: "#0B5ED7",
              color: "#FFFFFF",
            }}
          >
            Mercedes specialist
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "#020617" }}
          >
            Professional Services
          </h1>

          {/* Sub Copy */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#475569" }}
          >
            Expert vehicle servicing, repairs, diagnostics, and maintenance solutions for all makes and models.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            
            {/* Primary Button */}
            <a href="tel:+447491016816" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "#0B5ED7",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(11,94,215,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +44 7491 016816
              </button>
            </a>

            {/* Outline Button (BLUE ONLY) */}
            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold border transition-all duration-300"
              style={{
                borderColor: "#0B5ED7",
                color: "#0B5ED7",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0B5ED7";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(11,94,215,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0B5ED7";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Free Quote
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
