import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import About from './components/About'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About/>
      <ProductList />
    </React.Fragment>
  );
};

export default App;
