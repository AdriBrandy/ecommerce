import React from "react";
import Navigation from "./components/Navigation";
import Herostart from "./components/Herostart";
import OurWork from "./components/us/OurWork";
import Categories from "./components/productos/Categories";

import Products from "./components/productos/Products";
import Newsletter from "./components/us/Newsletter";

import Testimonials from "./components/us/Testimonials";
import ContactUs from "./components/us/ContactUs";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navigation />
      <Herostart/>
      <OurWork />
      <Categories />

      <Products />


      <Newsletter />
      <Testimonials />
      <ContactUs/>
      <Footer />
      
    </>
  );
}

export default App;
