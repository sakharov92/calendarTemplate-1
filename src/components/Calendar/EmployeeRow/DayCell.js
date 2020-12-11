import { Component } from "../..";

export class DayCell extends Component {
  constructor(properties) {
    super(properties.parentComponent, "td");
    ({ vacationFiltered: this.vacation, date: this.date } = properties);
    this.vacationSum = 0;
  }

  get isWeekend() {
    const currentDay = this.date.getDay();
    return currentDay % 7 === 0 || currentDay % 7 === 6;
  }

  get isVacation() {
    const cellDate = this.date.toISOString();
    for (const vacationItem of this.vacation) {
      const vacationItemEntries = [...vacationItem.availableDatesList];
      const vacationUiStart = vacationItemEntries[0];
      const vacationUiEnd = vacationItemEntries[vacationItemEntries.length - 1];
      if (vacationItem.availableDatesList.has(cellDate)) {
        if (!this.isWeekend) {
          this.increaseVacationSum();
        }
        if (cellDate === vacationUiStart) {
          this.component.className += " vacation-cell_ui-start";
        }
        if (cellDate === vacationUiEnd) {
          this.component.className += " vacation-cell_ui-end";
        }
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
    this.component.className = isWeekend === true ? " dayCell weekend" : " dayCell";
    const vacationInfo = this.isVacation;
    if (typeof vacationInfo === "object") {
      this.component.className += vacationInfo.type === "Paid" ? " vacation-cell_paid" : " vacation-cell_unpaid";
    }
  }

  updateDayCell(newVacationFiltered, newDate) {
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
