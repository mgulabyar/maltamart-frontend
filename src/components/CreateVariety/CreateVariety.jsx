// import React, { useState } from "react";
// import { handleError, handleSuccess } from "../../utils";
// import "./CreateVariety.css";
// import { useNavigate } from "react-router-dom";

// const CreateVariety = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     description: "",
//     imagesInput: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

// const imagesArray = form.imagesInput.split(",").map((i) => i.trim()).filter(i => i.length > 0);

//     if (!form.name || !form.description || imagesArray.length === 0) {
//       return handleError("All fields are required!");
//     }

//     try {
//       const res = await fetch("https://maltamart-backend.vercel.app/varieties/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           description: form.description,
//           images: imagesArray,
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         handleSuccess("Variety created successfully!");
//         setForm({ name: "", description: "", imagesInput: "" });
//         navigate("/view-varieties");
//       } else handleError(data.message);
//     } catch (err) {
//       handleError(err.message);
//     }
//   };

//   return (
//     <div id="create-variety-container">
//       <h1 id="create-variety-heading">Create New Variety</h1>
//       <form id="create-variety-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           id="variety-name"
//           className="variety-input"
//           placeholder="Variety Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           id="variety-description"
//           className="variety-input"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="imagesInput"
//           id="variety-images"
//           className="variety-input"
//           placeholder="Image URLs (comma separated)"
//           value={form.imagesInput}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" id="create-variety-btn">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateVariety;


import React, { useState } from "react";
import { handleError, handleSuccess } from "../../utils";
import "./CreateVariety.css";
import { useNavigate } from "react-router-dom";

const CreateVariety = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    imagesInput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imagesArray = form.imagesInput
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);

    if (!form.name || !form.description || imagesArray.length === 0) {
      return handleError("All fields are required!");
    }

    try {
      const res = await fetch("https://maltamart-backend.vercel.app/varieties/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          images: imagesArray,
        }),
      });

      const data = await res.json();
      if (data.success) {
        handleSuccess("Variety created successfully!");
        setForm({ name: "", description: "", imagesInput: "" });
        navigate("/view-varieties");
      } else {
        handleError(data.message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div id="create-variety-container">
      <h1 id="create-variety-heading">Create New Variety</h1>
      <form id="create-variety-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="variety-name"
          className="variety-input"
          placeholder="Variety Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          id="variety-description"
          className="variety-input"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagesInput"
          id="variety-images"
          className="variety-input"
          placeholder="Image URLs (comma separated)"
          value={form.imagesInput}
          onChange={handleChange}
          required
        />
        <button type="submit" id="create-variety-btn">
          Create Variety
        </button>
      </form>
    </div>
  );
};

export default CreateVariety;
