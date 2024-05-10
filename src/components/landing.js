import React from "react";
import "../styles/styles.css";

function Landing({ onGetStarted }) {
  return (
    <section className="hero">
      <div className="container full-width">
        <h2>Your Journey Starts Here</h2>
        <p>Manage and optimize your projects with our cutting-edge platform.</p>
        <button onClick={onGetStarted}>Get Started</button>
      </div>
    </section>
  );
}

export default Landing;
