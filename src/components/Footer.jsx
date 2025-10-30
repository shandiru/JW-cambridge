import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D70C09] to-[#0072ff] bg-clip-text text-transparent">
                Ovi <span className="text-gray-400"> Car Body Repair</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
              We use Blowtherm paint respray technology, so you can be sure to get a fantastic finish on your vehicle every time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/OviCarBodyRepair/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-[#D70C09]">
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Panel Beating",
                "Paint Respray",
                "Dent & Scratch Repair",
                "Accident Repairs",
                "Insurance Jobs",
                "Detailing",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-[#D70C09] ">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#D70C09] mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/S35jzCLApzz8zEJi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  215 Attercliffe Road , Sheffield  S4 7XF
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#D70C09]" size={18} />
                <a
                  href="tel:07788275026"
                  className="hover:text-white transition-colors duration-300"
                >
                  07788275026
                </a>
              </li>

              {/* <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#D70C09]" size={18} />
                <a
                  href="mailto:sam.ferries@rsmobileservices.co.uk"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  sam.ferries@rsmobileservices.co.uk
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ovi Car Body Repair. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#D70C09] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#D70C09] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D70C09] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
