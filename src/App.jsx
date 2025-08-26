// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import About from "./pages/About";

import Portfolio from "./pages/Portfolio";

import ContactMe from "./pages/ContactMe";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setContactOpen={setContactOpen} />
        <div>
        <div className={`main-content ${menuOpen || contactOpen ? "blurred" : ""}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
        <ContactMe isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
      </div>
    </Router>
  );
}

export default App;
