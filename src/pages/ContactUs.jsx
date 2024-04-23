import React from "react";
import contactus from "../assets/contactus.png";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <>
      <HeroBanner
        heading="Get in Touch!!"
        desc="Let's start a converstaion"
        bannerImage={contactus}
      />
      <ContactForm />
    </>
  );
};

export default ContactUs;
