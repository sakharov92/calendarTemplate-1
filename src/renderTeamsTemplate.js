import { renderHead } from "./renderHead";

export function renderTeamsTemplate(array, numberOfDays, currentDate) {
  array.forEach((item) => {
    renderHead(currentDate, numberOfDays, item);
  });
}

