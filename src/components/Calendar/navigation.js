import { Component } from "..";
import { dateFormatter } from "../../utils";

export class Navigation extends Component {
  constructor(parentSelector, date, tableComponent) {
    super(parentSelector);
    this.tableComponent = tableComponent;
    this.date = date;
    this.component.innerHTML = `<button class="navBtn prevMonth"><i class="fas fa-arrow-left"></i></button>
        <p class="chosenMonth">${dateFormatter.format(this.date).replace(",", "").split(" ")[1]} ${this.date.getFullYear()}</p>
        <button class="navBtn nextMonth"><i class="fas fa-arrow-right"></i></button>`;
    this.component.querySelector(".prevMonth").addEventListener("click", this.prevMonth.bind(this));
    this.component.querySelector(".nextMonth").addEventListener("click", this.nextMonth.bind(this));
    this.component.classList.add("monthBlock");
  }

  prevMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.updateMonth(this.date);
    this.tableComponent.updateTableHead(this.date);
  }

  nextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    this.updateMonth(this.date);
    this.tableComponent.updateTableHead(this.date);
  }

  updateMonth(newDate) {
    this.component.querySelector(".chosenMonth").textContent = `${
      dateFormatter.format(newDate).replace(",", "").split(" ")[1]
    } ${this.date.getFullYear()}`;
  }

  render() {
    super.render();
  }
}
