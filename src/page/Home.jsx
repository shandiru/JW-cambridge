import React from 'react'

import HeroSection from '../components/HeroSection'
import LogoShowcase from '../components/LogoShowcase'
import About from '../components/Whyus'
import ServiceSection from '../components/Service'
import GallerySection from "../components/GallerySection"
import TestimonialsCarousel from '../components/Testimonials'
import Faq from "../components/faq"
import ContactSection from '../components/Contact'
import FindUs from '../components/Findus'


const Home = () => {
    return (
        <div>
           
            <HeroSection />
            <LogoShowcase />
            <About />
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
