import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./home.css";

const heroImages = [
  "/assets/ink/ink-01.png",
  "/assets/ink/ink-02.jpg",
  "/assets/ink/ink-03.jpg",
  "/assets/ink/ink-04.jpg",
];

export default function HomeSection() {

  const { scrollY } = useScroll();

  /* smooth scroll physics */

  const smoothScroll = useSpring(scrollY, {
    stiffness: 40,
    damping: 25,
    mass: 0.5
  });

  const y1 = useTransform(smoothScroll, [0, 600], [0, 220]);

  return (
    <section className="hero-section" id="home">

      {/* BACKGROUND */}

      <div className="hero-bg-wrapper">
        {heroImages.map((img, index) => (
          <motion.div
            key={index}
            className="hero-bg-slide"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{
              opacity: [0, 0.55, 0],
              scale: [1.12, 1, 1.08],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: index * 4,
              ease: "easeInOut",
            }}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay-dark" />
        <div className="hero-overlay-gradient" />
      </div>

      {/* CONTENT */}

      <motion.div className="hero-content" style={{ y: y1 }}>

        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Print Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your Brand with <span className="highlight">AGNEYA</span>
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.2 }}
        />

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Transforming vision into reality through high-fidelity printing.
          Vibrant colors, sharp details, and unbeatable speed.
        </motion.p>

        {/* HIGHLIGHT PILLS */}

        <div className="hero-highlights">
          {[
            { icon: "⚡", text: "High-Speed" },
            { icon: "₹", text: "Best Pricing" },
            { icon: "✏️", text: "Custom Design" },
            { icon: "✅", text: "On-Time" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="highlight-pill"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              whileHover={{ y: -6, scale: 1.05 }}
            >
              <span className="pill-icon">{item.icon}</span>
              <span className="pill-text">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* BUTTONS */}

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#contact"
            className="glow-btn main-btn"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            Start Your Project
          </motion.a>

          <motion.a
            href="#services"
            className="outline-btn"
            whileHover={{ scale: 1.05 }}
          >
            Explore Services
          </motion.a>
        </motion.div>

      </motion.div>

      {/* SCROLL INDICATOR */}

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
      </motion.div>

    </section>
  );
}