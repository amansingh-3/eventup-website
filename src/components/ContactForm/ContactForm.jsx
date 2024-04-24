import React, { useState, useEffect } from "react";
import "../../../global.css";
import "./ContactForm.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // alert(`Thank You for contacting us ${JSON.stringify(inputs.fname)}`);
    setSubmitted(true);
    // console.log(submitted);
  };

  useEffect(() => {
    console.log(submitted);
  }, [submitted]);

  return (
    <>
      <div className="contactform-wrapper">
        <div className="container">
          <div className="wrapper-inner">
            <div className="contact-details">
              <h2>Event Up Headquaters</h2>
              <p>
                159, 9th Cross Sampige Road, Near Central Library, Malleshwaram
                , Banglore , Karnataka 560003
              </p>
              <p>
                <i>admin123@eventup.com</i>
              </p>
            </div>

            <div className={`col-login-form ${submitted ? "toggle " : " "}`}>
              <h2>Contact Us</h2>
              <p className="p-content">We would love to hear from you!</p>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-field email">
                  <div className="form-label">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="amansingh@eventup.com"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="name">
                  <div className="first-name form-field">
                    <div className="form-label">
                      <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="input">
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="Aman"
                        value={inputs.fname || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="last-name">
                    <div className="form-label">
                      <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="input">
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Singh"
                        value={inputs.lname || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="name">
                  <div className="form-field phone">
                    <div className="form-label">
                      <label htmlFor="phone">Mobile</label>
                    </div>
                    <div className="input">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="Ten digits code"
                        value={inputs.phone || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field state">
                    <div className="form-label">
                      <label htmlFor="state">State</label>
                    </div>
                    <div className="input">
                      <select
                        name="State"
                        id="State"
                        defaultValue="PB"
                        value={inputs.State}
                        onChange={handleChange}>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="GA">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="GA">Goa</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="WB">West Bengal</option>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="CH">Chandigarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="PY">Puducherry</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-field query">
                  <div className="form-label">
                    <label htmlFor="Query">Query</label>
                  </div>
                  <div className="input">
                    <textarea
                      type="textarea"
                      name="textarea"
                      id="Query"
                      placeholder="Enter your query here ."
                      value={inputs.textarea}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field input">
                  <input
                    type="submit"
                    value="Send Query"
                    className="form-btn"
                  />
                </div>
              </form>
            </div>
            {submitted ? (
              <div className={`thanks-contactus ${submitted ? "show " : " "}`}>
                <p>
                  Thank You for reaching out to us{" "}
                  <strong>{inputs.fname}</strong> !! <br />
                  We will contact you shortly by mail at{" "}
                  <strong>{inputs.email}</strong>
                </p>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
      <div className="googlemaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.284272157602!2d77.56256919528562!3d12.999263747096181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16255d739d0b%3A0x446069d27eb2d8bc!2sBengaluru%2C%20Karnataka%20560003!5e0!3m2!1sen!2sin!4v1713861062511!5m2!1sen!2sin"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ContactForm;
