// src/components/completion.js
import React from "react";
import "../styles/styles.css";

function Completion({ filesUrl }) {
  const handleDownload = () => {
    window.open(filesUrl, "_blank");
  };

  return (
    <section className="completion">
      <div className="container">
        <h2>Your files are ready for download!</h2>
        <p>Click the button below to download your files.</p>
        <div className="button-container">
          <button onClick={handleDownload}>Download Files</button>
        </div>
      </div>
    </section>
  );
}

export default Completion;
