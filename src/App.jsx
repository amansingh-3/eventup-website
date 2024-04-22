import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQs from "./pages/FAQs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";

const App = () => {
  const location = useLocation();

  // const isLoginPage = location.pathname === "/login";
  // const isLoginPage = location.pathname === "/login";

  return (
    <>
      {location.pathname !== "/login" && <Header /> &&
        location.pathname !== "/signup" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {location.pathname !== "/login" && <Footer /> &&
        location.pathname !== "/signup" && <Footer />}
    </>
  );
};

export default App;
