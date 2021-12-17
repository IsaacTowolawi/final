import React from "react";
import Intro from "../Introduction/Intro";
import ProductList from "../productlist/ProductList";
import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <Intro />
      <ProductList />
      <About />
      <Contact />
    </>
  );
};

export default Home;
