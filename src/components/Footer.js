import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome className="icon" />
            <p>Varvarin, Serbia</p>
          </div>
          <div className="phone">
            <FaPhone className="icon" />
            <p>+38163456831</p>
          </div>
          <div className="email">
            <FaMailBulk className="icon" />
            <p>drazensimonovic18@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>Social media accounts</h4>
          <div className="social">
            <a href="https://www.facebook.com/drazenmalja/">
              <FaFacebook className="socialicon" />
            </a>
            <a href="https://github.com/DrazenSimonovicc">
              <FaGithub className="socialicon" />
            </a>
            <a href="https://www.linkedin.com/in/drazen-simonovic-739816147/">
              <FaLinkedin className="socialicon" />
            </a>
            <a href="https://www.instagram.com/drazenmalja/">
              <FaInstagram className="socialicon" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-text">Build by Drazen Simonovic.</p>
    </footer>
  );
};

export default Footer;
