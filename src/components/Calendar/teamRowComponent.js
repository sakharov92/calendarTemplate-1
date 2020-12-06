import { Component } from "../component";
import { TeamName } from "./teamNameComponent";
import { TeamCell } from "./teamCellComponent";
import { TeamSum } from "./teamSumComponent";

export class TeamRowComponent extends Component {
  constructor(parentSelector, depTeamInfo, monthLength, date) {
    super(parentSelector, "tr");
    this.teamMembers = [];
    this.date = date;
    this.monthLength = monthLength;
    this.depTeamInfo = depTeamInfo;
    this.component.className = `mainRow ${this.depTeamInfo.name
      .split(" ")[0]
      .toLowerCase()}`;
  }

  generateTeamHeader() {
    // insert TeamName
    const teamName = new TeamName(this.depTeamInfo, this.date);
    teamName.append(this.component);

    for (let index = 0; index < this.monthLength; index++) {
      // insert TeamCell
      const teamCell = new TeamCell(
        this.depTeamInfo,
        this.monthLength,
        this.date,
      );
      teamCell.append(this.component);
    }
    // insert TeamSum
    const teamSum = new TeamSum();
    teamSum.prepend(this.component);
  }

  // rendering TeamRow
  render() {
    this.createTeamRow();
    super.render();
  }
}
