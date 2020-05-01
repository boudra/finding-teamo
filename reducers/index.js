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

export default function(state = initialState, action) {
  return state;
}
