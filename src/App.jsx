import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Component/About";
import Client from "./Component/Client";
import Blog from "./Component/Blog";
import Questions from "./Component/Questions";
import LiveCount from "./Component/LiveCount";
import From from "./Component/From";

const App = () => {
  return (
    <Router>
      <div>
      <NavBar />
      <Header />
        <About />
        <Client />
        <Blog />  
        <Questions />
        <LiveCount />
        <From />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
