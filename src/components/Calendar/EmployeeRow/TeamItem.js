import { Component } from "../..";
import { formatInputDate } from "../../../utils";
import { DayCell } from "./DayCell";
import { VacationSumCell } from "./VacationSumCell";

export class TeamItem extends Component {
  constructor(parentSelector, personData, teamName, daysInCurrentMonth, date) {
    // деструктуризация
    super(parentSelector, "tr");
    this.date = date;
    this.teamName = teamName;
    this.daysInCurrentMonth = daysInCurrentMonth;
    this.personData = personData;
    this.dayCells = [];
    this.vacationSum = 0;
    this.vacationSumCell = new VacationSumCell(this.component, this.vacationSum);
  }

  generateVacationSets() {
    this.vacationFiltered = [];
    for (const vacationItem of this.personData.vacations) {
      // debugger
      const startDate = formatInputDate(vacationItem.startDate);
      const endDate = formatInputDate(vacationItem.endDate);
      const firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth());
      const lastDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), this.daysInCurrentMonth);
      const availableDates = {
        availableDatesList: new Set(),
        type: vacationItem.type,
      };
      if (!(endDate < firstDayOfMonth) && !(startDate > lastDayOfMonth)) {
        let currentVacationDate = new Date(startDate.getTime());
        for (
          let index = currentVacationDate.getDate();
          currentVacationDate <= lastDayOfMonth && currentVacationDate <= endDate;
          ++index
        ) {
          currentVacationDate = new Date(startDate.getFullYear(), startDate.getMonth(), index);
          if (firstDayOfMonth <= currentVacationDate && lastDayOfMonth >= currentVacationDate) {
            availableDates.availableDatesList.add(currentVacationDate.toISOString());
          }
          currentVacationDate = new Date(startDate.getFullYear(), startDate.getMonth(), index + 1);
        }
      }
      this.vacationFiltered.push(availableDates);
    }
  }

  showVacationInfoText() {
    let startUiCellIndex;
    let vacationUILength;
    let shift;
    for (let index = 0; index < this.dayCells.length; ++index) {
      if (this.dayCells[index].component.className.includes("vacation-cell_ui-start")) {
        startUiCellIndex = index;
      }
      if (this.dayCells[index].component.className.includes("vacation-cell_ui-end")) {
        vacationUILength = index - startUiCellIndex;
        if (vacationUILength % 2 === 0) {
          shift = vacationUILength / 2;
          this.dayCells[startUiCellIndex + shift].component.className +=
            " vacation-cell_type-text vacation-cell_type-text_left_s";
        } else {
          shift = (vacationUILength - 1) / 2;
          this.dayCells[startUiCellIndex + shift].component.className +=
            " vacation-cell_type-text vacation-cell_type-text_left_l";
        }
      }
    }
  }

  generateTeamItem() {
    this.generateVacationSets();
    this.component.className = `employeeКRow`;
    const nameCell = document.createElement("td");
    nameCell.className = "nameCell";
    nameCell.textContent = this.personData.name;
    this.component.append(nameCell);
    for (let index = 1; index <= this.daysInCurrentMonth; index++) {
      const dayCell = new DayCell(
        this.component,
        this.vacationFiltered,
        new Date(this.date.getFullYear(), this.date.getMonth(), index),
      );

      dayCell.render();
      this.vacationSum += dayCell.vacationSum;
      this.dayCells.push(dayCell);
    }
    this.vacationSumCell.updateVacationSumCell(this.vacationSum);
    this.vacationSumCell.render();
    this.showVacationInfoText();
  }

  updateTeamItem(newDate) {
    const daysInPreviousMonth = this.daysInCurrentMonth;
    // добавить функции для смены даты, дней
    this.date = newDate;
    this.vacationSum = 0;
    this.daysInCurrentMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    this.generateVacationSets();

    for (let index = 0; index < daysInPreviousMonth && index < this.daysInCurrentMonth; index++) {
      this.dayCells[index].updateDayCell(
        this.vacationFiltered,
        new Date(this.date.getFullYear(), this.date.getMonth(), index + 1),
      );
      this.vacationSum += this.dayCells[index].vacationSum;
    }
    if (this.daysInCurrentMonth < daysInPreviousMonth) {
      const cellsToRemove = this.dayCells.splice(this.daysInCurrentMonth, daysInPreviousMonth - this.daysInCurrentMonth);
      for (const cellToRemove of cellsToRemove) {
        cellToRemove.component.remove();
      }
    } else if (this.daysInCurrentMonth > daysInPreviousMonth) {
      this.component.lastElementChild.remove();
      for (let index = daysInPreviousMonth + 1; index <= this.daysInCurrentMonth; ++index) {
        const dayCell = new DayCell(
          this.component,
          this.vacationFiltered,
          new Date(this.date.getFullYear(), this.date.getMonth(), index),
        );
        dayCell.render();
        this.vacationSum += dayCell.vacationSum;
        this.dayCells.push(dayCell);
      }
      this.vacationSumCell.render();
    }
    this.vacationSumCell.updateVacationSumCell(this.vacationSum);
    this.showVacationInfoText();
  }

  render() {
    this.generateTeamItem();
    super.render();
  }
}
