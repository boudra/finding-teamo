import "./App.scss";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import ProjectList from "./ProjectList";
import { fetchProjects } from "./action";

export function App({ projects, fetchProjects }) {
  useEffect(() => {
    fetchProjects();
  }, []);

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

export default connect((state) => ({ projects: state.projects }), {
  fetchProjects,
})(App);
