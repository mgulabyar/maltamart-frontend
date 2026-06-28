import React, { useState } from "react";
import Home from "./pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login/Login";
import Signup from "./auth/Signup/Signup";
import RefreshHandler from "./RefreshHandler";
import Navbar from "./components/Navbar/Navbar";
import GetStart from "./components/Header/GetStart";
import CreateVariety from "./components/CreateVariety/CreateVariety";
import UpdateVariety from "./components/UpdateVariety/UpdateVariety";
import ViewVarieties from "./components/ViewVarieties/ViewVarieties";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import VarietyDetail from "./components/Details Variety/VarietyDetail";
import FavouritePage from "./pages/Favourites/FavouritePage";
import ContactPage from "./pages/Contact/ContactPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Navbar />

      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<GetStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/view-varieties" element={<ViewVarieties />} />
        <Route path="/update-variety/:id" element={<UpdateVariety />} />
        <Route path="/create-variety" element={<CreateVariety />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/detail/:id" element={<VarietyDetail />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </>
  );
};

export default App;
