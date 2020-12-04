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

  const chosenMonth = document.querySelector(".chosenMonth");
  chosenMonth.innerHTML = dateFormatter
    .format(new Date(currentDate))
    .replace(",", "")
    .split(" ")[1] + " " + currentDate.getFullYear();

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let chosenDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      i,
    );
    const [dayName, , date] = dateFormatter
      .format(chosenDate)
      .replace(",", "")
      .split(" ");
    let isWeekend = dayName === "Sat" || dayName === "Sun";
    outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
        <span class="outputDay">${dayName.slice(0, -1)}</span> 
        <span class="outputDate">${date}</span>
        </td>`;
  }
  outputCalendarHTML += `<td class="sumCell outputItem weekend">Sum</td>`
  outputCalendar.innerHTML = outputCalendarHTML;


  renderTeamsTemplate(departmentTeams, daysInCurrentMonth, currentDate)



  document.querySelectorAll(".chevronBtn").forEach(e => {
    e.addEventListener("click", hideTable);
  })
}


