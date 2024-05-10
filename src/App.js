// src/components/App.js
import React, { useState } from "react";
import Landing from "./components/landing";
import Features from "./components/features";
import Contact from "./components/contact";
import TaskPrompt from "./components/task-prompt";
import Loading from "./components/loading";
import Completion from "./components/completion";
import "./styles/styles.css";

function App() {
  const [component, setComponent] = useState("landing");
  const [filesUrl, setFilesUrl] = useState("");

  const loadComponent = (componentName) => {
    setComponent(componentName);
  };

  const handleTaskSubmit = () => {
    setComponent("loading");
    setTimeout(() => {
      setComponent("completion");
    }, 5000);
  };

  return (
    <>
      <header>
        <div className="container">
          <h1>AI Management System</h1>
          <nav>
            <ul>
              <li>
                <a href="#" onClick={() => loadComponent("landing")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => loadComponent("features")}>
                  Features
                </a>
              </li>
              <li>
                <a href="#" onClick={() => loadComponent("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main-content">
        {component === "landing" && (
          <Landing onGetStarted={() => loadComponent("task-prompt")} />
        )}
        {component === "features" && <Features />}
        {component === "contact" && <Contact />}
        {component === "task-prompt" && (
          <TaskPrompt onSubmit={handleTaskSubmit} setFilesUrl={setFilesUrl} />
        )}
        {component === "loading" && <Loading />}
        {component === "completion" && <Completion filesUrl={filesUrl} />}
      </main>
      <footer>
        <div className="container">
          <p>© 2024 AI Management System. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
