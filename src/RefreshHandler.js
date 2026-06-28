import{ useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const nagivate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/signup" ||
        location.pathname === "/login"
      ) {
        nagivate("/home", { replace: false });
      }
    }
  }, [location, nagivate, setIsAuthenticated]);
  return null;
};

export default RefreshHandler;
