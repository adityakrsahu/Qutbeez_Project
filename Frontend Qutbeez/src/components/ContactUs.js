import React from 'react';
import img from '../images/abt2.jpg';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-header">
        <img src={img} alt="Contact Us" />
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-us-content">
        <div className="contact-us-message">
          <p>Message sent. We’ll contact you soon.</p>
          <button onClick={() => window.history.back()}>GO BACK</button>
        </div>
        <div className="contact-us-details">
          <h2>Visit Us</h2>
          <p>Amritsar, Punjab, India</p>
          <p>Phone: +919898989898</p>
          <h2>Get In Touch</h2>
          <p>You can get in touch with us on this provided email.</p>
          <p>Email: qutbee11@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
