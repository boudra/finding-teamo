import "./App.scss";

import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import ProjectList from "./ProjectList.js";

export default function App() {
  let projects = useSelector((state) => state.projects);

  return (
    <div>
      <header className="main-header">
        <h1>Finding Teamo</h1>
      </header>
      <div className="wrapper">
        <div>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
}
