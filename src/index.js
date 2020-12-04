import { renderCalendar } from "./renderCalendar";
import { cleanTable } from "./utils";

let currentDate = new Date();

// add click
document.querySelector(".fa-arrow-left").addEventListener("click", prevMonth);
document.querySelector(".fa-arrow-right").addEventListener("click", nextMonth);
renderCalendar(currentDate);

// func for getting prev month

function prevMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  cleanTable();
  renderCalendar(currentDate);
}

//func for getting next month

function nextMonth() {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  cleanTable();
  renderCalendar(currentDate);
}

