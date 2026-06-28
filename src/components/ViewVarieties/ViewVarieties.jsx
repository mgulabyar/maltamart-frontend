import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrash, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import "./ViewVarieties.css";
import { handleError, handleSuccess } from "../../utils";

const ViewVarieties = () => {
  const [varieties, setVarieties] = useState([]);
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const fetchVarieties = async () => {
    try {
      const res = await fetch("http://localhost:8080/varieties");
      const data = await res.json();
      if (data.success) setVarieties(data.data);
      else handleError(data.message);
    } catch (err) {
      handleError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/varieties/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        handleSuccess("Deleted successfully");
        fetchVarieties();
      } else handleError(data.message);
    } catch (err) {
      handleError(err.message);
    }
  };

  const handleAddToFavourite = async (variety) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return handleError("You must be logged in");

      const res = await fetch(
        `http://localhost:8080/favourites/add/${variety._id}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();

      if (data.success) {
        handleSuccess("Added to favourites");
        navigate("/favourite");
      } else handleError(data.message || "Already in favourites");
    } catch (err) {
      handleError("Could not add to favourites");
    }
  };

  useEffect(() => {
    fetchVarieties();
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <div className="maltamart-varieties">
        <div className="container">
          <h1 className="page-title" data-aos="fade-down">
            Maltamart Orange Varieties
          </h1>

          <div className="varieties-grid">
            {varieties.map((v, index) => (
              <div
                key={v._id}
                className="variety-card-horizontal"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <div className="variety-image-horizontal">
                  <img src={v.images} alt={v.name} />
                </div>

                <div className="variety-content-horizontal">
                  <h3 className="variety-name">{v.name}</h3>
                  <p>{v.description}</p>
                  {v.price && <span className="price">${v.price}</span>}

                  <div className="variety-actions-horizontal">
                    <button
                      className="icon-btn view"
                      onClick={() => navigate(`/detail/${v._id}`)}
                    >
                      <FaEye /> View
                    </button>

                    {role !== "admin" && (
                      <button
                        className="icon-btn favorite"
                        onClick={() => handleAddToFavourite(v)}
                      >
                        <FaHeart /> Favorite
                      </button>
                    )}

                    {role === "admin" && (
                      <>
                        <button
                          className="icon-btn edit"
                          onClick={() =>
                            navigate(`/update-variety/${v._id}`)
                          }
                        >
                          <FaEdit /> Edit
                        </button>

                        <button
                          className="icon-btn delete"
                          onClick={() => handleDelete(v._id)}
                        >
                          <FaTrash /> Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewVarieties;
