
import React from "react";
import "./App.css";

import NavBar from "./Router/Components/navBar";  
import HomeSection from "./Router/Home/home";    
import AboutSection from "./Router/About/about";
import ServicesSection from "./Router/Services/services";
import ContactSection from "./Router/Contact/contact";

function App() {
  return (
    <div className="agneya-website-body">
      <NavBar />

      <main>
        
        <HomeSection />
        
        <section id="about">
          <AboutSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

export default App;