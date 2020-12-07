import { Component } from "..";
import { TeamRowComponent } from "./TeamNameRow/teamRowComponent";
import { TeamItem } from "./EmployerRow/TeamItem";

export class Team extends Component {
  constructor(parentSelector, teamData, daysInCurrentMonth, date) {
    super(parentSelector, "tbody");
    this.teamData = teamData;
    this.date = date;
    this.daysInCurrentMonth = daysInCurrentMonth;
    this.arrayTeamItemsContext = [];
    this.employeeArray = [];
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

    let members = this.teamData.members;
    let teamName = this.teamData.name.split(" ")[0].toLowerCase();
    for (let member of members) {
      let item = new TeamItem(
        this.component,
        member,
        teamName,
        this.daysInCurrentMonth,
        this.date,
      );
      this.arrayTeamItemsContext.push(item);
      item.render();
      this.employeeArray.push(item);
    }
  }
  hideTable(e) {
    let functionWeShouldUse;
    if (e.target.classList.contains("hiddenEmployees")) {
      functionWeShouldUse = this.show;
      e.target.classList.remove("hiddenEmployees");
    } else {
      e.target.classList.add("hiddenEmployees");
      functionWeShouldUse = this.hide;
    }
    for (
      let employeeItem = 0;
      employeeItem < this.employeeArray.length;
      employeeItem++
    ) {
      functionWeShouldUse.call(this.employeeArray[employeeItem]);
    }
  }

  updateTeam(newDate) {
    this.teamHeaderContext.updateTeamHeader(newDate);
    this.arrayTeamItemsContext.forEach((e) => e.updateTeamItem(newDate));
  }
  render() {
    this.generateTeam();
    super.render();
  }
}
