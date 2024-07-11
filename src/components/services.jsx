import React from "react";

const Services = () => {
  return (
    <section id="services">
    <h1>Services</h1>
    <div className="service-container">
      <div className="service-card">
        <h3>Service 1</h3>
        <p>Description of service 1 goes here...</p>
      </div>
      <div className="service-card">
        <h3>Service 2</h3>
        <p>Description of service 2 goes here...</p>
      </div>
      <div className="service-card">
        <h3>Service 3</h3>
        <p>Description of service 3 goes here...</p>
      </div>
      {/* Add more service cards as needed */}
    </div>
  </section>
);
};

export default Services;
