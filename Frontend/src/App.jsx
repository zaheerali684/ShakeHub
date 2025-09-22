import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/Landingpage";
import Footer from "./components/Footer";
import ShakesDeals from "./components/Shakedeals";
import AboutPage from "./components/Aboutus";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import Shakes from "./components/Shakes";
import Login from "./components/Login";
import Register from "./components/Register";
import OrderPage from "./components/OrderPage"; 
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={ <><LandingPage /> <Shakes /> </>} />
            <Route path="/shakes" element={<ShakesDeals />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
