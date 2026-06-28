import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginInfo.email || !loginInfo.password) {
      return handleError("Email and Password are required");
    }

    try {
      const response = await fetch("https://maltamart-backend.vercel.app/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();

      if (result.success) {
        handleSuccess(result.message);

        localStorage.setItem("token", result.jwtToken);
        localStorage.setItem("loggedInEmail", result.email);
        localStorage.setItem("loggedInUser", result.name);
        localStorage.setItem("role", result.role);

        setTimeout(() => {
          if (result.role === "admin") navigate("/home");
          else navigate("/home");
        }, 6000);
      } else {
        handleError(result.message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div id="login-wrapper">
      <div id="login-box" className={animate ? "animate-login" : ""}>
        <h1 id="login-title">Login</h1>

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              placeholder="Enter email..."
            />
          </div>

          <div className="login-field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
              placeholder="Enter password..."
            />
          </div>

          <button id="login-btn" type="submit">
            Login
          </button>

          <span id="login-bottom-text">
            Don't have an account?
            <Link to="/signup">Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
