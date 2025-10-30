"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "/" },
    { name: "ABOUT US", id: "about" },
    { name: "SERVICE", id: "service" },
    { name: "TESTIMONIAL", id: "review" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);

    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#000000]/90 backdrop-blur-sm fixed max-w-6xl p-3 mx-auto text-white tracking-wide top-3 rounded-lg left-0 right-0 z-50 border border-[#1A1A1A]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleScroll("/")}
        >
          <img
            src="/path-to-your-logo.png"
            alt="JW Cambridge Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="relative hover:text-[#C0C0C0] cursor-pointer transition-all duration-300"
            >
              {item.name}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] transition-all duration-300 hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="tel:01223311711"
            className="bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] text-black rounded-lg px-5 py-2 text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={26}
              className="hover:text-[#C0C0C0] cursor-pointer transition-all"
            />
          ) : (
            <Menu
              size={26}
              className="hover:text-[#C0C0C0] cursor-pointer transition-all"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-[#0E0E0E]/95 border-t border-[#1C1C1C] pb-4 space-y-4 mt-3 rounded-b-lg">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="text-white hover:text-[#C0C0C0] transition-all"
            >
              {item.name}
            </button>
          ))}
          <a
            href="tel:01223311711"
            className="bg-gradient-to-r from-[#E0E0E0] to-[#A8A8A8] text-black rounded-lg px-5 py-2 text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200"
          >
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
