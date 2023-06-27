import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Portfolio from "../components/Portfolio";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="About." text="I'm a friendly Front-End Developer." />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default About;
