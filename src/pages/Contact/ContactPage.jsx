// import React, { useEffect, useRef } from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import ExpertImage from "../../images/asfand.jpeg";
// import "./ContactPage.css";

// const ContactPage = () => {
//   const imageRef = useRef(null);
//   const detailsRef = useRef(null);

//   useEffect(() => {
//     const imageEl = imageRef.current;
//     const detailsEl = detailsRef.current;

//     if (imageEl && detailsEl) {
//       setTimeout(() => {
//         imageEl.classList.add("visible");
//         detailsEl.classList.add("visible");
//       }, 200);
//     }
//   }, []);

//   return (
//     <div className="contact-page">
//       <div className="contact-header">
//         <h1>Talk to Our Expert</h1>
//         <p>Reach out to our export specialist for any queries or export guidance.</p>
//       </div>

//       <div className="contact-section">
//         <div className="contact-image" ref={imageRef}>
//           <img src={ExpertImage} alt="Expert" />
//         </div>

//         <div className="contact-details" ref={detailsRef}>
//           <div>
//             <FaPhoneAlt className="contact-icon" />
//             <a href="tel:+1234567890">+92 336 7190072</a>
//           </div>

//           <div>
//             <FaEnvelope className="contact-icon" />
//             <a href="mailto:expert@maltaexport.com">shabanaishaq.work@gmail.com</a>
//           </div>

//           <div>
//             <FaMapMarkerAlt className="contact-icon" />
//             <p>Faisalabad, Punjab, Pakistan</p>
//           </div>

//           <div className="contact-buttons">
//             <a href="tel:+92 336 7190072" className="btn-call">
//               Call Expert
//             </a>
//             <a href="mailto:shabanaishaq.work@gmail.com" className="btn-email">
//               Email Expert
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ExpertImage from "../../images/asfand.jpeg";
import Footer from "../../components/Footer/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  const imageRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const detailsEl = detailsRef.current;

    if (imageEl && detailsEl) {
      setTimeout(() => {
        imageEl.classList.add("visible");
        detailsEl.classList.add("visible");
      }, 200);
    }
  }, []);

  return (
    <>
      <div className="contact-page">
        <div className="contact-header">
          <h1>Talk to Our Expert</h1>
          <p>Reach out to our export specialist for any queries or export guidance.</p>
        </div>

        <div className="contact-section">
          <div className="contact-image" ref={imageRef}>
            <img src={ExpertImage} alt="Expert" />
          </div>

          <div className="contact-details" ref={detailsRef}>
            <div>
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+923367190072">+92 336 7190072</a>
            </div>

            <div>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:shabanaishaq.work@gmail.com">shabanaishaq.work@gmail.com</a>
            </div>

            <div>
              <FaMapMarkerAlt className="contact-icon" />
              <p>Faisalabad, Punjab, Pakistan</p>
            </div>

            <div className="contact-buttons">
              <a href="tel:+923367190072" className="btn-call">
                Call Expert
              </a>
              <a href="mailto:shabanaishaq.work@gmail.com" className="btn-email">
                Email Expert
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
