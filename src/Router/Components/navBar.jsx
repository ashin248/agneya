
import React, { useState, useEffect } from "react";

import "./navBar.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar-fixed ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo Section */}
        <div className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          <div className="logo-icon-wrapper">
            <div className="logo-dot" />
            <div className="logo-ring" />
          </div>
          <span className="logo-text">AGNEYA</span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-item">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
       <a href=""><button className="cta-pill">Get Started</button> </a>

        {/* Mobile Hamburger */}
        <button 
          className={`menu-trigger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ transitionDelay: `${index * 0.1}s` }}>
              <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;