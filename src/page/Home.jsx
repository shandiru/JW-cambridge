import React from 'react'

import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/Service'
import GallerySection from "../components/GallerySection"
import TestimonialsCarousel from '../components/Testimonials'
import Faq from "../components/faq"
import ContactSection from '../components/Contact'
import FindUs from '../components/Findus'
import AboutSection from '../components/About'
import WhyusSection from '../components/Whyus'


const Home = () => {
    return (
        <div>
           
            <HeroSection />
            <AboutSection />
            <WhyusSection />
            <ServiceSection />
            <GallerySection />
            <TestimonialsCarousel />
            <Faq />
            <ContactSection />
            <FindUs />
           
        </div>
    )
}

export default Home
