import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GDPRConsent from "./components/GDPRButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./page/Home";
import Service from "./page/Service";
import ScrollToHash from "./components/ScrollToHash";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,     // animate once
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;
