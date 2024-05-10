// src/components/loading.js
import React from "react";
import "../styles/styles.css";

function Loading() {
  return (
    <section className="loading">
      <div className="container">
        <h2>AIMS is processing your task...</h2>
        <p>Please wait while we complete the task for you.</p>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
