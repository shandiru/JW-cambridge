import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1A1A1A] py-12 text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] bg-clip-text text-transparent">
                JW <span className="text-gray-400">Cambridge</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
              From oil changes to engine diagnostics, our fully equipped vans ensure your vehicle runs smoothly without the hassle of visiting a workshop.
            </p>
            <div className="flex space-x-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-[#E0E0E0] cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Any Car Problems",
                "Maintenance & Servicing",
                "Vehicle Diagnosis",
                "Mercedes Diagnosis & Repair",
                "MOT Preparation & Pre-MOT Checks",
                "Software Updates & Control Modules",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="hover:text-[#E0E0E0] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#C0C0C0] mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/oHkixQgSx4GGL3Nv5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0E0E0] transition-colors duration-300"
                >
                  Unit 1, 2 Swanns Rd, Cambridge CB5 8JZ
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#C0C0C0]" size={18} />
                <a
                  href="tel:+441780917600"
                  className="hover:text-[#E0E0E0] transition-colors duration-300"
                >
                  01223311711
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#C0C0C0]" size={18} />
                <a
                  href="mailto:info@jwcambridge.co.uk"
                  className="hover:text-[#E0E0E0] transition-colors duration-300 break-all"
                >
                  info@jwcambridge.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#1A1A1A] mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 JW Cambridge. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#C0C0C0] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#C0C0C0] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C0C0C0] hover:text-white transition duration-300"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
