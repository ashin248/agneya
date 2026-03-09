import React, { useRef } from "react";
import "./about.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {

  const mainRef = useRef();

  useGSAP(() => {

    const ctx = gsap.context(() => {

      /* SCATTER TEXT */

      const scatter = gsap.utils.toArray(".scatter-line");

      scatter.forEach(line => {

        const split = new SplitText(line, { type: "chars" });

        gsap.from(split.chars, {

          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          },

          y: 60,
          opacity: 0,
          rotateX: 90,
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.out"

        });

      });


      /* HANDWRITING TEXT */

      const handwriting = gsap.utils.toArray(".handwrite-text");

      handwriting.forEach(line => {

        const split = new SplitText(line, { type: "chars" });

        gsap.from(split.chars, {

          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          },

          opacity: 0,
          duration: 0.04,
          stagger: 0.02,
          ease: "none"

        });

      });


      /* FLOATING SHAPES */

      gsap.to(".abstract-shape", {

        y: 40,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut"

      });


      /* PRINTER LIST */

      gsap.from(".print-items li", {

        scrollTrigger: {
          trigger: ".printer-container",
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        },

        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out"

      });

      ScrollTrigger.refresh();

    }, mainRef);

    return () => ctx.revert();

  }, []);

  return (

    <section ref={mainRef} className="about-section" id="about">

      <div className="about-container">

        {/* HEADER */}

        <header className="about-header">

          <h2 className="classic-title scatter-line">
            Precision. Passion. Perfection.
          </h2>

          <p className="about-subtitle scatter-line">
            Innovative printing • Uncompromising quality
          </p>

        </header>


        {/* STORY */}

        <div className="story-grid">

          <div className="story-content">

            <h3 className="handwrite-text">
              Our Story
            </h3>

            <p className="handwrite-text">
              Agneya was founded with a vision to redefine printing by
              combining modern technology with traditional craftsmanship.
              We believe printing is not just ink on paper but the identity
              of a brand expressed visually.
            </p>

          </div>

          <div className="story-visual">

            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>

          </div>

        </div>


        {/* WHO WE SERVE */}

        <div className="serve-wrapper">

          <h2 className="classic-title scatter-line">
            Who We Serve
          </h2>

          <div className="printer-container">

            <ul className="print-items">

              <li><span className="dot"></span>Corporate Clients</li>
              <li><span className="dot"></span>Educational Institutions</li>
              <li><span className="dot"></span>Retail Businesses</li>
              <li><span className="dot"></span>Event Organizers</li>
              <li><span className="dot"></span>Creative Agencies</li>
              <li><span className="dot"></span>Startups & Entrepreneurs</li>

            </ul>

          </div>

        </div>

      </div>

    </section>

  );
}