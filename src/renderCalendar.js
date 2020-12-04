import { dateFormatter, hideTable, departmentTeams } from "./utils";
import { renderTeamsTemplate } from "./renderTeamsTemplate";


export function renderCalendar(currentDate) {
  const outputCalendar = document.querySelector(".outputCalendar");
  let outputCalendarHTML = `<td class="addVacationCell outputItem "><button class="addVacationBtn"><span>+</span>Add Vacation</button></td>`;
  let daysInCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  // get the current month

  const chosenMonth = document.querySelector(".chosenMonth");
  chosenMonth.innerHTML = dateFormatter
    .format(new Date(currentDate))
    .replace(",", "")
    .split(" ")[1] + " " + currentDate.getFullYear();

    // get every day of the month

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let chosenDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i,
    );

    // remove coma and split day of week and day

    const [dayName, , date] = dateFormatter
      .format(chosenDate)
      .replace(",", "")
      .split(" ");

    // check, if this day is weekday, add class weekend for it

    let isWeekend = dayName === "Sat" || dayName === "Sun";
    outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
        <span class="outputDay">${dayName.slice(0, -1)}</span> 
        <span class="outputDate">${date}</span>
        </td>`;
  }

  // render td with total number

  outputCalendarHTML += `<td class="sumCell outputItem weekend">Sum</td>`

  // render output with calendar

  outputCalendar.innerHTML = outputCalendarHTML;

  // render teams into table

  renderTeamsTemplate(departmentTeams, daysInCurrentMonth, currentDate)

  // add button to hide table

  document.querySelectorAll(".chevronBtn").forEach(e => {
    e.addEventListener("click", hideTable);
  })
}


