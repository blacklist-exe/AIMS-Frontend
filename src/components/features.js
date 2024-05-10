import React from "react";
import "/src/styles/styles.css";

const featuresData = [
  {
    title: "AI Project Management",
    description:
      "Organize, monitor, and enhance your AI projects in one place.",
  },
  {
    title: "Data Insights",
    description:
      "Gain valuable insights into your data and improve your models.",
  },
  {
    title: "Team Collaboration",
    description: "Work together with your team seamlessly on AI initiatives.",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {featuresData.map((feature, index) => (
            <div className="feature" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
