const apiEndpoint = "http://localhost:3000";

export function showLoader() {
  return {
    type: "SHOW_LOADER"
  };
}

export function hideLoader() {
  return {
    type: "HIDE_LOADER"
  };
}

export function createProject(project) {
  return (dispatch) => {
    dispatch(showLoader());

    fetch(`${apiEndpoint}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    })
    .then((res) => res.json())
    .then((project) => {
      dispatch(addProject(project));
    })
    .finally(() => {
      dispatch(hideLoader());
    });
  };
}

export function addProject(project) {
  return {
    type: "ADD_PROJECT",
    payload: project
  };
}
