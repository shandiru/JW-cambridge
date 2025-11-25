"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const galleryItems = [
    { src: "im.jpg" },
    { src: "img1.jpg" },
    { src: "img2.jpg" },
    { src: "img3.jpg" },
    { src: "img4.jpg" },
    { src: "img5.jpg" },
    { src: "img6.jpg" },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white text-black font-['Poppins'] py-8 sm:py-12 md:py-16 lg:py-20 border-t border-[#B9BDC1]/40"
    >
      {/* Background Glow - Responsive */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-linear-to-br from-[#0078D6]/20 to-transparent blur-[120px] sm:blur-[150px] md:blur-[200px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-linear-to-tl from-[#B9BDC1]/25 to-transparent blur-[100px] sm:blur-[130px] md:blur-[160px] rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Heading - Responsive */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight bg-linear-to-r from-[#0078D6] via-[#B9BDC1] to-[#0078D6] bg-clip-text text-transparent"
          data-aos-delay="200"
        >
          Our Gallery
        </h2>
        <p
          className="mt-2 sm:mt-3 md:mt-4 text-[#555555] max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-2"
          data-aos-delay="400"
        >
          A glimpse into our state-of-the-art facilities and expert team at work.
        </p>
      </div>

      {/* Slider Section - Fully Responsive */}
      <div
        className="relative z-10 mx-auto max-w-[1300px] w-full px-3 sm:px-4 md:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            375: { slidesPerView: 1, spaceBetween: 12 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
          }}
          className="pb-10 sm:pb-12"
        >
          {galleryItems.map((item, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md border border-[#B9BDC1]/40 hover:scale-[1.02] sm:hover:scale-[1.03] transition-all duration-300 w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px]">
                <img
                  src={item.src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-60 lg:h-[260px] xl:h-[280px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Styles - Responsive */}
        <style jsx global>{`
          .swiper-pagination {
            margin-top: 20px !important;
            position: relative !important;
          }
          
          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            background: #0078D6 !important;
            opacity: 0.4 !important;
          }
          
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            width: 24px !important;
            border-radius: 4px !important;
          }
          
          @media (min-width: 640px) {
            .swiper-pagination {
              margin-top: 25px !important;
            }
            
            .swiper-pagination-bullet {
              width: 10px !important;
              height: 10px !important;
            }
            
            .swiper-pagination-bullet-active {
              width: 28px !important;
            }
          }
          
          @media (max-width: 374px) {
            .swiper-pagination-bullet {
              width: 6px !important;
              height: 6px !important;
            }
            
            .swiper-pagination-bullet-active {
              width: 20px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}