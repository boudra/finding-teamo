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
  loading: false,
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SHOW_LOADER":
      return {...state, loading: true};

    case "HIDE_LOADER":
      return {...state, loading: false};

    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload
      };

    case "ADD_PROJECT":
      const newProject = { id: state.currentId, ...action.payload };

      return {
        ...state,
        projects: [...state.projects, newProject],
      };

    default:
      return state;
  }
}
