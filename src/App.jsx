import React from "react";
import Menubar from "./components/menubar/Menubar";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./routes/Home";
import About from "./routes/About.js";
import Contact from "./routes/Contact";
import Gallery from "./routes/Gallery";
import Portfolio from "./routes/Portfolio";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
