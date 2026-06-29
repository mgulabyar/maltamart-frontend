import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCog, FaUserCircle, FaBell } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { handleSuccess, handleError } from "../../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hideCenter =
    location.pathname === "/login" || location.pathname === "/signup";

  const token = localStorage.getItem("token");
  const loggedInUser = localStorage.getItem("loggedInUser");
  const email = localStorage.getItem("loggedInEmail");
  const role = localStorage.getItem("role");

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      const res = await fetch("https://maltamart-backend.vercel.app/auth/logout", {
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });

      const result = await res.json();

      if (result.success) {
        localStorage.clear();
        handleSuccess("Logged out successfully!");
        setTimeout(() => navigate("/"), 4000);
      } else {
        handleError(result.message || "Logout failed");
      }
    } catch (err) {
      handleError(err.message || "Something went wrong");
    }
  };

  const handleCreateVariety = () => {
    navigate("/create-variety");
    setMenuOpen(false);
  };

  const getActiveCls = (path) => (location.pathname === path ? "active" : "");

  return (
    <>
      <nav className="navbar">
        <div className="nav-left" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand">MaltaMart</span>
        </div>

        {!hideCenter && (
          <div className="nav-center">
            <button className={getActiveCls("/home")} onClick={() => navigate("/home")}>
              Home
            </button>
            <button className={getActiveCls("/view-varieties")} onClick={() => navigate("/view-varieties")}>
              View Varieties
            </button>
            <button className={getActiveCls("/about")} onClick={() => navigate("/about")}>
              About
            </button>
            <button className={getActiveCls("/favourite")} onClick={() => navigate("/favourite")}>
              Your Favourites
            </button>
          </div>
        )}

        <div className="nav-right">
          <div className="desktop-actions">
            {token ? (
              <div className="profile-wrapper" ref={dropdownRef}>
                {role === "admin" && (
                  <button className="create-btn" onClick={handleCreateVariety}>
                    Create
                  </button>
                )}

                <div
                  className="profile-icon"
                  onClick={() => setProfileOpen(!profileOpen)}
                >
                  {loggedInUser?.charAt(0).toUpperCase() || "U"}
                </div>

                <div className={`profile-card ${profileOpen ? "show" : ""}`}>
                  <div className="profile-header">
                    <div className="profile-circle">
                      {loggedInUser?.charAt(0).toUpperCase()}
                    </div>
                    <div className="profile-info">
                      <p className="name">{loggedInUser}</p>
                      <p className="email">{email}</p>
                    </div>
                  </div>

                  <div className="profile-links">
                    <p>
                      <FaCog /> Settings
                    </p>
                    <p>
                      <FaUserCircle /> My Account
                    </p>
                    <p>
                      <FaBell /> Notifications
                    </p>
                  </div>

                  <div className="profile-actions">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login">
                  <button className="login-btn">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="signup-btn">Signup</button>
                </Link>
              </div>
            )}
          </div>

          {!hideCenter && (
            <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>
          )}
        </div>
      </nav>

      {/* Professional Responsive Slide-down Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className={getActiveCls("/home")} onClick={() => navigate("/home")}>
          Home
        </button>
        <button className={getActiveCls("/view-varieties")} onClick={() => navigate("/view-varieties")}>
          View Varieties
        </button>
        <button className={getActiveCls("/about")} onClick={() => navigate("/about")}>
          About
        </button>
        <button className={getActiveCls("/favourite")} onClick={() => navigate("/favourite")}>
          Your Favourites
        </button>

        {role === "admin" && (
          <button className={`mobile-create-btn ${getActiveCls("/create-variety")}`} onClick={handleCreateVariety}>
            Create
          </button>
        )}

        {token ? (
          <div className="mobile-profile-section">
            <div className="mobile-profile-card">
              <div className="profile-circle">
                {loggedInUser?.charAt(0).toUpperCase()}
              </div>
              <div className="mobile-user-details">
                <p className="name">{loggedInUser}</p>
                <p className="email">{email}</p>
              </div>
            </div>
            <button className="logout-btn-mobile" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="mobile-auth-wrapper">
            <button className="mobile-login-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="mobile-signup-btn" onClick={() => navigate("/signup")}>Signup</button>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Navbar;