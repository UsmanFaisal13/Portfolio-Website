import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_q9rsmji", 
        "template_s6lt1o5", 
        formData,
        "_n51Fox9eTJ81twgz" 
      )
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
 
    <section id="contact">
      <div id="contactForm">
      <h1>Let's Talk!</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
        <h4>Name</h4>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        <h4>Email</h4>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <h4>Message</h4>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      </div>
      <div id="How">
        <h1>How it works?</h1>
        <p>
          You can click the "Hire me" or "Visit upwork" button, <br />
          and it'll take you to my upwork profile.
          
          <br />
          <button id="CTA">Visit Upwork</button>
          <br /> <h2>OR</h2><br />
        </p>
        <p className="sub">Fill the form to contact me!</p>
        <img src="src\assets\curved-arrow-4630.png"/>
      
        

      </div>
      
    </section>

   
   
  );
};

export default Contact;
