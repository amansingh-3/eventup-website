import React from "react";
import ftrlogo from "../../assets/ftr-logo.png";
import Share from "../../assets/Share.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="col-ftr-logo">
              <a href="#">
                <img src={ftrlogo} alt="ftr-logo-eventup" />
              </a>
            </div>
            <div className="col-ftr-links">
              <div className="col-links-p">
                <h4>Products</h4>
                <ul>
                  <li>
                    <a href="#">Conference</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Solution</a>
                  </li>
                </ul>
              </div>
              <div className="col-links-c">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col-links-s">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Support Policy</a>
                  </li>
                  <li>
                    <a href="#">Talk to Sales</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-ftr-newsletter">
              <h4>Subscribe to our newsletter</h4>
              <p className="p-content p-all-features">
                Want to stay up to date with news and updates about our product?
                Subscribe.
              </p>
              <input type="email" placeholder="email@provider.com" />
              <p className="sub-text">
                By subscribing to our newsletter you agree to our privacy policy
                and will get commercial communication.
              </p>
            </div>
          </div>
          <div className="ftr-copyright">
            <div className="ftr-copyright-links">
              <p className="ftr-copyright-symbol">&copy; 2024 EventUp. Inc.</p>
            </div>
            <div className="ftr-copyright-list">
              <ul className="ul-all-features">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service </a>
                </li>
                <li>
                  <a href="#">Cookie Settings </a>
                </li>
              </ul>
            </div>

            <div className="ftr-copyright-logos">
              <img src={Share} alt="share-image" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
