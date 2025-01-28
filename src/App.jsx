import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Component/About-section";
import Blog from "./Component/Blog";
import Questions from "./Component/Questions";
import LiveCount from "./Component/LiveCount";
import From from "./Component/From";
import TrustedPartners from "./Component/Trusted-partners";
import WhySection from "./Component/Why-section";
import ServicesSection from "./Component/Service";
import VideoSection from "./Component/Video-section";
import ProcessSteps from "./Component/Process-steps";
import Testimonials from "./Component/testimonials";

const App = () => {
  return (
    <Router>
      <div>
      <NavBar />
      <Header />
      <TrustedPartners/>
       <ServicesSection/>
        <About />
        <WhySection/>
        <VideoSection/>
        <ProcessSteps />
        <Blog />  
        <Testimonials />
        
        <Questions />
        <LiveCount />
        <From />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
