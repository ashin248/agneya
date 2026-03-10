import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./services.css";

const services = [
  {
    title: "Digital Printing",
    description: "Fast turnaround for short to medium runs.",
    image: "/assets/aboutpage/Brochure & Catalog Printing.png",
  },
  {
    title: "Offset Printing",
    description: "High-volume excellence with superior color consistency.",
    image: "/assets/aboutpage/Label Printing.png",
  },
  {
    title: "Brochure & Catalog",
    description: "Multi-page masterpieces that showcase your brand.",
    image: "/assets/aboutpage/Letterheads&Business Cards.png",
  },
  {
    title: "Business Cards",
    description: "Premium, tactile cards that make lasting impressions.",
    image: "/assets/aboutpage/Offset Printing.png",
  },
  {
    title: "Label Printing",
    description: "Durable, high-resolution labels for all packaging.",
    image: "/assets/aboutpage/Photo Printing.png",
  },
  {
    title: "Acrylic & Photo",
    description: "Vivid, crystal-clear photo prints on acrylic.",
    image: "/assets/aboutpage/Printing Machine.png",
  },
  {
    title: "Custom T-Shirts",
    description: "High-quality branded apparel with vibrant colors.",
    image: "/assets/aboutpage/T-Shirt Printing.png",
  },
];

export default function Services() {

  const animationVariant = {
    hidden: {
      opacity: 0,
      x: 160,
      y: 120,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.1,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: {
      opacity: 0,
      x: 140,
      y: -140,
      filter: "blur(12px)",
      transition: {
        duration: 1
      }
    }
  };

  return (
    <div className="services-page-wrapper">

      {/* HERO */}

      <div className="hero-center">
        <h1>Printing Solutions Crafted for Excellence</h1>
        <p>Precision, vibrancy, and reliability in every print.</p>
      </div>

      {/* SERVICES */}

      <div className="services-container">

        {services.map((service, index) => (

          <motion.div
            key={index}
            className="service-item"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ amount: 0.4 }}
          >

            <div className="service-content">

              {/* TEXT */}

              <div className="text-column">
                <span className="count">0{index + 1}</span>
                <h2 className="title">{service.title}</h2>
                <p className="description">{service.description}</p>
                <div className="accent-line"></div>
              </div>

              {/* IMAGE */}

              <motion.div
                className="image-column"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="image-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
              </motion.div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}