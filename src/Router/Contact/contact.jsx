import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);

  const phoneNumber = "+919876543210";
  const emailAddress = "ashinbiju248@gmail.com";
  const mapLink = "https://maps.google.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT INFO */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact Us</h2>
          <p>
            Have a project or printing requirement? Let's bring your ideas to life.
          </p>

      
          <div
            className="contact-item clickable"
            onClick={() => setShowCallOptions(!showCallOptions)}
          >
            <img src="/assets/Contact/Call_icon.png" alt="call" />
            <div>
              <h4>Phone</h4>
              <p>{phoneNumber}</p>
            </div>
          </div>

          <AnimatePresence>
            {showCallOptions && (
              <motion.div
                className="call-options"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <a href={`tel:${phoneNumber}`}>📞 Call</a>
                <a
                  href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <a href={`mailto:${emailAddress}`} className="contact-item clickable">
            <img src="/assets/Contact/email_icon.png" alt="email" />
            <div>
              <h4>Email</h4>
              <p>{emailAddress}</p>
            </div>
          </a>


          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="contact-item clickable"
          >
            <img src="/assets/Contact/location_icon.png" alt="location" />
            <div>
              <h4>Location</h4>
              <p>Kochi, Kerala, India</p>
            </div>
          </a>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className="success-box"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Message Sent Successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}