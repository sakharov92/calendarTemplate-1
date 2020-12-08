import { Component } from "../..";

export class VacationSumCell extends Component {
  constructor(parentComponent, vacationSum) {
    super(parentComponent, "td");
    this.vacationSum = vacationSum;
  }

  generateVacationSumCell() {
    this.component.className = "sumOfDaysOff";
    this.component.textContent = `${this.vacationSum}`;
  }

  updateVacationSumCell(newVacationSum) {
    this.vacationSum = newVacationSum;
    this.component.textContent = `${this.vacationSum}`;
  }

  render() {
    this.generateVacationSumCell();
    super.render();
  }
}