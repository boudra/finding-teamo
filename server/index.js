const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let currentId = 0;
let projects = [];

app.get("/projects", (req, res) => {
  return res.send(JSON.stringify(projects));
});

app.post("/projects", (req, res) => {
  const newProject = {...req.body, id: currentId++};

  projects.push(newProject);

  return res.send(JSON.stringify(newProject));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
