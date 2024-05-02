import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQs from "./pages/FAQs";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import TestBack from "./pages/TestBack";
import User from "./pages/User";
import UserDb from "./pages/UserDb";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      offset: 140,
      duration: 1200,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: "bottom-center",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {location.pathname !== "/login" && <Header /> &&
        location.pathname !== "/signup" && <Header />}

      <Routes>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/testapi" element={<TestBack />} />
        <Route path="/user" element={<User />}>
          <Route path="dashboard" element={<UserDb />} />
        </Route>
      </Routes>

      {location.pathname !== "/login" && <Footer /> &&
        location.pathname !== "/signup" && <Footer />}
    </>
  );
};

export default App;
