import React, {useState} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import "./ProjectList.scss";

import {createProject} from "./action";


function ProjectItem({project}) {
  return (
    <div className="project-list-item">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}

function CreateProjectForm({createProject}) {
  const initialState = { title: "", description: "" };
  let [state, setState] = useState(initialState);

  function onSubmit(e) {
    e.preventDefault();
    createProject(state);
    setState(initialState);
  }

  function changeTitle(e) {
    const newTitle = e.target.value;
    setState((state) => ({...state, title: newTitle }));
  }

  function changeDescription(e) {
    const newDescription = e.target.value;
    setState((state) => ({...state, description: newDescription }));
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="group">
        <input type="text" value={state.title} onChange={changeTitle} required />
        <textarea id="" name="" value={state.description} onChange={changeDescription} required></textarea>
      </div>
      <div className="group">
        <button>Submit</button>
      </div>
    </form>
  );
}


function ProjectList({ projects, createProject }) {
  let defaultProject = {
    title: "title",
    description: "description",
  };

  return (
    <section className="project-list">
      <CreateProjectForm createProject={createProject} />
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


export default connect(null, {createProject})(ProjectList);
