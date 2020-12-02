const chosenMonth = document.querySelector(".chosenMonth");
const outputCalendar = document.querySelector(".outputCalendar");
const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  weekday: "short",
  day: "numeric",
});
let currentDate = new Date();

function fillOutputCalendar(dateObj) {
  let outputCalendarHTML = ``;
  let daysInCurrentMonth = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth() + 1,
    0,
  ).getDate();
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let chosenDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), i);
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
  outputCalendar.innerHTML = outputCalendarHTML;
}

chosenMonth.innerHTML = dateFormatter
  .format(new Date(currentDate))
  .replace(",", "")
  .split(" ")[1];
fillOutputCalendar(currentDate);

/*
const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" }],
  },
];
*/
