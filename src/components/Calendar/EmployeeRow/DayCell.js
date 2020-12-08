import { Component } from "../..";

export class DayCell extends Component {
  constructor(parentComponent, vacationFiltered, date) {
    super(parentComponent, "td");
    this.vacation = vacationFiltered;
    this.date = date;
    this.vacationSum = 0;
  }

  get isWeekend() {
    const currentDay = this.date.getDay();
    return currentDay % 7 === 0 || currentDay % 7 === 6;
  }

  get isVacation() {
    const cellDate = this.date.toISOString();
    for (const vacationItem of this.vacation) {
      if (vacationItem.set.has(cellDate)) {
        this.increaseVacationSum();
        return { type: vacationItem.type };
      }
    }
    return false;
  }

  increaseVacationSum() {
    this.vacationSum = 1;
  }

  generateDayCell() {
    const { isWeekend } = this;
    this.component.className = isWeekend === true ? "dayCell weekend" : "dayCell";

    if (!isWeekend) {
      const vacationInfo = this.isVacation;
      if (typeof vacationInfo === "object") {
        this.component.className += vacationInfo.type === "Paid" ? " vacation-cell_paid" : " vacation-cell_unpaid";
      }
    }
  }

  updateDayCell(newVacationFiltered, newDate) {
    // добавить функции для обновления
    this.vacation = newVacationFiltered;
    this.date = newDate;
    this.vacationSum = 0;

    this.generateDayCell();
  }

  render() {
    this.generateDayCell();
    super.render();
  }
}
