import React from "react";
import ReactDOM from "react-dom";
import {useDispatch} from "react-redux";

import "./ProjectList.scss";

import {addProject} from "./action";

function ProjectItem({project}) {
  return (
    <div className="project-list-item">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default function ({ projects }) {
  const dispatch = useDispatch();

  let defaultProject = {
    title: "title",
    description: "description",
  };

  return (
    <section className="project-list">
      <button onClick={() => dispatch(addProject(defaultProject))}>Add project</button>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
