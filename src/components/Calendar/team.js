import { Component } from "..";
import { TeamRowComponent } from "./teamRowComponent";
import { TeamItem } from "./EmployeeRow/TeamItem";

export class Team extends Component {
  constructor(parentSelector, teamData, daysInCurrentMonth, date) {
    super(parentSelector, "tbody");
    this.teamData = teamData;
    this.date = date;
    this.daysInCurrentMonth = daysInCurrentMonth;
    this.arrayTeamItemsContext = [];
  }

  generateTeam() {
    this.teamHeaderContext = new TeamRowComponent(this.component, this.teamData, this.daysInCurrentMonth, this.date);
    this.teamHeaderContext.render();

    const { members } = this.teamData;
    const teamName = this.teamData.name.split(" ")[0].toLowerCase();
    for (const member of members) {
      const item = new TeamItem(this.component, member, teamName, this.daysInCurrentMonth, this.date);
      this.arrayTeamItemsContext.push(item);
      item.render();
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
