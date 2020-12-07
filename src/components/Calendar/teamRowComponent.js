import { Component } from "../component";
import { TeamName } from "./teamNameComponent";
import { TeamCell } from "./teamCellComponent";
import { TeamSum } from "./teamSumComponent";

export class TeamRowComponent extends Component {
  constructor(parentSelector, depTeamInfo, monthLength, date) {
    super(parentSelector, "tr");
    this.date = date;
    this.monthLength = monthLength;
    this.depTeamInfo = depTeamInfo;
    this.component.className = `mainRow ${this.depTeamInfo.name
      .split(" ")[0]
      .toLowerCase()}`;
    this.daysContext = [];
  }

  generateTeamHeader() {
    const teamName = new TeamName(this.component, this.depTeamInfo, this.date);
    this.component.append(teamName.component);
    const chevronButton = this.component.querySelector(".chevronBtn");
    chevronButton.addEventListener("click", () => {});
    
    for (let index = 0; index < 31; index++) {
      const teamCell = new TeamCell(
        this.component,
        this.depTeamInfo,
        this.monthLength,
        this.date,
      );
      this.daysContext.push(teamCell);
      this.component.append(teamCell.component);
      if (index >= this.monthLength) {
        teamCell.hide();
      }
    }
    const teamSum = new TeamSum();
    this.component.append(teamSum.component);
  }

  updateTeamHeader(newDate) {
    const daysInPreviousMonth = this.monthLength;
    this.monthLength = new Date(
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      0,
    ).getDate();

    const percentageOfAbsentData = this.daysContext[0].depTeamInfo
      .percentageOfAbsent;
    const percent = this.component.querySelector(".percent");
    const currentMonth = newDate.getMonth();
    percent.textContent = `${percentageOfAbsentData[currentMonth]} %`;

    if (this.monthLength < daysInPreviousMonth) {
      for (let index = this.monthLength; index < daysInPreviousMonth; index++) {
        this.daysContext[index].hide();
      }
    } else if (this.monthLength > daysInPreviousMonth) {
      for (let index = daysInPreviousMonth; index < this.monthLength; index++) {
        this.daysContext[index].show();
      }
    }
  }

  // hideMembers(this.membersTable) {
  //   this.membersTable.forEach(element => {
  //     element.super.hide()
  //   });
  // }

  render() {
    this.generateTeamHeader();
    super.render();
  }
}
