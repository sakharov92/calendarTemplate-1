import { Teams, TeamName } from "./components";
import { departmentTeams } from "./utils";

// const calendar = new Calendar("#app");
const teams = new Teams("#app");
const teamName = new TeamName("#app");

// window.calendar = calendar;
window.teamName = teamName;
setTimeout(() => teamName.render(), 1000);

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify(departmentTeams),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => json);
