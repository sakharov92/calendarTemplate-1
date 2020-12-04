import { renderCalendar } from "./renderCalendar";
import { cleanTable } from "./utils";

let currentDate = new Date();
document.querySelector(".fa-arrow-left").addEventListener("click", prevMonth);
document.querySelector(".fa-arrow-right").addEventListener("click", nextMonth);
renderCalendar(currentDate);


function prevMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  cleanTable();
  renderCalendar(currentDate);
}
function nextMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  cleanTable();
  renderCalendar(currentDate);
}

