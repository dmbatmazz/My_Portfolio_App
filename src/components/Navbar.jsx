// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dmbLogo from "./dmb.png";  // <-- Logoyu import ettik

export default function Navbar({ menuOpen, setMenuOpen, setContactOpen }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if (window.innerWidth > 480 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen, setMenuOpen]);

  const activeClassName = "active";

  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src={dmbLogo} 
          alt="DMB Logo" 
          style={{ height: "60px" }} // istediğin boyuta göre ayarla
        />
      </div>

      {isMobile && (
        <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      )}

      {!isMobile && (
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              onClick={() => setMenuOpen(false)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <button 
              className="contact-btn" 
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setContactOpen(true);
              }}
            >
              Contact Me
            </button>
          </li>
        </ul>
      )}

      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              onClick={() => setMenuOpen(false)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <button 
              className="contact-btn" 
              onClick={() => {
                setMenuOpen(false);
                setContactOpen(true);
              }}
            >
              Contact Me
            </button>
          </li>
        </div>
      )}
    </nav>
  );
}
