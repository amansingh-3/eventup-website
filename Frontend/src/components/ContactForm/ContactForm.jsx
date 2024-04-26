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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs, "inputs");

    try {
      const response = await fetch("http://localhost:3000/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) {
        console.log("Message sent successfully!");
        setSubmitted(true);
        // setInputs({});
      } else {
        console.error(
          "Failed to send message. Server responded with status:",
          response
        );
        setSubmitted(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitted(false);
    }
  };

  return (
    <>
      <div className="contactform-wrapper">
        <div className="container">
          <div className="wrapper-inner">
            <div className="contact-details">
              <h2>Event Up Headquaters</h2>
              <div className="contact-us-logos-wrapper">
                <div className="logos">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 1024 1024"
                    fill="#000000"
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                      fill=""
                    />
                  </svg>
                </div>
                <div className="content-logos">
                  <p>
                    159, 9th Cross Sampige Road, Near Central Library,
                    Malleshwaram , Banglore , Karnataka 560003
                  </p>
                </div>
              </div>

              <div className="contact-us-logos-wrapper">
                <div className="logos">
                  {" "}
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="content-logos">
                  <p>
                    <i>admin123@eventup.com</i>
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-login-form ${submitted ? "toggle " : " "}`}>
              <h2>Contact Us</h2>
              <p className="p-content">We would love to hear from you!</p>
              <form method="POST" onSubmit={handleSubmit}>
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
                        placeholder="First Name"
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
