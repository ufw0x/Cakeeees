import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <ProductList />
      <Testimonials />
      <Footer/>
    </React.Fragment>
  );
};

export default App;
