import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <ProductList />
      <Testimonials />
    </React.Fragment>
  );
};

export default App;
