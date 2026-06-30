import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GetStart.css";

const MaltaMartGetStart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="getstart-container">
      <section className="hero-landing" data-aos="fade-down">
        <h1>Welcome to MaltaMart</h1>
        <p>
          Discover the freshest orange varieties & book your favorites online.
        </p>
        <button className="cta-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </section>

      <section className="features-landing" data-aos="fade-up">
        <h2>Why Choose MaltaMart</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/415/415733.png"
              alt="Fresh"
            />
            <h3>Fresh Varieties</h3>
            <p>Fresh oranges sourced from our orchards.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/135/135763.png"
              alt="Quality"
            />
            <h3>Premium Quality</h3>
            <p>Every citrus is handpicked for rich taste.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Fast Delivery"
            />
            <h3>Fast Delivery</h3>
            <p>Citrus packages delivered directly to you.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="400">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2910/2910762.png"
              alt="Support"
            />
            <h3>Customer Support</h3>
            <p>Our dedicated support team is active 24/7.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/188/188333.png"
              alt="Organic"
            />
            <h3>Organic Orchards</h3>
            <p>Purely organic citrus from certified fields.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="600">
            <img
              src="https://cdn-icons-png.flaticon.com/512/950/950116.png"
              alt="Logistics"
            />
            <h3>Secure Logistics</h3>
            <p>Secure packaging with cold chain transit.</p>
          </div>
        </div>
      </section>

      <section className="steps" data-aos="fade-up">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card" data-aos="fade-left" data-aos-delay="100">
            <div className="step-number">1</div>Create Account
          </div>
          <div className="step-card" data-aos="fade-left" data-aos-delay="200">
            <div className="step-number">2</div>Browse Varieties
          </div>
          <div className="step-card" data-aos="fade-left" data-aos-delay="300">
            <div className="step-number">3</div>Book Your Favorites
          </div>
          <div className="step-card" data-aos="fade-left" data-aos-delay="400">
            <div className="step-number">4</div>Chat & Confirm Orders
          </div>
        </div>
      </section>

      <section className="pricing" data-aos="fade-up">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Starter</h3>
            <p>Try a compact, fresh package of handpicked seasonal oranges.</p>
            <p className="price">Rs 200</p>
            <button onClick={() => navigate("/signup")}>Order Now</button>
          </div>

          <div
            className="pricing-card recommended"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Premium Pack</h3>
            <p>
              Receive a diverse, hand-graded collection of premium citrus
              breeds.
            </p>
            <p className="price">Rs 750</p>
            <button onClick={() => navigate("/signup")}>Book Now</button>
          </div>
        </div>
      </section>

      <section className="free-account" data-aos="fade-up">
        <h2>Start Your MaltaMart Account</h2>
        <p>Sign up now to explore all varieties and make your first booking!</p>
        <button className="signup-btn" onClick={() => navigate("/signup")}>
          Create Free Account
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default MaltaMartGetStart;
