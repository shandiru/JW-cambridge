import React from "react";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#B9BDC1]/40 py-14 text-[#000000]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-linear-to-r from-[#0078D6] to-[#B9BDC1] bg-clip-text text-transparent">
                JW <span className="text-[#000000]">Cambridge</span>
              </span>
            </div>
            <p className="text-[#555555] mb-4 mt-3 leading-relaxed">
              From oil changes to engine diagnostics, our fully equipped vans
              ensure your vehicle runs smoothly — without the hassle of visiting
              a workshop.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-[#B9BDC1] hover:text-[#0078D6] cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#0078D6] text-lg uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-[#555555]">
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
                    className="hover:text-[#0078D6] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-[#0078D6] text-lg uppercase tracking-wide">
              Contact Info
            </h3>
            <ul className="space-y-4 text-[#555555]">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#0078D6] mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/oHkixQgSx4GGL3Nv5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0078D6] transition-colors duration-300"
                >
                  Unit 1, 2 Swanns Rd, Cambridge CB5 8JZ
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#0078D6]" size={18} />
                <a
                  href="tel:+441780917600"
                  className="hover:text-[#0078D6] transition-colors duration-300"
                >
                  +44 74910 16816
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#0078D6]" size={18} />
                <a
                  href="mailto:info@jwcambridge.co.uk"
                  className="hover:text-[#0078D6] transition-colors duration-300 break-all"
                >
                  info@jwcambridge.co.uk 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#B9BDC1]/30 mt-10 pt-8 text-center text-[#555555]">
          <p>&copy; 2025 JW Cambridge. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-medium text-[#555555]">
          {/* Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="hover:text-[#0078D6] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-[#B9BDC1]">|</span>
            <Link
              to="/privacy"
              className="hover:text-[#0078D6] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Powered by */}
          <p className="text-sm font-medium">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0078D6] hover:text-[#0063b4] transition duration-300"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
