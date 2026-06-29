// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./VarietyDetail.css";
// import {
//   FaTruck,
//   FaBoxOpen,
//   FaCheckCircle,
//   FaRegClock,
//   FaGlobe,
//   FaTags,
//   FaStar,
//   FaLeaf,
//   FaTemperatureLow,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaWeightHanging,
//   FaChartLine,
//   FaMedal,
//   FaClipboardList,
//   FaQuestionCircle,
//   FaInfoCircle,
//   FaHeart,
//   FaWeight,
//   FaFireAlt,
//   FaTint,
//   FaGlassWhiskey,
//   FaAppleAlt,
//   FaBolt,
//   FaShieldAlt,
//   FaClock,
//   FaArrowsAltV,
//   FaPalette,
//   FaSeedling,
//   FaGripLines,
//   FaCircleNotch,
//   FaBoxes,
//   FaShippingFast,
//   FaCube,
//   FaLayerGroup,
//   FaBarcode,
//   FaTag,
//   FaSnowflake,
//   FaMapMarkedAlt,
//   FaPlane,
//   FaFlag,
//   FaSearch,
//   FaClipboardCheck,
//   FaMosque,
//   FaWarehouse,
//   FaChartBar,
//   FaMoneyBillWave,
//   FaIndustry,
//   FaUserCheck,
//   FaCoins,
//   FaArrowUp,
//   FaShoppingCart,
//   FaHeadset,
//   FaFileAlt,
//   FaHandsHelping,
//   FaBan,
//   FaWater,
//   FaSun,
// } from "react-icons/fa";

// const VarietyDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [variety, setVariety] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isFavourite, setIsFavourite] = useState(false);

//   useEffect(() => {
//     const fetchVariety = async () => {
//       try {
//         const res = await fetch(`https://maltamart-backend.vercel.app/varieties/${id}`);
//         const data = await res.json();
//         if (data.success) {
//           setVariety(data.data);
//         } else {
//           setError(data.error || "Variety not found");
//         }
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchVariety();

//     const checkFavourite = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await fetch("https://maltamart-backend.vercel.app/favourites", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await res.json();

//         if (data.success) {
//           const exists = data.data.some((v) => v._id === id);
//           setIsFavourite(exists);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     checkFavourite();
//   }, [id]);

//   useEffect(() => {
//     const sections = document.querySelectorAll(".section-animate");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     sections.forEach((s) => observer.observe(s));
//     return () => sections.forEach((s) => observer.unobserve(s));
//   }, [variety]);

//   useEffect(() => {
//     const sections = document.querySelectorAll(".section-animate");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   const toggleFavourite = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return alert("Please login first!");

//     try {
//       if (!isFavourite) {
//         const res = await fetch("https://maltamart-backend.vercel.app/favourites/add", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ varietyId: id }),
//         });

//         const data = await res.json();
//         if (data.success) setIsFavourite(true);
//         else alert(data.message);
//       } else {
//         const res = await fetch(
//           `https://maltamart-backend.vercel.app/favourites/remove/${id}`,
//           {
//             method: "DELETE",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = await res.json();
//         if (data.success) setIsFavourite(false);
//         else alert(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const goToQuote = () => {
//     navigate("/contact");
//   };

//   if (loading) return <div className="detail-loader">Loading...</div>;
//   if (error) return <div className="detail-error">{error}</div>;
//   if (!variety) return <h2 className="detail-error">Variety Not Found</h2>;

//   const stats = [
//     {
//       icon: <FaBoxOpen />,
//       title: "Running Orders",
//       value: 12,
//       desc: "Orders currently being processed",
//     },
//     {
//       icon: <FaRegClock />,
//       title: "Pending Orders",
//       value: 5,
//       desc: "Orders awaiting confirmation",
//     },
//     {
//       icon: <FaCheckCircle />,
//       title: "Completed Orders",
//       value: 47,
//       desc: "Orders successfully delivered",
//     },
//     {
//       icon: <FaStar />,
//       title: "Avg. Buyer Rating",
//       value: 4.5,
//       desc: "Average rating by buyers",
//     },
//     {
//       icon: <FaTruck />,
//       title: "Ships Shipped",
//       value: 20,
//       desc: "Total shipments this season",
//     },
//     {
//       icon: <FaMedal />,
//       title: "Top Quality Score",
//       value: "5",
//       desc: "Quality grade based on inspection",
//     },
//     {
//       icon: <FaLeaf />,
//       title: "Organic Certified",
//       value: "4.9",
//       desc: "Verified organic produce",
//     },
//     {
//       icon: <FaGlobe />,
//       title: "Export Countries",
//       value: 15,
//       desc: "Global destinations we serve",
//     },
//   ];

//   const heroTags = [
//     "Premium Grade",
//     "Export Quality",
//     "Hand Picked",
//     "Cold Chain",
//   ];

//   const nutrition = [
//     { icon: <FaFireAlt />, label: "Calories (per 100g)", value: "45–50 kcal" },
//     { icon: <FaWeight />, label: "Sugar (Brix)", value: "10–12%" },
//     { icon: <FaTint />, label: "Acidity", value: "0.8–1.0%" },
//     { icon: <FaGlassWhiskey />, label: "Juice Content", value: "40–45%" },
//     { icon: <FaAppleAlt />, label: "Vitamin C", value: "40–50 mg" },
//     { icon: <FaLeaf />, label: "Fiber", value: "2.4 g" },
//     { icon: <FaBolt />, label: "Potassium", value: "180 mg" },
//     { icon: <FaShieldAlt />, label: "Antioxidants", value: "High" },
//   ];
//   const physical = [
//     { icon: <FaWeightHanging />, label: "Avg Weight", value: "140–220 g" },
//     { icon: <FaCircleNotch />, label: "Diameter", value: "55–75 mm" },
//     { icon: <FaGripLines />, label: "Skin Texture", value: "Smooth / Medium" },
//     { icon: <FaPalette />, label: "Color Grade", value: "Deep Orange" },
//     { icon: <FaSeedling />, label: "Seed Count", value: "5–10 / fruit" },
//     { icon: <FaArrowsAltV />, label: "Firmness", value: "Medium–Firm" },
//     { icon: <FaClock />, label: "Shelf Life", value: "18–25 days" },
//     { icon: <FaLeaf />, label: "Ripening Index", value: "Ideal for export" },
//   ];
//   const packagingOptions = [
//     {
//       icon: <FaBoxOpen />,
//       label: "8 kg Printed Carton",
//       desc: "8 kg carton with custom printing",
//     },
//     {
//       icon: <FaBoxes />,
//       label: "10 kg Printed Carton",
//       desc: "10 kg carton with vibrant branding",
//     },
//     {
//       icon: <FaShippingFast />,
//       label: "Loose Bulk Export",
//       desc: "Bulk export packaging for large orders",
//     },
//     {
//       icon: <FaCube />,
//       label: "Plastic Crates (Local)",
//       desc: "Durable crates for local distribution",
//     },
//     {
//       icon: <FaLayerGroup />,
//       label: "Mesh Bags (Custom)",
//       desc: "Customizable mesh bags for different quantities",
//     },
//     {
//       icon: <FaBarcode />,
//       label: "Palletized Cartons for EU",
//       desc: "Palletized cartons ready for EU shipment",
//     },
//     {
//       icon: <FaTag />,
//       label: "Custom Branding Available",
//       desc: "Add your brand logo to any packaging",
//     },
//   ];

//   const logistics = [
//     {
//       icon: <FaSnowflake />,
//       label: "Reefer containers (2–8°C)",
//       desc: "Temperature-controlled containers for freshness",
//     },
//     {
//       icon: <FaPlane />,
//       label: "Air & Sea shipment available",
//       desc: "Flexible shipment modes via air and sea",
//     },
//     {
//       icon: <FaMapMarkedAlt />,
//       label: "Door-to-port & door-to-door",
//       desc: "Complete shipping solutions for buyers",
//     },
//     {
//       icon: <FaTruck />,
//       label: "Real-time shipment tracking",
//       desc: "Track your shipment from origin to destination",
//     },
//     {
//       icon: <FaShieldAlt />,
//       label: "Export insurance coverage",
//       desc: "Insurance for shipment safety and reliability",
//     },
//     {
//       icon: <FaSnowflake />,
//       label: "Cold chain maintained end-to-end",
//       desc: "Maintaining cold chain throughout shipment",
//     },
//     {
//       icon: <FaBoxes />,
//       label: "Container stuffing supervision",
//       desc: "Expert supervision to ensure proper packing",
//     },
//   ];

//   const certifications = [
//     {
//       icon: <FaLeaf />,
//       label: "Phytosanitary Certificate",
//       desc: "Verified plant health documentation",
//     },
//     {
//       icon: <FaGlobe />,
//       label: "Global GAP (on request)",
//       desc: "Good Agricultural Practices compliance",
//     },
//     {
//       icon: <FaWarehouse />,
//       label: "ISO compliant packing house",
//       desc: "Packing facilities following ISO standards",
//     },
//     {
//       icon: <FaMosque />,
//       label: "Halal compliant processing",
//       desc: "Processed according to Halal guidelines",
//     },
//     {
//       icon: <FaClipboardCheck />,
//       label: "Food safety protocols",
//       desc: "Strict hygiene and food safety adherence",
//     },
//     {
//       icon: <FaSearch />,
//       label: "Pre-shipment inspection",
//       desc: "Inspected before dispatch for quality",
//     },
//     {
//       icon: <FaFlag />,
//       label: "Country-specific compliance",
//       desc: "Meets regulatory requirements for export",
//     },
//   ];

//   const marketInsights = [
//     {
//       icon: <FaGlobe />,
//       label: "High demand in Middle East",
//       desc: "Strong market interest in Gulf countries",
//     },
//     {
//       icon: <FaChartBar />,
//       label: "Stable EU demand in winter",
//       desc: "Consistent export to Europe during off-season",
//     },
//     {
//       icon: <FaMoneyBillWave />,
//       label: "Price peak: Nov–Jan",
//       desc: "Optimal selling period for maximum profit",
//     },
//     {
//       icon: <FaIndustry />,
//       label: "Strong in juice industry",
//       desc: "High processing demand for juice production",
//     },
//     {
//       icon: <FaUserCheck />,
//       label: "Repeat export buyers",
//       desc: "Loyal customers across markets",
//     },
//     {
//       icon: <FaCoins />,
//       label: "Competitive pricing segment",
//       desc: "Well-positioned price range for bulk buyers",
//     },
//     {
//       icon: <FaArrowUp />,
//       label: "Growing Asian market interest",
//       desc: "Emerging opportunities in Asia",
//     },
//     {
//       icon: <FaShoppingCart />,
//       label: "Strong domestic retail demand",
//       desc: "High consumption within local markets",
//     },
//   ];

//   const guarantees = [
//     {
//       icon: <FaSeedling />,
//       label: "100% fresh harvest",
//       desc: "All oranges are freshly picked from premium orchards",
//     },
//     {
//       icon: <FaBan />,
//       label: "No artificial ripening",
//       desc: "Naturally ripened for perfect taste",
//     },
//     {
//       icon: <FaHandsHelping />,
//       label: "Manual sorting & grading",
//       desc: "Each fruit is carefully inspected by hand",
//     },
//     {
//       icon: <FaBoxes />,
//       label: "Double-checked packaging",
//       desc: "Secure and professional packaging",
//     },
//     {
//       icon: <FaClock />,
//       label: "On-time dispatches",
//       desc: "We ensure timely delivery of every order",
//     },
//     {
//       icon: <FaFileAlt />,
//       label: "Transparent documentation",
//       desc: "All necessary certificates and records included",
//     },
//     {
//       icon: <FaHeadset />,
//       label: "Post-sales support",
//       desc: "Dedicated team for buyer assistance",
//     },
//   ];

//   const faqs = [
//     {
//       q: "What is the shelf life?",
//       a: "Between 18–25 days under ideal cold storage conditions.",
//     },
//     {
//       q: "What is the minimum order?",
//       a: "For export, 1×20ft reefer container. For local, negotiable.",
//     },
//     {
//       q: "Which countries do you export to?",
//       a: "Middle East, Far East, and selected EU markets.",
//     },
//     {
//       q: "What payment methods are available?",
//       a: "LC, TT and local bank transfer (for domestic).",
//     },
//     {
//       q: "Is branding customizable?",
//       a: "Yes, private labels & custom cartons are available.",
//     },
//     {
//       q: "Do you support mixed loads?",
//       a: "Yes, multiple varieties can be loaded in same container.",
//     },
//   ];

//   const comparisons = [
//     { name: "Kinnow", note: "Higher juice, strong aroma" },
//     { name: "Mosambi", note: "Milder, sweeter taste" },
//     { name: "Orange", note: "More global recognition" },
//     { name: "Grapefruit", note: "More bitter & tangy" },
//     { name: "Clementine", note: "Smaller, seedless option" },
//   ];

//   const comparisonIcons = [
//     <FaWater />,
//     <FaLeaf />,
//     <FaSun />,
//     <FaAppleAlt />,
//     <FaSeedling />,
//   ];

//   return (
//     <div className="detail-page">
//       <h1>Details of {variety.name}</h1>
//       <section className="section-one section-animate">
//         <div className="left">
//           <img src={variety.images} alt={variety.name} />
//         </div>
//         <div className="right">
//           <h1 className="detail-hero-title">{variety.name}</h1>
//           <p className="detail-hero-subtitle">{variety.description}</p>
//           <p className="detail-hero-subtitle">
//             Experience the vibrant taste of MaltaMart oranges – juicy, sweet,
//             and packed with natural goodness. From classic Valencia to exotic
//             Blood and Cara Cara varieties each orange is bursting with flavor,
//             perfect for fresh eating, refreshing juices, and gourmet recipes.
//             Handpicked for quality, our oranges bring freshness and health to
//             every bite.
//           </p>
//           <div className="orange-buttons">
//             <button className="btn-text" onClick={goToQuote}>
//               Get Quote
//             </button>
//             <button
//               className="btn-text"
//               onClick={() => navigate("/view-varieties")}
//             >
//               View More
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="detail-hero section-animate">
//         <div className="detail-hero-left">
//           <p className="detail-badge">Premium Citrus Variety</p>
//           <div className="detail-hero-tags">
//             {heroTags.map((t, i) => (
//               <span key={i} className="detail-tag-pill">
//                 {t}
//               </span>
//             ))}
//           </div>
//           <div className="detail-hero-stats">
//             {stats.map((s, i) => (
//               <div key={i} className="detail-hero-stat-card">
//                 <div className="export">
//                   <div className="export-icons">{s.icon}</div>
//                   <h4 className="export-value">{s.value}</h4>
//                 </div>
//                 <h5 className="export-title">{s.title}</h5>
//                 <p className="export-desc">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="detail-hero-actions">
//             <button className="btn-primary" onClick={goToQuote}>
//               <FaInfoCircle /> Request Export Quote
//             </button>
//             <button
//               className={`btn-outline ${isFavourite ? "text-red-500" : ""}`}
//               onClick={toggleFavourite}
//             >
//               <FaHeart />{" "}
//               {isFavourite ? "Added to Favourites" : "Add to Favourites"}
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaInfoCircle /> Variety Overview
//           </h2>
//           <p>Key information and quick facts about this citrus variety.</p>
//         </div>
//         <div className="detail-cards-grid">
//           <div className="detail-card">
//             <FaCalendarAlt />
//             <h3>Season Window</h3>
//             <p>Peak season: November to March.</p>
//           </div>
//           <div className="detail-card">
//             <FaMapMarkerAlt />
//             <h3>Origin Region</h3>
//             <p>Selected orchards of Punjab & Sindh.</p>
//           </div>
//           <div className="detail-card">
//             <FaTemperatureLow />
//             <h3>Storage Temp</h3>
//             <p>2–8°C recommended for export shipments.</p>
//           </div>
//           <div className="detail-card">
//             <FaGlobe />
//             <h3>HS Code</h3>
//             <p>0805 (Citrus fruit, fresh)</p>
//           </div>
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaLeaf /> Nutritional Profile
//           </h2>
//           <p>Nutritional values are approximate and for reference.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {nutrition.map((n, i) => (
//             <div className="detail-card small" key={i}>
//               <div className="nutrition-icon">{n.icon}</div>
//               <h3>{n.label}</h3>
//               <p>{n.value}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaWeightHanging /> Physical Specifications
//           </h2>
//           <p>Grading is done by weight, size and visual quality.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {physical.map((p, i) => (
//             <div className="detail-card small" key={i}>
//               <p>{p.icon}</p>
//               <h3>{p.label}</h3>
//               <p>{p.value}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaBoxOpen /> Packaging Options
//           </h2>
//           <p>Multiple packing formats available for local and export.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {packagingOptions.map((p, i) => (
//             <div className="detail-card" key={i}>
//               <p>{p.icon}</p>
//               <h3>{p.label}</h3>
//               <p>{p.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaTruck /> Logistics & Shipping
//           </h2>
//           <p>End-to-end managed logistics for global shipments.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {logistics.map((l, i) => (
//             <div className="detail-card" key={i}>
//               {l.icon}
//               <h3>{l.label}</h3>
//               <p>{l.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaClipboardList /> Certifications & Compliance
//           </h2>
//           <p>Quality and compliance documents available on request.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {certifications.map((c, i) => (
//             <div className="detail-card" key={i}>
//               <p>{c.icon}</p>
//               <h3>{c.label}</h3>
//               <p>{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaChartLine /> Market Insights
//           </h2>
//           <p>High-level insights based on historical trade trends.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {marketInsights.map((m, i) => (
//             <div className="detail-card" key={i}>
//               <p>{m.icon}</p>
//               <h3>{m.label}</h3>
//               <p>{m.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaCheckCircle /> Seller Guarantees
//           </h2>
//           <p>We stand behind every shipment with clear guarantees.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {guarantees.map((g, i) => (
//             <div className="detail-card" key={i}>
//               <p>{g.icon}</p>
//               <h3>{g.label}</h3>
//               <p>{g.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section faq-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaQuestionCircle /> Frequently Asked Questions
//           </h2>
//           <p>Answers to the most common buyer questions.</p>
//         </div>

//         <div className="faq-accordion">
//           {faqs.map((f, i) => (
//             <div className="faq-item" key={i}>
//               <button
//                 className="faq-question"
//                 onClick={(e) => {
//                   const content = e.currentTarget.nextElementSibling;
//                   content.style.maxHeight =
//                     content.style.maxHeight && content.style.maxHeight !== "0px"
//                       ? "0px"
//                       : content.scrollHeight + "px";
//                   e.currentTarget.classList.toggle("active");
//                 }}
//               >
//                 {f.q}
//                 <span className="faq-icon">+</span>
//               </button>
//               <div className="faq-answer">
//                 <p>{f.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="detail-section section-animate">
//         <div className="detail-section-header">
//           <h2>
//             <FaTags /> Compare with Other Varieties
//           </h2>
//           <p>Positioning of this variety vs other common citrus types.</p>
//         </div>
//         <div className="detail-cards-grid">
//           {comparisons.map((c, i) => (
//             <div className="detail-card comparison-card" key={i}>
//               <div className="comparison-icon">{comparisonIcons[i]}</div>
//               <h3>{c.name}</h3>
//               <p>{c.note}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="detail-section detail-footer section-animate">
//         <div className="detail-footer-content">
//           <h2>Ready to discuss {variety.name} for your market?</h2>
//           <p>
//             Share your target country, required volume and preferred season —
//             our team will respond with a custom export proposal.
//           </p>
//           <div className="detail-hero-actions">
//             <button className="btn-primary" onClick={goToQuote}>
//               <FaInfoCircle /> Talk to Export Team
//             </button>
//             <button
//               className={`btn-outline ${isFavourite ? "text-red-500" : ""}`}
//               onClick={toggleFavourite}
//             >
//               <FaHeart />{" "}
//               {isFavourite ? "Added to Favourites" : "Add to Favourites"}
//             </button>
//           </div>
//           <p className="detail-footer-copy">
//             © 2025 MaltaMart · Premium Citrus Export & Supply
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default VarietyDetail;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./VarietyDetail.css";
import {
  FaTruck,
  FaBoxOpen,
  FaCheckCircle,
  FaGlobe,
  FaLeaf,
  FaTemperatureLow,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWeightHanging,
  FaMedal,
  FaInfoCircle,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaBoxes,
  FaMosque,
  FaWarehouse,
} from "react-icons/fa";

const VarietyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [variety, setVariety] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const fetchVariety = async () => {
      try {
        const res = await fetch(`https://maltamart-backend.vercel.app/varieties/${id}`);
        const data = await res.json();
        if (data.success) {
          setVariety(data.data);
        } else {
          setError(data.error || "Variety not found");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchVariety();

    const checkFavourite = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch("https://maltamart-backend.vercel.app/favourites", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 403 || res.status === 401) {
          localStorage.clear();
          navigate("/login");
          return;
        }

        const data = await res.json();
        if (data.success) {
          const exists = data.data.some((v) => v.varietyId === id);
          setIsFavourite(exists);
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkFavourite();
  }, [id, navigate]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, [variety]);

  const toggleFavourite = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first!");

    try {
      if (!isFavourite) {
        const res = await fetch(`https://maltamart-backend.vercel.app/favourites/add/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 403 || res.status === 401) {
          localStorage.clear();
          navigate("/login");
          return;
        }

        const data = await res.json();
        if (data.success) {
          setIsFavourite(true);
          navigate("/favourite");
        } else {
          alert(data.message);
        }
      } else {
        const res = await fetch(
          `https://maltamart-backend.vercel.app/favourites/remove-by-variety/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 403 || res.status === 401) {
          localStorage.clear();
          navigate("/login");
          return;
        }

        const data = await res.json();
        if (data.success) {
          setIsFavourite(false);
        } else {
          alert(data.message);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const goToQuote = () => {
    navigate("/contact");
  };

  if (loading) return <div className="detail-loader">Loading...</div>;
  if (error) return <div className="detail-error">{error}</div>;
  if (!variety) return <h2 className="detail-error">Variety Not Found</h2>;

  const specs = [
    { icon: <FaCalendarAlt />, label: "Season Window", value: "Nov to Mar (Peak)" },
    { icon: <FaMapMarkerAlt />, label: "Origin Region", value: "Sargodha & Punjab" },
    { icon: <FaTemperatureLow />, label: "Storage Temp", value: "2–8°C for Transit" },
    { icon: <FaWeightHanging />, label: "Avg Fruit Weight", value: "140–220 grams" },
    { icon: <FaLeaf />, label: "Vitamin C", value: "40–50 mg / 100g" },
    { icon: <FaGlobe />, label: "Juice Yield", value: "40% to 45%" },
    { icon: <FaClock />, label: "Shelf Life", value: "18–25 days" },
    { icon: <FaMedal />, label: "Quality Grade", value: "Premium Export" }
  ];

  const packagesAndLogistics = [
    { icon: <FaBoxOpen />, label: "10 kg Printed Carton", desc: "Rigid corrugated boxes with custom brand printing" },
    { icon: <FaBoxes />, label: "Palletized Cartons", desc: "Fumigated wooden pallets ready for sea/EU containers" },
    { icon: <FaTruck />, label: "Reefer Containers", desc: "Strictly monitored cold chain storage (2-8°C)" },
    { icon: <FaShieldAlt />, label: "Secure Transit", desc: "Full container stuffing supervision and export insurance" }
  ];

  const compliance = [
    { icon: <FaLeaf />, label: "Phytosanitary Certified", desc: "Verified plant health clearance docs" },
    { icon: <FaGlobe />, label: "Global GAP Compliant", desc: "Good Agricultural Practices standard audit" },
    { icon: <FaWarehouse />, label: "ISO Packing House", desc: "Processed in certified packing houses" },
    { icon: <FaMosque />, label: "Halal Processing", desc: "Compliance under strict sanitary standards" },
    { icon: <FaCheckCircle />, label: "100% Fresh Harvest", desc: "Harvested only after orders are locked" },
    { icon: <FaShieldAlt />, label: "Pre-Shipment Check", desc: "Third-party quality verification before sailing" }
  ];

  return (
    <>
      <div className="detail-page">
        <section className="section-one section-animate">
          <div className="left">
            <img src={variety.images} alt={variety.name} />
          </div>
          <div className="right">
            <span className="detail-badge">Premium Citrus Variety</span>
            <h1 className="detail-hero-title">{variety.name}</h1>
            <p className="detail-hero-subtitle">{variety.description}</p>
            <p className="detail-hero-subtitle">
              Experience the vibrant taste of MaltaMart oranges – juicy, sweet,
              and packed with natural goodness. From classic Valencia to exotic
              Blood and Cara Cara varieties each orange is bursting with flavor,
              perfect for fresh eating, refreshing juices, and gourmet recipes.
              Handpicked for quality, our oranges bring freshness and health to
              every bite.
            </p>
            <div className="orange-buttons">
              <button className="btn-primary" onClick={goToQuote}>
                Get Quote
              </button>
              <button className={`btn-outline ${isFavourite ? "active-fav" : ""}`} onClick={toggleFavourite}>
                <FaHeart /> {isFavourite ? "Added to Favourites" : "Add to Favourites"}
              </button>
            </div>
          </div>
        </section>

        <section className="detail-section section-animate">
          <div className="detail-section-header">
            <h2><FaInfoCircle /> Crop Specifications</h2>
            <p>Verified physical and nutritional metrics of this citrus breed.</p>
          </div>
          <div className="detail-cards-grid">
            {specs.map((s, i) => (
              <div className="detail-card" key={i}>
                <div className="spec-icon">{s.icon}</div>
                <h3>{s.label}</h3>
                <p>{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section section-animate">
          <div className="detail-section-header">
            <h2><FaBoxOpen /> Packaging & Shipping</h2>
            <p>Global export-grade custom packing and temperature-controlled logistics.</p>
          </div>
          <div className="detail-cards-grid">
            {packagesAndLogistics.map((p, i) => (
              <div className="detail-card" key={i}>
                <div className="spec-icon">{p.icon}</div>
                <h3>{p.label}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section section-animate">
          <div className="detail-section-header">
            <h2><FaCheckCircle /> Quality & Certifications</h2>
            <p>International compliance audit, phytosanitary checks, and farm guarantees.</p>
          </div>
          <div className="detail-cards-grid">
            {compliance.map((c, i) => (
              <div className="detail-card" key={i}>
                <div className="spec-icon">{c.icon}</div>
                <h3>{c.label}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section detail-footer section-animate">
          <div className="detail-footer-content">
            <h2>Ready to discuss {variety.name} for your market?</h2>
            <p>
              Share your target country, required volume and preferred season —
              our team will respond with a custom export proposal.
            </p>
            <div className="detail-hero-actions">
              <button className="btn-primary" onClick={goToQuote}>
                Talk to Export Team
              </button>
              <button className={`btn-outline ${isFavourite ? "active-fav" : ""}`} onClick={toggleFavourite}>
                <FaHeart /> {isFavourite ? "Added to Favourites" : "Add to Favourites"}
              </button>
            </div>
            <p className="detail-footer-copy">
              © 2025 MaltaMart · Premium Citrus Export & Supply
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VarietyDetail;