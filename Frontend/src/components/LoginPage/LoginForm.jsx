import React, { useState, memo } from "react";
import blogo1 from "../../assets/content-1.svg";
import blogo2 from "../../assets/content.svg";
import blogo3 from "../../assets/content2.svg";
import blogo4 from "../../assets/content3.svg";
import blogo5 from "../../assets/content4.svg";
import ConferenceIMG from "../../assets/conference.png";
import GoogleLogo from "../../assets/google-logo.svg";
import "../../../global.css";
import "./Login.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { doLogin } from "../../../../Backend/auth";
import UserDb from "../../pages/UserDb";

const LoginForm = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs, "inputs");
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) {
        console.log("Login successfully!");
        const responseData = await response.json();
        const loginDetails = {
          fname: responseData.firstName,
          lname: responseData.lastName,
          id: responseData.id,
        };
        doLogin(loginDetails, () => {
          console.log("The data saved in Local Storage");
        });
        setTimeout(() => {
          navigate("/user/dashboard");
          <UserDb />;
        }, 1000);
        return <>Will redirect in 3 seconds...</>;
      } else {
        const errorMessage = await response.json();
        console.error(
          "Failed to send Login. Server responded with status:",
          response
        );
        throw new Error(errorMessage.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  let settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="login">
        <div className="left-login">
          <div className="col-login-image" data-aos="fade-up">
            <div className="logo-signup">
              <Link to="/">
                <svg
                  fill="currentColor"
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <g data-name="Layer 2">
                    <g data-name="arrow-back">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(90 12 12)"
                        opacity="0"
                      />

                      <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" />
                    </g>
                  </g>
                </svg>
                <p> Back to Home</p>
              </Link>
            </div>
            <img
              src={ConferenceIMG}
              alt="login-confernce-image"
              width="100%"
              height="100%"
              data-aos="fade-up"
            />
            <h1 className="h2-all-features h2-content h2" data-aos="fade-up">
              You'll be in good company
            </h1>
            <p
              className="p-all-features p-content h2-content"
              data-aos="fade-up">
              Get started with your free account today
            </p>
            <div className="col-login-image-brand-section" data-aos="fade-up">
              <Slider {...settings}>
                <a href="#">
                  <img
                    src={blogo1}
                    alt="slack-logo"
                    width="100%"
                    height="100%"
                  />
                </a>
                <a href="#">
                  <img
                    src={blogo2}
                    alt="slack-logo"
                    width="100%"
                    height="100%"
                  />
                </a>
                <a href="#">
                  <img
                    src={blogo3}
                    alt="slack-logo"
                    width="100%"
                    height="100%"
                  />
                </a>
                <a href="#">
                  <img
                    src={blogo4}
                    alt="slack-logo"
                    width="100%"
                    height="100%"
                  />
                </a>
                <a href="#">
                  <img
                    src={blogo5}
                    alt="slack-logo"
                    width="100%"
                    height="100%"
                  />
                </a>
              </Slider>
            </div>
          </div>
        </div>
        <div className="right-login">
          <div className="col-login-form" data-aos="fade-up">
            <h1>Hi there!</h1>
            <p className="p-content">Build ,innovate and change the world</p>
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-field email">
                <div className="form-label">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    placeholder="amansingh@eventup.com"
                    value={inputs.email || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-field password">
                <div className="form-label">
                  <label htmlFor="pass">Password</label>
                </div>
                <div className="input">
                  <input
                    type="password"
                    name="current_password"
                    placeholder="Password"
                    value={inputs.current_password || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="forget-pass-sec">
                <div className="remember-me">
                  <div className="input">
                    <input type="checkbox" />
                  </div>
                  <div className="form-label">
                    <label>Remember Me</label>
                  </div>
                </div>
                <div className="forget-pass">
                  <a href="#">Forget Password?</a>
                </div>
              </div>
              <div className="form-field input">
                <input type="submit" Value="Log In" className="form-btn" />
              </div>
            </form>
            <div className="or-line">
              <p>
                <span>or</span>
              </p>
            </div>
            <div className="google-btn">
              <a href="https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=ATuJsjxhaMNjAdBT4wg9095p_x1QpK7uahzPPfHwnA_2uc_iFr9zJO3yoQcwfW9JcdvmKJQLmYFA&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1863207922%3A1710508530091824&theme=glif&ddm=0">
                <span>
                  <img src={GoogleLogo} />
                  Log In to Google
                </span>
              </a>
            </div>
            <div className="create-account-links">
              <p>
                Haven't sign up?
                <span className="h6">
                  <Link to="/signup">Create Account</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(LoginForm);
