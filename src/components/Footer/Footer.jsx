import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "aos/dist/aos.css";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-landing">
        <div className="footer-main">
          <div className="footer-logo-section">
            <h2 className="footer-logo">MaltaMart</h2>
            <p>Fresh oranges delivered to your doorstep.</p>
            <p>Premium varieties and quick delivery.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: support@maltamart.com</p>
            <p>Phone: +92 300 1234567</p>
            <p>Address: Faisalabad, Pakistan</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://x.com/GulabYaar239"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/gulab-yar-fullstack-developer/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/mgulabyar"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MaltaMart. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
