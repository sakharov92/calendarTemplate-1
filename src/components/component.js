import { departmentTeams } from "../utils";

export class Component {
  // todo принимает (document.querySelector(parentSelector),тег)
  constructor(parentSelector, tagName = "div") {
    if (typeof parentSelector === "string") {
      this.parent = document.querySelector(parentSelector);
    } else {
      this.parent = parentSelector;
    }
    this.depTeams = departmentTeams;
    this.currentDate = new Date();
    this.component = document.createElement(tagName);
  }

  getMonthLength(currentDate) {
    this.daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    ).getDate();

    return this.daysInCurrentMonth;
  }

  // todo вставляет тег в родителя, возвращает созданный тег
  render() {
    this.parent.append(this.component);
    return this.component;
  }
}
