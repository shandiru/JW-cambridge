import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "/" },
    { name: "ABOUT US", id: "about" },
    { name: "SERVICE", id: "/service", isExternal: true }, // Changed to path
    { name: "TESTIMONIAL", id: "review" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  const handleScroll = (item) => {
    setIsOpen(false);

    // 1. Direct Page Navigation for Service
    if (item.isExternal) {
      window.location.href = item.id;
      return;
    }

    // 2. Home Page Logic
    if (item.id === "/") {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. Section Anchors
    if (window.location.pathname === "/") {
      const section = document.getElementById(item.id);
      if (section) {
        const yOffset = -70;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Navigate to home and then find the anchor
      window.location.href = `/#${item.id}`;
    }
  };

  return (
    <nav className="bg-[#FFFFFF]/90 backdrop-blur-sm fixed max-w-6xl p-3 mx-auto text-[#000000] tracking-wide top-3 rounded-lg left-0 right-0 z-50 border border-[#B9BDC1]/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => handleScroll({ id: "/" })}>
          <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item)}
              className="relative text-[#000000] hover:text-[#0078D6] font-medium transition-all duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#0078D6] transition-all duration-300 hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="tel:+447491016816"
            className="bg-[#0078D6] text-[#FFFFFF] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#0063b4] transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#0078D6]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} className="hover:text-[#005fa3] transition-all" /> : <Menu size={26} className="hover:text-[#005fa3] transition-all" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-[#FFFFFF] border-t border-[#B9BDC1] pb-4 space-y-4 mt-3 rounded-b-lg shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item)}
              className="text-[#000000] hover:text-[#0078D6] font-medium transition-all"
            >
              {item.name}
            </button>
          ))}
          <a
            href="tel:+447491016816"
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