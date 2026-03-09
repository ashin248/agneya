import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./services.css";

const services = [
  {
    title: "Digital Printing",
    description: "Fast turnaround for short to medium runs with vibrant colors.",
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

const inkImages = [
  "/assets/ink/ink-01.png",
  "/assets/ink/ink-02.png",
  "/assets/ink/ink-03.png",
  "/assets/ink/ink-04.png",
  "/assets/ink/ink-05.png",
  "/assets/ink/ink-06.png",
  "/assets/ink/ink-07.png",
];

export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 18,
    damping: 40,
    mass: 0.6,
  });

  const heroOpacity = useTransform(progress, [0, 0.12], [1, 0]);
  const heroScale = useTransform(progress, [0, 0.12], [1, 0.92]);

  return (
    <div className="services-page-wrapper" ref={containerRef}>
      <div className="sticky-view">
        {/* HERO */}
        <motion.div
          className="hero-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <h1>Printing Solutions Crafted for Excellence</h1>
          <p>Precision, vibrancy, and reliability in every print.</p>
        </motion.div>

        {/* INK EXPLOSION */}
        <div className="ink-layer">
          {inkImages.map((img, i) => {
            const angle = (i / inkImages.length) * Math.PI * 2;
            const radiusX = 520;
            const radiusY = 380;

            const x = useTransform(progress, [0.10, 0.30], [0, Math.cos(angle) * radiusX]);
            const y = useTransform(progress, [0.10, 0.30], [0, Math.sin(angle) * radiusY]);

            const scale = useTransform(progress, [0.10, 0.20, 0.32], [0, 2.4, 0]);
            const opacity = useTransform(progress, [0.10, 0.20, 0.32], [0, 0.9, 0]);

            return (
              <motion.img
                key={i}
                src={img}
                className="ink-sprite"
                style={{ x, y, scale, opacity }}
              />
            );
          })}
        </div>

        {/* SERVICES */}
        <div className="services-container">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              index={index}
              total={services.length}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ service, index, total, progress }) {

  const animationStart = 0.35;
  const remainingSpace = 1 - animationStart;
  const segment = remainingSpace / total;

  const start = animationStart + index * segment;
  const mid = start + segment * 0.5;
  const end = start + segment;

  const y = useTransform(progress, [start, mid, end], [120, 0, -120]);

  const opacity = useTransform(
    progress,
    [start, mid - segment * 0.2, mid + segment * 0.2, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(progress, [start, mid, end], [0.92, 1, 0.92]);

  return (
    <motion.div
      className="service-item"
      style={{
        y,
        opacity,
        scale,
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateZ(0)",
      }}
    >
      <div className="service-content">

        <div className="text-column">
          <span className="count">0{index + 1}</span>
          <h2 className="title">{service.title}</h2>
          <p className="description">{service.description}</p>
          <div className="accent-line" />
        </div>

        <div className="image-column">
          <div className="image-wrapper">
            <img src={service.image} alt={service.title} />
          </div>
        </div>

      </div>
    </motion.div>
  );
}