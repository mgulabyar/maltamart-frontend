
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import "./VarietyDetail.css";
// import {
//   FaTruck,
//   FaBoxOpen,
//   FaCheckCircle,
//   FaGlobe,
//   FaLeaf,
//   FaTemperatureLow,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaWeightHanging,
//   FaMedal,
//   FaInfoCircle,
//   FaHeart,
//   FaShieldAlt,
//   FaClock,
//   FaBoxes,
//   FaMosque,
//   FaWarehouse,
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

//         if (res.status === 403 || res.status === 401) {
//           localStorage.clear();
//           navigate("/login");
//           return;
//         }

//         const data = await res.json();
//         if (data.success) {
//           const exists = data.data.some((v) => v.varietyId === id);
//           setIsFavourite(exists);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     checkFavourite();
//   }, [id, navigate]);

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
//       { threshold: 0.15 }
//     );
//     sections.forEach((s) => observer.observe(s));
//     return () => sections.forEach((s) => observer.unobserve(s));
//   }, [variety]);

//   const toggleFavourite = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return alert("Please login first!");

//     try {
//       if (!isFavourite) {
//         const res = await fetch(`https://maltamart-backend.vercel.app/favourites/add/${id}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (res.status === 403 || res.status === 401) {
//           localStorage.clear();
//           navigate("/login");
//           return;
//         }

//         const data = await res.json();
//         if (data.success) {
//           setIsFavourite(true);
//           navigate("/favourite");
//         } else {
//           alert(data.message);
//         }
//       } else {
//         const res = await fetch(
//           `https://maltamart-backend.vercel.app/favourites/remove-by-variety/${id}`,
//           {
//             method: "DELETE",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (res.status === 403 || res.status === 401) {
//           localStorage.clear();
//           navigate("/login");
//           return;
//         }

//         const data = await res.json();
//         if (data.success) {
//           setIsFavourite(false);
//         } else {
//           alert(data.message);
//         }
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

//   const specs = [
//     { icon: <FaCalendarAlt />, label: "Season Window", value: "Nov to Mar (Peak)" },
//     { icon: <FaMapMarkerAlt />, label: "Origin Region", value: "Sargodha & Punjab" },
//     { icon: <FaTemperatureLow />, label: "Storage Temp", value: "2–8°C for Transit" },
//     { icon: <FaWeightHanging />, label: "Avg Fruit Weight", value: "140–220 grams" },
//     { icon: <FaLeaf />, label: "Vitamin C", value: "40–50 mg / 100g" },
//     { icon: <FaGlobe />, label: "Juice Yield", value: "40% to 45%" },
//     { icon: <FaClock />, label: "Shelf Life", value: "18–25 days" },
//     { icon: <FaMedal />, label: "Quality Grade", value: "Premium Export" }
//   ];

//   const packagesAndLogistics = [
//     { icon: <FaBoxOpen />, label: "10 kg Printed Carton", desc: "Rigid corrugated boxes with custom brand printing" },
//     { icon: <FaBoxes />, label: "Palletized Cartons", desc: "Fumigated wooden pallets ready for sea/EU containers" },
//     { icon: <FaTruck />, label: "Reefer Containers", desc: "Strictly monitored cold chain storage (2-8°C)" },
//     { icon: <FaShieldAlt />, label: "Secure Transit", desc: "Full container stuffing supervision and export insurance" }
//   ];

//   const compliance = [
//     { icon: <FaLeaf />, label: "Phytosanitary Certified", desc: "Verified plant health clearance docs" },
//     { icon: <FaGlobe />, label: "Global GAP Compliant", desc: "Good Agricultural Practices standard audit" },
//     { icon: <FaWarehouse />, label: "ISO Packing House", desc: "Processed in certified packing houses" },
//     { icon: <FaMosque />, label: "Halal Processing", desc: "Compliance under strict sanitary standards" },
//     { icon: <FaCheckCircle />, label: "100% Fresh Harvest", desc: "Harvested only after orders are locked" },
//     { icon: <FaShieldAlt />, label: "Pre-Shipment Check", desc: "Third-party quality verification before sailing" }
//   ];

//   return (
//     <>
//       <div className="detail-page">
//         <section className="section-one section-animate">
//           <div className="left">
//             <img src={variety.images} alt={variety.name} />
//           </div>
//           <div className="right">
//             <span className="detail-badge">Premium Citrus Variety</span>
//             <h1 className="detail-hero-title">{variety.name}</h1>
//             <p className="detail-hero-subtitle">{variety.description}</p>
//             <p className="detail-hero-subtitle">
//               Experience the vibrant taste of MaltaMart oranges – juicy, sweet,
//               and packed with natural goodness. From classic Valencia to exotic
//               Blood and Cara Cara varieties each orange is bursting with flavor,
//               perfect for fresh eating, refreshing juices, and gourmet recipes.
//               Handpicked for quality, our oranges bring freshness and health to
//               every bite.
//             </p>
//             <div className="orange-buttons">
//               <button className="btn-primary" onClick={goToQuote}>
//                 Get Quote
//               </button>
//               <button className={`btn-outline ${isFavourite ? "active-fav" : ""}`} onClick={toggleFavourite}>
//                 <FaHeart /> {isFavourite ? "Added to Favourites" : "Add to Favourites"}
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className="detail-section section-animate">
//           <div className="detail-section-header">
//             <h2><FaInfoCircle /> Crop Specifications</h2>
//             <p>Verified physical and nutritional metrics of this citrus breed.</p>
//           </div>
//           <div className="detail-cards-grid">
//             {specs.map((s, i) => (
//               <div className="detail-card" key={i}>
//                 <div className="spec-icon">{s.icon}</div>
//                 <h3>{s.label}</h3>
//                 <p>{s.value}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="detail-section section-animate">
//           <div className="detail-section-header">
//             <h2><FaBoxOpen /> Packaging & Shipping</h2>
//             <p>Global export-grade custom packing and temperature-controlled logistics.</p>
//           </div>
//           <div className="detail-cards-grid">
//             {packagesAndLogistics.map((p, i) => (
//               <div className="detail-card" key={i}>
//                 <div className="spec-icon">{p.icon}</div>
//                 <h3>{p.label}</h3>
//                 <p>{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="detail-section section-animate">
//           <div className="detail-section-header">
//             <h2><FaCheckCircle /> Quality & Certifications</h2>
//             <p>International compliance audit, phytosanitary checks, and farm guarantees.</p>
//           </div>
//           <div className="detail-cards-grid">
//             {compliance.map((c, i) => (
//               <div className="detail-card" key={i}>
//                 <div className="spec-icon">{c.icon}</div>
//                 <h3>{c.label}</h3>
//                 <p>{c.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="detail-section detail-footer section-animate">
//           <div className="detail-footer-content">
//             <h2>Ready to discuss {variety.name} for your market?</h2>
//             <p>
//               Share your target country, required volume and preferred season —
//               our team will respond with a custom export proposal.
//             </p>
//             <div className="detail-hero-actions">
//               <button className="btn-primary" onClick={goToQuote}>
//                 Talk to Export Team
//               </button>
//               <button className={`btn-outline ${isFavourite ? "active-fav" : ""}`} onClick={toggleFavourite}>
//                 <FaHeart /> {isFavourite ? "Added to Favourites" : "Add to Favourites"}
//               </button>
//             </div>
//             <p className="detail-footer-copy">
//               © 2025 MaltaMart · Premium Citrus Export & Supply
//             </p>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
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
              © 2026 MaltaMart · Premium Citrus Export & Supply
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VarietyDetail;
