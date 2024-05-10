// src/components/task-prompt.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";
import API_URL from "../config";

function TaskPrompt({ onSubmit, setFilesUrl }) {
  const [taskPrompt, setTaskPrompt] = useState("");

  const handleChange = (e) => {
    setTaskPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/process_task`, {
        task: taskPrompt,
      });
      setFilesUrl(response.data.files_url);
      onSubmit();
    } catch (error) {
      console.error("Error submitting task:", error);
    }
    setTaskPrompt("");
  };

  return (
    <section className="task-prompt">
      <div className="container">
        <h2>AI Task Prompt</h2>
        <p>Enter the tasks you'd like AIMS to perform:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task-prompt-input">Task:</label>
          <textarea
            id="task-prompt-input"
            name="task-prompt"
            value={taskPrompt}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Task</button>
        </form>
      </div>
    </section>
  );
}

export default TaskPrompt;
