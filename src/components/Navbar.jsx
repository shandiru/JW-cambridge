import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define full paths to ensure anchors work from secondary pages too
  const navItems = [
    { name: "HOME", path: "/#" },
    { name: "ABOUT US", path: "/#about" },
    { name: "SERVICE", path: "/service" }, 
    { name: "GALLERY", path: "/#gallery" },
    { name: "TESTIMONIAL", path: "/#review" },
    { name: "CONTACT", path: "/#contact" },
    { name: "FAQ", path: "/#faq" },
  ];

  // Optional: Native smooth scrolling observer when landing on a page with a hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -70; // Matches your design spacing
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100); // Small delay to ensure the DOM is painted
    }
  }, []);

  return (
    <nav className="bg-[#FFFFFF]/90 backdrop-blur-sm fixed max-w-6xl p-3 mx-auto text-[#000000] tracking-wide top-3 rounded-lg left-0 right-0 z-50 border border-[#B9BDC1]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <HashLink to="/" className="flex items-center cursor-pointer" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" loading="lazy" alt="Logo" className="h-8 w-auto object-contain" />
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <HashLink
              key={idx}
              to={item.path}
              className="group relative text-[#000000] hover:text-[#0078D6] font-medium transition-all duration-300"
            >
              {item.name}
              {/* Animated underline on hover fix (changed parent to group for clean hover triggers) */}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#0078D6] transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden xl:flex items-center space-x-6">
          <a
            href="tel:+447491016816"
            className="bg-[#0078D6] text-[#FFFFFF] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#0063b4] transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="xl:hidden text-[#0078D6]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} className="hover:text-[#005fa3] transition-all" /> : <Menu size={26} className="hover:text-[#005fa3] transition-all" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden flex flex-col items-center bg-[#FFFFFF] border-t border-[#B9BDC1] pb-4 space-y-4 mt-3 rounded-b-lg shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
          {navItems.map((item, idx) => (
            <HashLink
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-[#000000] hover:text-[#0078D6] font-medium transition-all"
            >
              {item.name}
            </HashLink>
          ))}
          <a
            href="tel:+447491016816"
            onClick={() => setIsOpen(false)}
            className="bg-[#0078D6] text-[#FFFFFF] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#0063b4] transition-all duration-200"
          >
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;