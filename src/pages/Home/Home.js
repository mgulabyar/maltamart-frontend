// import { useEffect, useState } from "react";
// import { handleError } from "../../utils";
// import "aos/dist/aos.css";
// import { ToastContainer } from "react-toastify";
// import "./Home.css";
// import Footer from "../../components/Footer/Footer";

// const Home = () => {
//   const [loggedInUser, setLoggedInUser] = useState("");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem("loggedInUser"));
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://maltamart-backend.vercel.app/products", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });

//       if (!response.ok) {
//         setProducts([]);
//         return;
//       }

//       const result = await response.json();

//       // ONLY FIX HERE: Direct array check lagaya ha bina kisi aur line ko chere
//       setProducts(Array.isArray(result) ? result : []);
//     } catch (err) {
//       setProducts([]);
//       handleError(err.message || "Failed to fetch products");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     document.querySelectorAll(".animate-on-scroll").forEach((el) => {
//       observer.observe(el);
//     });
//   }, []);

//   return (
//     <div className="home-container">
//       <section className="hero animate-on-scroll">
//         <div className="hero-content">
//           <h1>Welcome {loggedInUser}</h1>
//           <p>
//             Your MaltaMart dashboard is ready! Track your store sales, monitor
//             inventory, and explore the latest marketplace insights.
//           </p>

//           <div className="hero-cards">
//             <div className="hero-card">
//               <h3>Total Products</h3>
//               <p>23</p>
//             </div>
//             <div className="hero-card">
//               <h3>Active Sellers</h3>
//               <p>128</p>
//             </div>
//             <div className="hero-card">
//               <h3>Pending Orders</h3>
//               <p>5</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="dashboard-summary animate-on-scroll">
//         <h2>Marketplace Summary</h2>
//         <div className="summary-cards">
//           <div className="summary-card">
//             <h3>Active Sellers</h3>
//             <p>1,254</p>
//           </div>
//           <div className="summary-card">
//             <h3>Total Listings</h3>
//             <p>42</p>
//           </div>
//           <div className="summary-card">
//             <h3>Revenue</h3>
//             <p>$12,450</p>
//           </div>
//           <div className="summary-card">
//             <h3>Pending Orders</h3>
//             <p>18</p>
//           </div>
//         </div>
//       </section>

//       <section className="features animate-on-scroll">
//         <h2>MaltaMart Features</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>Fast Delivery</h3>
//             <p>Ensure products reach customers in record time.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Secure Payments</h3>
//             <p>All transactions are fully encrypted and safe.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Analytics</h3>
//             <p>Track sales trends and customer behavior easily.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Vendor Collaboration</h3>
//             <p>Communicate seamlessly with other sellers.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Customizable Store</h3>
//             <p>Personalize your shop layout and product listings.</p>
//           </div>
//         </div>
//       </section>

//       <section className="products-section animate-on-scroll">
//         <h2>Available Products</h2>
//         {products.length === 0 ? (
//           <p className="loading-text">Loading products...</p>
//         ) : (
//           <div className="products-grid">
//             {products.map((item, index) => (
//               <div key={index} className="product-card">
//                 <h4>{item.name}</h4>
//                 <p>Price: Rs {item.price}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <section className="activity-section animate-on-scroll">
//         <h2>Recent Activity</h2>
//         <ul className="activity-list">
//           {[
//             "New seller onboarded: 'ABC Electronics'",
//             "Added new product: 'Smart Widget'",
//             "Processed order #1245",
//             "Updated inventory for 'Wireless Earbuds'",
//           ].map((item, index) => (
//             <li key={index} className="activity-item animate-on-scroll">
//               <i className="fa-solid fa-circle-check activity-icon"></i>
//               <span className="activity-text">{item}</span>
//               <span className="activity-time">Just now</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <Footer />
//       <ToastContainer />
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import {
  FaBoxes,
  FaUsers,
  FaShoppingBag,
  FaDollarSign,
  FaCheckCircle,
} from "react-icons/fa";
import { handleError } from "../../utils";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [, setProducts] = useState([]);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://maltamart-backend.vercel.app/products",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      );

      if (!response.ok) {
        setProducts([]);
        return;
      }

      const result = await response.json();
      setProducts(Array.isArray(result) ? result : []);
    } catch (err) {
      setProducts([]);
      handleError(err.message || "Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hero animate-on-scroll">
        <div className="hero-content">
          <h1>Welcome {loggedInUser}</h1>
          <p>
            Your MaltaMart dashboard is ready! Track your store sales, monitor
            inventory, and explore the latest marketplace insights.
          </p>

          <div className="hero-cards">
            <div className="hero-card">
              <FaBoxes className="hero-card-icon" />
              <h3>Total Products</h3>
              <p>23</p>
            </div>
            <div className="hero-card">
              <FaUsers className="hero-card-icon" />
              <h3>Active Sellers</h3>
              <p>128</p>
            </div>
            <div className="hero-card">
              <FaShoppingBag className="hero-card-icon" />
              <h3>Pending Orders</h3>
              <p>5</p>
            </div>
            <div className="hero-card">
              <FaDollarSign className="hero-card-icon" />
              <h3>Total Revenue</h3>
              <p>$12,450</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-summary animate-on-scroll">
        <h2>Marketplace Summary</h2>
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Active Sellers</h3>
            <p>1,254</p>
          </div>
          <div className="summary-card">
            <h3>Total Listings</h3>
            <p>42</p>
          </div>
          <div className="summary-card">
            <h3>Revenue</h3>
            <p>$12,450</p>
          </div>
          <div className="summary-card">
            <h3>Pending Orders</h3>
            <p>18</p>
          </div>
        </div>
      </section>

      <section className="features animate-on-scroll">
        <h2>MaltaMart Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Ensure products reach customers in record time.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>All transactions are fully encrypted and safe.</p>
          </div>
          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Track sales trends and customer behavior easily.</p>
          </div>
          <div className="feature-card">
            <h3>Vendor Collaboration</h3>
            <p>Communicate seamlessly with other sellers.</p>
          </div>
          <div className="feature-card">
            <h3>Customizable Store</h3>
            <p>Personalize your shop layout and product listings.</p>
          </div>
        </div>
      </section>

      <section className="activity-section animate-on-scroll">
        <h2>Recent Activity</h2>
        <ul className="activity-list">
          {[
            "New citrus partner onboarded: 'Sargodha Orange Orchards'",
            "Added new premium variety to catalog: 'Hamlin Orange'",
            "Dispatched citrus export shipment order #3840 to GCC port",
            "Quality assurance grading checklist completed for the harvest",
          ].map((item, index) => (
            <li key={index} className="activity-item animate-on-scroll">
              <span className="activity-content-wrapper">
                <FaCheckCircle className="activity-icon" />
                <span className="activity-text">{item}</span>
              </span>
              <span className="activity-time">Just now</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
