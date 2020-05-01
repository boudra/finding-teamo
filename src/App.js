import "./App.scss";

import React from "react";
import ReactDOM from "react-dom";

import ProjectList from "./ProjectList.js";

const project = {
  id: 1,
  title: "Something something",
  description:
    "Amet quis velit repellendus ullam tempora quidem. Cumque asperiores reprehenderit eaque ducimus animi Nesciunt quod delectus eaque delectus quam voluptates Iure earum iusto harum voluptatem ex placeat? Provident velit labore.",
  skillsNeeded: ["Copywriter"],
  owner: {
    id: 1,
    fullName: "John Doe",
    skills: ["Software Development", "ReactJS", "Redux"],
  },
  members: [
    { id: 2, fullName: "Jane Doe", skills: ["Designer", "Adobe Photoshop"] },
  ],
};

const initialState = {
  projects: new Array(10).fill(project),
};

export default function App() {
  return (
    <div>
      <h1>Finding Teamo</h1>
      <div>
        <ProjectList projects={initialState.projects} />
      </div>
    </div>
  );
}
