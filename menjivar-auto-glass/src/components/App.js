import React from "react";
import Navbar from "./Navbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home"
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
