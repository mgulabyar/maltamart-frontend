// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { handleError, handleSuccess } from "../../utils";
// import { ToastContainer } from "react-toastify";
// import "./Signup.css";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [signupInfo, setSignupInfo] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 50);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignupInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!signupInfo.name || !signupInfo.email || !signupInfo.password) {
//       return handleError("All fields are required");
//     }

//     try {
//       const response = await fetch("https://maltamart-backend.vercel.app/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(signupInfo),
//       });
//       const result = await response.json();

//       if (result.success) {
//         handleSuccess(result.message);
//         localStorage.setItem("role", "user");

//         setTimeout(() => navigate("/login"), 6000);
//       } else {
//         handleError(result.message);
//       }
//     } catch (err) {
//       handleError(err.message);
//     }
//   };

//   return (
//     <div id="signup-wrapper">
//       <div id="signup-box" className={animate ? "animate-signup" : ""}>
//         <h1 id="signup-title">Create Account</h1>

//         <form onSubmit={handleSignup}>
//           <div className="signup-field">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={signupInfo.name}
//               onChange={handleChange}
//               placeholder="Enter your name..."
//             />
//           </div>

//           <div className="signup-field">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={signupInfo.email}
//               onChange={handleChange}
//               placeholder="Enter your email..."
//             />
//           </div>

//           <div className="signup-field">
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={signupInfo.password}
//               onChange={handleChange}
//               placeholder="Enter password..."
//             />
//           </div>

//           <button id="signup-btn" type="submit">
//             Signup
//           </button>

//           <span id="signup-bottom-text">
//             Already have an account?
//             <Link to="/login">Login</Link>
//           </span>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!signupInfo.name || !signupInfo.email || !signupInfo.password) {
      return handleError("All fields are required");
    }

    try {
      const response = await fetch("https://maltamart-backend.vercel.app/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();

      if (result.success) {
        handleSuccess(result.message);
        localStorage.setItem("role", "user");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        handleError(result.message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div id="signup-wrapper">
      <div id="signup-box" className={animate ? "animate-signup" : ""}>
        <h1 id="signup-title">Create Account</h1>

        <form onSubmit={handleSignup}>
          <div className="signup-field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              placeholder="Enter your name..."
            />
          </div>

          <div className="signup-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              placeholder="Enter your email..."
            />
          </div>

          <div className="signup-field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={handleChange}
              placeholder="Enter password..."
            />
          </div>

          <button id="signup-btn" type="submit">
            Signup
          </button>

          <span id="signup-bottom-text">
            Already have an account?
            <Link to="/login">Login</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
