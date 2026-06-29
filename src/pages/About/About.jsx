// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaAward,
//   FaTree,
//   FaLeaf,
//   FaTruck,
//   FaGlobe,
//   FaUsers,
// } from "react-icons/fa";
// import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
// import "aos/dist/aos.css";
// import owner from "../../images/shabana.jpeg";
// import "./About.css";
// import Footer from "../../components/Footer/Footer";

// const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
//   }, []);

//   return (
//     <>
//       <img src={owner} alt="Owner" className="owner-floating" />
//       <div className="about-hero" data-aos="fade-down">
//         <div>
//           <h1 className="head">About Our Company</h1>
//           <p className="hero-sub">
//             Pakistan's Premium Kinnow & Citrus Exporters
//           </p>
//         </div>
//       </div>

//       <div className="about-section top-owner" data-aos="fade-up">
//         <div className="owner-top-wrapper">
//           <div>
//             <h2>Founder & CEO - Shabana Ishaq</h2>
//             <p>
//               With over <strong>10 years of experience</strong> in Kinnow
//               (orange) farming, harvesting, and exports. Our farmlands span
//               across multiple acres where we grow top-grade citrus using modern
//               agricultural techniques.
//             </p>
//             <p>
//               MaltaMart is a family-run business recognized for premium quality,
//               timely supply, and international export standards.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="about-section" data-aos="zoom-in">
//         <h2>Our Citrus Expertise</h2>
//         <p>
//           We specialize in Kinnow, Oranges, Malta, and premium citrus varieties
//           grown in natural soil with advanced irrigation systems.
//         </p>
//       </div>

//       <div className="about-section features-grid">
//         <div className="feature-card" data-aos="fade-up">
//           <FaAward size={35} color="#ff8c00" />
//           <h3>Premium Quality Citrus</h3>
//           <p>
//             Hand-picked, graded, and processed with international standards.
//           </p>
//         </div>
//         <div className="feature-card" data-aos="fade-up" data-aos-delay="150">
//           <FaTree size={35} color="#ff8c00" />
//           <h3>Own Farmlands</h3>
//           <p>
//             Acres of citrus orchards managed by expert agriculturists and family
//             supervision.
//           </p>
//         </div>
//         <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
//           <FaLeaf size={35} color="#ff8c00" />
//           <h3>Pure Growth</h3>
//           <p>Natural growth with organic care for premium taste.</p>
//         </div>
//         <div className="feature-card" data-aos="fade-up" data-aos-delay="450">
//           <FaTruck size={35} color="#ff8c00" />
//           <h3>Nationwide Supply</h3>
//           <p>
//             Delivering fresh citrus all over Pakistan with guaranteed freshness.
//           </p>
//         </div>
//         <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
//           <FaGlobe size={35} color="#ff8c00" />
//           <h3>Global Export</h3>
//           <p>
//             Trusted by international buyers for premium citrus export quality.
//           </p>
//         </div>
//         <div className="feature-card" data-aos="fade-up" data-aos-delay="750">
//           <FaUsers size={35} color="#ff8c00" />
//           <h3>Experienced Team</h3>
//           <p>
//             Our expert farmers and workers maintain the highest quality
//             standards.
//           </p>
//         </div>
//       </div>

//       <div className="about-section" data-aos="fade-left">
//         <h2>Our Citrus Varieties</h2>
//         <ul className="variety-list">
//           <li>✔ Kinnow (Premium Export Quality)</li>
//           <li>✔ Malta (Red & Orange)</li>
//           <li>✔ Mandarin</li>
//           <li>✔ Sweet Orange</li>
//           <li>✔ Blood Orange</li>
//           <li>✔ Valencia</li>
//           <li>✔ Early Season Citrus</li>
//           <li>✔ Late Harvest Citrus</li>
//         </ul>
//       </div>

//       <div className="about-section strength" data-aos="fade-right">
//         <h2>Why MaltaMart Stands Out?</h2>
//         <p>
//           From orchard to packing facility, every step is monitored for peak
//           quality.
//         </p>
//         <div className="strength-grid">
//           <div data-aos="zoom-in">
//             <FaLeaf color="#ff8c00" size={30} /> Natural Growth
//           </div>
//           <div data-aos="zoom-in" data-aos-delay="150">
//             <MdLocationOn color="#ff8c00" size={30} /> Modern Facility
//           </div>
//           <div data-aos="zoom-in" data-aos-delay="300">
//             <FaTree color="#ff8c00" size={30} /> Own Orchards
//           </div>
//           <div data-aos="zoom-in" data-aos-delay="450">
//             <FaAward color="#ff8c00" size={30} /> Premium Quality
//           </div>
//         </div>
//       </div>

//       <div className="about-section" data-aos="flip-left">
//         <h2>Meet Our Founder</h2>
//         <div className="owner-section">
//           <img src={owner} alt="Owner" />
//           <div className="owner-info">
//             <h3>Shabana Ishaq</h3>
//             <p>Founder, CEO & Chief Citrus Agriculturist at MaltaMart.</p>
//             <p>
//               With a decade of hands-on citrus experience, he ensures every
//               batch meets export standards.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="about-section contact" data-aos="fade-up">
//         <h2>Contact & Address</h2>
//         <div className="contact-grid">
//           <div>
//             <MdLocationOn size={28} color="#ff8c00" /> Faisalabad, Punjab,
//             Pakistan
//           </div>
//           <div style={{marginRight:"73px"}}> 
//             <MdPhone size={28} color="#ff8c00" /> +92 336 7190072
//           </div>
//           <div style={{marginRight:"28px"}}>
//             <MdEmail size={28} color="#ff8c00" /> shabanaishaq.work@gmail.com
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default About;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaAward,
  FaTree,
  FaLeaf,
  FaTruck,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import owner from "../../images/shabana.jpeg";
import "./About.css";
import Footer from "../../components/Footer/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div className="about-hero-wrapper">
        <div className="about-hero" data-aos="fade-down">
          <div>
            <h1 className="head">About Our Company</h1>
            <p className="hero-sub">
              Pakistan's Premium Kinnow & Citrus Exporters
            </p>
          </div>
        </div>
        <img src={owner} alt="Owner" className="owner-floating" />
      </div>

      <div className="about-section top-owner" data-aos="fade-up">
        <div className="owner-top-wrapper">
          <h2>Founder & CEO - Shabana Ishaq</h2>
          <p>
            With over <strong>10 years of experience</strong> in Kinnow
            (orange) farming, harvesting, and exports. Our farmlands span
            across multiple acres where we grow top-grade citrus using modern
            agricultural techniques.
          </p>
          <p>
            MaltaMart is a family-run business recognized for premium quality,
            timely supply, and international export standards.
          </p>
        </div>
      </div>

      <div className="about-section stats-section" data-aos="fade-up">
        <div className="stats-grid">
          <div className="stat-card">
            <h4>10+</h4>
            <p>Years of Farming Excellence</p>
          </div>
          <div className="stat-card">
            <h4>500+</h4>
            <p>Acres of Premium Farmland</p>
          </div>
          <div className="stat-card">
            <h4>15M+</h4>
            <p>Oranges Harvested Annually</p>
          </div>
          <div className="stat-card">
            <h4>50+</h4>
            <p>Global Export Partners</p>
          </div>
        </div>
      </div>

      <div className="about-section text-center-sec" data-aos="zoom-in">
        <h2>Our Citrus Expertise</h2>
        <p>
          We specialize in Kinnow, Oranges, Malta, and premium citrus varieties
          grown in natural soil with advanced irrigation systems.
        </p>
      </div>

      <div className="about-section features-grid">
        <div className="feature-card" data-aos="fade-up">
          <FaAward size={35} color="#ff8c00" />
          <h3>Premium Quality Citrus</h3>
          <p>
            Hand-picked, graded, and processed with international standards.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="150">
          <FaTree size={35} color="#ff8c00" />
          <h3>Own Farmlands</h3>
          <p>
            Acres of citrus orchards managed by expert agriculturists and family
            supervision.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <FaLeaf size={35} color="#ff8c00" />
          <h3>Pure Growth</h3>
          <p>Natural growth with organic care for premium taste.</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="450">
          <FaTruck size={35} color="#ff8c00" />
          <h3>Nationwide Supply</h3>
          <p>
            Delivering fresh citrus all over Pakistan with guaranteed freshness.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
          <FaGlobe size={35} color="#ff8c00" />
          <h3>Global Export</h3>
          <p>
            Trusted by international buyers for premium citrus export quality.
          </p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="750">
          <FaUsers size={35} color="#ff8c00" />
          <h3>Experienced Team</h3>
          <p>
            Our expert farmers and workers maintain the highest quality
            standards.
          </p>
        </div>
      </div>

      <div className="about-section text-center-sec" data-aos="fade-left">
        <h2>Our Citrus Varieties</h2>
        <ul className="variety-list">
          <li>✔ Kinnow (Premium Export Quality)</li>
          <li>✔ Malta (Red & Orange)</li>
          <li>✔ Mandarin</li>
          <li>✔ Sweet Orange</li>
          <li>✔ Blood Orange</li>
          <li>✔ Valencia</li>
          <li>✔ Early Season Citrus</li>
          <li>✔ Late Harvest Citrus</li>
        </ul>
      </div>

      <div className="about-section strength" data-aos="fade-right">
        <h2>Why MaltaMart Stands Out?</h2>
        <p className="strength-p">
          From orchard to packing facility, every step is monitored for peak
          quality.
        </p>
        <div className="strength-grid">
          <div data-aos="zoom-in">
            <FaLeaf color="#ff8c00" size={30} /> Natural Growth
          </div>
          <div data-aos="zoom-in" data-aos-delay="150">
            <MdLocationOn color="#ff8c00" size={30} /> Modern Facility
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <FaTree color="#ff8c00" size={30} /> Own Orchards
          </div>
          <div data-aos="zoom-in" data-aos-delay="450">
            <FaAward color="#ff8c00" size={30} /> Premium Quality
          </div>
        </div>
      </div>

      <div className="about-section" data-aos="flip-left">
        <h2>Meet Our Founder</h2>
        <div className="owner-section">
          <img src={owner} alt="Owner" />
          <div className="owner-info">
            <h3>Shabana Ishaq</h3>
            <p className="role-title">Founder, CEO & Chief Citrus Agriculturist</p>
            <p>
              With a decade of hands-on citrus experience, she ensures every
              batch meets export standards.
            </p>
          </div>
        </div>
      </div>

      <div className="about-section contact" data-aos="fade-up">
        <h2>Contact & Address</h2>
        <div className="contact-grid">
          <div>
            <MdLocationOn size={28} color="#ff8c00" /> 
            <span>Faisalabad, Punjab, Pakistan</span>
          </div>
          <div> 
            <MdPhone size={28} color="#ff8c00" /> 
            <span>+92 336 7190072</span>
          </div>
          <div>
            <MdEmail size={28} color="#ff8c00" /> 
            <span>shabanaishaq.work@gmail.com</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;