// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FavouritePage.css";
// import { handleSuccess } from "../../utils";
// import Footer from "../../components/Footer/Footer";

// const FavouritePage = () => {
//   const [favourites, setFavourites] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await fetch("https://maltamart-backend.vercel.app/favourites", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await res.json();
//         if (data.success) {
//           setFavourites(
//             data.data.map((f) => ({
//               _id: f._id,
//               name: f.varietyName,
//               description: f.varietyDescription,
//               images: f.varietyImages,
//             }))
//           );
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchFavourites();
//   }, []);

//   const removeFavourite = async (id) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const res = await fetch(`https://maltamart-backend.vercel.app/favourites/remove/${id}`, {
//       method: "DELETE",
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const data = await res.json();
//     if (data.success) {
//       handleSuccess("Removed Favourite");

//       setFavourites((prev) => prev.filter((v) => v._id !== id));
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <>
//       <div className="fav-container">
//         <h1>Your Favourite Varieties</h1>

//         {favourites.length === 0 && (
//           <p className="no-fav">No favourites added yet.</p>
//         )}

//         <div className="fav-grid">
//           {favourites.map((v) => (
//             <div key={v._id} className="fav-card">
//               <h3>{v.name}</h3>
//               {v.description && <p className="fav-desc">{v.description}</p>}
//               {v.images && v.images.length > 0 ? (
//                 <img src={v.images} alt={v.name} />
//               ) : (
//                 <div className="fav-no-img">No Image</div>
//               )}
//               <div className="fav-actions">
//                 <button
//                   className="view-btn"
//                   onClick={() => navigate(`/detail/${v._id}`)}
//                 >
//                   View Details
//                 </button>
//                 <button
//                   className="remove-btn"
//                   onClick={() => removeFavourite(v._id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FavouritePage;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FavouritePage.css";
// import { handleSuccess, handleError } from "../../utils";
// import Footer from "../../components/Footer/Footer";

// const FavouritePage = () => {
//   const [favourites, setFavourites] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFavourites = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/login");
//           return;
//         }

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
//           setFavourites(
//             data.data.map((f) => ({
//               _id: f._id,
//               name: f.varietyName,
//               description: f.varietyDescription,
//               images: f.varietyImages,
//             }))
//           );
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchFavourites();
//   }, [navigate]);

//   const removeFavourite = async (id) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const res = await fetch(`https://maltamart-backend.vercel.app/favourites/remove/${id}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (res.status === 403 || res.status === 401) {
//         localStorage.clear();
//         navigate("/login");
//         return;
//       }

//       const data = await res.json();
//       if (data.success) {
//         handleSuccess("Removed Favourite");
//         setFavourites((prev) => prev.filter((v) => v._id !== id));
//       } else {
//         handleError(data.message);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <div className="fav-container">
//         <h1>Your Favourite Varieties</h1>

//         {favourites.length === 0 && (
//           <p className="no-fav">No favourites added yet.</p>
//         )}

//         <div className="fav-grid">
//           {favourites.map((v) => (
//             <div key={v._id} className="fav-card">
//               <div className="fav-image-frame">
//                 {v.images && v.images.length > 0 ? (
//                   <img src={v.images} alt={v.name} />
//                 ) : (
//                   <div className="fav-no-img">No Image</div>
//                 )}
//               </div>
//               <div className="fav-content-block">
//                 <div className="fav-text-details">
//                   <h3>{v.name}</h3>
//                   {v.description && <p className="fav-desc">{v.description}</p>}
//                 </div>
//                 <div className="fav-actions">
//                   <button
//                     className="view-btn"
//                     onClick={() => navigate(`/detail/${v._id}`)}
//                   >
//                     View Details
//                   </button>
//                   <button
//                     className="remove-btn"
//                     onClick={() => removeFavourite(v._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default FavouritePage;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FavouritePage.css";
import { handleSuccess, handleError } from "../../utils";
import Footer from "../../components/Footer/Footer";

const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

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
          setFavourites(
            data.data.map((f) => ({
              _id: f._id, // This is the favourite document's ID
              varietyId: f.varietyId, // <--- **IMPORTANT**: Ensure your backend `GET /favourites` returns this. This is the actual Variety's ID.
              name: f.varietyName,
              description: f.varietyDescription,
              images: f.varietyImages,
            }))
          );
        } else {
          handleError(data.message || "Failed to fetch favourites.");
        }
      } catch (err) {
        console.error("FavouritePage: Error fetching favourites:", err); // Added specific logging
        handleError("Failed to fetch favourites. Network error.");
      }
    };

    fetchFavourites();
  }, [navigate]);

  const removeFavourite = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`https://maltamart-backend.vercel.app/favourites/remove/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 403 || res.status === 401) {
        localStorage.clear();
        navigate("/login");
        return;
      }

      const data = await res.json();
      if (data.success) {
        handleSuccess("Removed Favourite");
        setFavourites((prev) => prev.filter((v) => v._id !== id));
      } else {
        handleError(data.message || "Failed to remove favourite.");
      }
    } catch (err) {
      console.error("FavouritePage: Error removing favourite:", err); // Added specific logging
      handleError("Failed to remove favourite. Network error.");
    }
  };

  return (
    <>
      <div className="fav-container">
        <h1>Your Favourite Varieties</h1>
 <p className="fav-subtitle">
          Keep track of your preferred citrus breeds and manage your curated orange collection here.
        </p>
        {favourites.length === 0 && (
          <p className="no-fav">No favourites added yet.</p>
        )}

        <div className="fav-grid">
          {favourites.map((favouriteItem) => (
            <div key={favouriteItem._id} className="fav-card">
              <div className="fav-image-frame">
                {favouriteItem.images && favouriteItem.images.length > 0 ? (
                  <img src={favouriteItem.images} alt={favouriteItem.name} />
                ) : (
                  <div className="fav-no-img">No Image</div>
                )}
              </div>
              <div className="fav-content-block">
                <div className="fav-text-details">
                  <h3>{favouriteItem.name}</h3>
                  {favouriteItem.description && <p className="fav-desc">{favouriteItem.description}</p>}
                </div>
                <div className="fav-actions">
                  <button
                    className="view-btn"
                    // --- FINAL CHANGE HERE ---
                    // Correctly passing the actual varietyId to the detail page
                    onClick={() => navigate(`/detail/${favouriteItem.varietyId}`)}
                  >
                    View Details
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFavourite(favouriteItem._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FavouritePage;