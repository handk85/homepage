import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Experience from "./Experience";
import Publications from "./Publications";
import TeachingExperience from "./Teaching";
import Service from "./Service";
import Timeline from "./Timeline";
import Trivia from "./Trivia";
import "bootstrap/dist/css/bootstrap.min.css";
import "academicons/css/academicons.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/teaching" element={<TeachingExperience />} />
        <Route path="/service" element={<Service />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
