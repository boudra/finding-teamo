import React from "react";
import ReactDOM from "react-dom";

import "./ProjectList.scss";

function ProjectItem(project) {
  return <div>
    <h2>{project.title}</h2>
    <p>{project.description}</p>
  </div>;
}

export default function({projects}) {
  return <section className="project-list">
    <div>
      {projects.map(ProjectItem)}
    </div>
  </section>;
}
