import { renderHead } from "./renderHead";

export function renderTeamsTemplate(teams, daysInMonth, currentDate) {
  teams.forEach((team) => {
    renderHead(currentDate, daysInMonth, team);
  });
}

