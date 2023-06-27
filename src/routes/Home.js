import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import aboutimg from "../assets/Drazen.jpg";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work />
      <AboutMe
        text="I'm deeply passionate about front-end programming and have a
                strong desire to continuously learn and expand my knowledge in
                this field. Throughout my career, I have consistently achieved
                success and build a solid track record of accomplishments in
                various roles. I thrive on challenging projects and have
                consistently delivered exceptional results, earning recognition
                of my contributions. My dedication to honing my skills and
                staying up-to-date with latest industry trends has been
                instrumental in my professional growth and the successful
                trajectory of my career."
        img={aboutimg}
      />
      <Footer />
    </div>
  );
};

export default Home;
