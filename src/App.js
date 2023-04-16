import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage.js"; // Update this import
import ProductsPage from "./components/productPage.js"; // Update this import
import CustomNavbar from "./components/CustomNavBar.js"; // Update this import
import AboutUs from "./components/aboutUs.js";
import Listing from "./components/listing.js";
import ContactUs from "./components/contactUs.js";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products/:id" element={<Listing />} />
        <Route path="contact-us" element={<ContactUs />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
