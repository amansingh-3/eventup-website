import React from "react";
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
import { Link } from "react-router-dom";

const LoginForm = () => {
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
          <div className="col-login-image">
            <img
              src={ConferenceIMG}
              alt="login-confernce-image"
              width="100%"
              height="100%"
            />
            <h1 className="h2-all-features h2-content h2">
              You'll be in good company
            </h1>
            <p className="p-all-features p-content h2-content">
              Get started with your free account today
            </p>
            <div className="col-login-image-brand-section">
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
          <div className="col-login-form">
            <h1>Hi there!</h1>
            <p className="p-content">Build ,innovate and change the world</p>
            <form method="post">
              <div className="form-field email">
                <div className="form-label">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input">
                  <input
                    type="email"
                    id="email"
                    placeholder="amansingh@eventup.com"
                  />
                </div>
              </div>
              <div className="form-field password">
                <div className="form-label">
                  <label htmlFor="pass">Password</label>
                </div>
                <div className="input">
                  <input type="password" id="pass" placeholder="Password" />
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
                <input type="submit" Value="Sign In" className="form-btn" />
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

export default LoginForm;
