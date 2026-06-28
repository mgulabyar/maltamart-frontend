import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FavouritePage.css";
import { handleSuccess } from "../../utils";
import Footer from "../../components/Footer/Footer";

const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch("https://maltamart-backend.vercel.app/favourites", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (data.success) {
          setFavourites(
            data.data.map((f) => ({
              _id: f._id,
              name: f.varietyName,
              description: f.varietyDescription,
              images: f.varietyImages,
            }))
          );
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchFavourites();
  }, []);

  const removeFavourite = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch(`https://maltamart-backend.vercel.app/favourites/remove/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (data.success) {
      handleSuccess("Removed Favourite");

      setFavourites((prev) => prev.filter((v) => v._id !== id));
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <div className="fav-container">
        <h1>Your Favourite Varieties</h1>

        {favourites.length === 0 && (
          <p className="no-fav">No favourites added yet.</p>
        )}

        <div className="fav-grid">
          {favourites.map((v) => (
            <div key={v._id} className="fav-card">
              <h3>{v.name}</h3>
              {v.description && <p className="fav-desc">{v.description}</p>}
              {v.images && v.images.length > 0 ? (
                <img src={v.images} alt={v.name} />
              ) : (
                <div className="fav-no-img">No Image</div>
              )}
              <div className="fav-actions">
                <button
                  className="view-btn"
                  onClick={() => navigate(`/detail/${v._id}`)}
                >
                  View Details
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeFavourite(v._id)}
                >
                  Remove
                </button>
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
