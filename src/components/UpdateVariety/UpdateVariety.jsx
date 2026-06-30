import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import "./UpdateVariety.css";

const UpdateVariety = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    images: "",
  });

  useEffect(() => {
    const fetchVariety = async () => {
      try {
        const res = await fetch(`https://maltamart-backend.vercel.app/varieties/${id}`);
        const data = await res.json();
        if (data.success) {
          setForm({
            name: data.data.name,
            description: data.data.description,
            images: data.data.images.join(", "),
          });
        } else {
          handleError(data.message);
        }
      } catch (err) {
        handleError(err.message);
      }
    };
    fetchVariety();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://maltamart-backend.vercel.app/varieties/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          images: form.images.split(",").map((i) => i.trim()),
        }),
      });
      const data = await res.json();
      if (data.success) {
        handleSuccess("Variety updated successfully!");
        navigate("/view-varieties");
      } else {
        handleError(data.message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="update-container">
      <h1 className="update-heading">Update Variety</h1>
      <form className="update-form" onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          placeholder="Variety Name"
          value={form.name}
          onChange={handleChange}
          className="update-input"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="update-input"
        />
        <input
          type="text"
          name="images"
          placeholder="Image URLs (comma separated)"
          value={form.images}
          onChange={handleChange}
          className="update-input"
        />
        <button type="submit" className="update-btn">Update Variety</button>
      </form>
    </div>
  );
};

export default UpdateVariety;
