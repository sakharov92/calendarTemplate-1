// eslint-disable-next-line unicorn/filename-case
import { Component } from "../..";

export class VacationSumCell extends Component {
  constructor(properties) {
    super(properties.parentComponent, "td");
    ({ vacationSum: this.vacationSum } = properties);
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
