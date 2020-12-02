const chosenMonth = document.querySelector(".chosenMonth");
const outputCalendar = document.querySelector(".outputCalendar");
const formatter = new Intl.DateTimeFormat("en", {
  month: "long",
  weekday: "short",
  day: "numeric",
});
let currentDate = new Date();
let outputCalendarHTML = ``;

function fillOutputCalendar(dateObj) {
  outputCalendarHTML = ``;
  let isWeekend = false;
  let daysInCurrentMonth = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth() + 1,
    0,
  ).getDate();
  for (let i = 1; i <= daysInCurrentMonth; i++) {
    let chosenDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), i);
    const [dayName, , date] = formatter
      .format(chosenDate)
      .replace(",", "")
      .split(" ");
    dayName === "Sat" || dayName === "Sun"
      ? (isWeekend = true)
      : (isWeekend = false);
    outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
        <span class="outputDay">${dayName.slice(0, -1)}</span> 
        <span class="outputDate">${date}</span>
        </td>`;
  }
  outputCalendar.innerHTML = outputCalendarHTML;
}

chosenMonth.innerHTML = formatter
  .format(new Date(currentDate))
  .replace(",", "")
  .split(" ")[1];
fillOutputCalendar(currentDate);
