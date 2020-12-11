import { Component } from "..";
import { TeamRowComponent } from "./TeamNameRow/teamRowComponent";
import { TeamItem } from "./EmployeeRow/TeamItem";

export class Team extends Component {
  constructor(parentSelector, teamData, daysInCurrentMonth, date) {
    super(parentSelector, "tbody");
    this.teamData = teamData;
    this.date = date;
    this.daysInCurrentMonth = daysInCurrentMonth;
    this.arrayTeamItemsContext = [];
    this.employeeArray = [];
    this.dayPersonStats = new Array(daysInCurrentMonth).fill(0);
  }

  generateTeam() {
    this.teamHeaderContext = new TeamRowComponent(
      this.component,
      this.teamData,
      this.daysInCurrentMonth,
      this.date,
      this.hideTable.bind(this),
    );

    this.teamHeaderContext.render();

    const { members } = this.teamData;
    const teamName = this.teamData.name.split(" ")[0].toLowerCase();
    // eslint-disable-next-line no-restricted-syntax
    for (const member of members) {
      const item = new TeamItem({
        parentSelector: this.component,
        personData: member,
        teamName,
        daysInCurrentMonth: this.daysInCurrentMonth,
        date: this.date,
        dayPersonStats: this.dayPersonStats,
      });
      this.dayPersonStats = item.dayPersonStats;
      this.arrayTeamItemsContext.push(item);
      item.render();
      this.employeeArray.push(item);
    }
  }

  // eslint-disable-next-line unicorn/prevent-abbreviations
  hideTable(event) {
    let functionWeShouldUse;
    if (event.target.classList.contains("hiddenEmployees")) {
      functionWeShouldUse = this.show;
      event.target.classList.remove("hiddenEmployees");
    } else {
      event.target.classList.add("hiddenEmployees");
      functionWeShouldUse = this.hide;
    }
    for (let employeeItem = 0; employeeItem < this.employeeArray.length; employeeItem++) {
      functionWeShouldUse.call(this.employeeArray[employeeItem]);
    }
  }

  updateTeam(newDate) {
    this.daysInCurrentMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();
    this.dayPersonStats = new Array(this.daysInCurrentMonth).fill(0);
    this.teamHeaderContext.updateTeamHeader(newDate);
    for (let index = 0; index < this.employeeArray.length; ++index) {
      const employeeRow = this.employeeArray[index];
      employeeRow.updateTeamItem(newDate, this.dayPersonStats);
      this.employeeArray[index].dayPersonStats = employeeRow.dayPersonStats;
    }
  }

  render() {
    this.generateTeam();
    super.render();
  }
}
