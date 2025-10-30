"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "/" },
    { name: "ABOUT US", id: "about" },
    { name: "SERVICE", id: "service" },
    { name: "TESTIMONIAL", id: "testimonials" },
    { name: "GALLERY", id: "gallery" },
    { name: "CONTACT", id: "contact" },
    { name: "FAQ", id: "faq" },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);

    if (id === "/") {
      // scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // adjust for fixed navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black fixed max-w-6xl p-3 mx-auto text-white tracking-wide top-3 rounded-lg left-0 right-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleScroll("/")}
        >
          <img
            src="/path-to-your-logo.png"
            alt="CARSY Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="relative hover:text-[#D70C09] cursor-pointer transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={() => handleScroll("contact")}
            className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#868386] transition-all duration-300"
          >
            CONTACT US
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={26}
              className="hover:text-[#D70C09] cursor-pointer transition-all"
            />
          ) : (
            <Menu
              size={26}
              className="hover:text-[#D70C09] cursor-pointer transition-all"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black border-t border-gray-800 pb-4 space-y-4 mt-3 rounded-b-lg">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className="text-white hover:text-[#D70C09] transition-all"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleScroll("contact")}
            className="bg-[#D70C09] rounded-lg px-5 py-2 text-sm font-semibold hover:bg-[#868386] transition-all duration-200"
          >
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
