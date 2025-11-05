"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularGallery from "./CircularGallery";

export default function GallerySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const galleryItems = [
    { type: "image", src: "im.jpeg", text: "Our Workshop" },
    { type: "image", src: "im1.jpeg", text: "Our Workshop" },
    { type: "image", src: "im2.jpeg", text: "Our Workshop" },
    { type: "image", src: "im3.jpeg", text: "Our Workshop" },
    { type: "image", src: "im4.jpeg", text: "Our Workshop" },
    { type: "image", src: "im5.jpeg", text: "Our Workshop" },
    { type: "image", src: "im6.jpeg", text: "Our Workshop" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FFFFFF] text-[#000000] font-['Poppins'] py-12 border-t border-[#B9BDC1]/40"
    >
      {/* 💠 Blue & Metallic Glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-[#0078D6]/20 to-transparent blur-[200px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#B9BDC1]/25 to-transparent blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* 🏁 Section Heading */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#0078D6] via-[#B9BDC1] to-[#0078D6] bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Gallery
        </h2>
        <p
          className="mt-4 text-[#555555] max-w-2xl mx-auto text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A glimpse into our state-of-the-art facilities and expert team at work.
        </p>
      </div>

      {/* 🌀 Circular Gallery */}
      <div
        className="relative z-10 mx-auto max-w-[1200px] w-full px-4 sm:px-6 md:px-8"
        style={{ height: "600px", position: "relative" }}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#0078D6"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}
