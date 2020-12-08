import { Component } from "../../component";

export class TeamCell extends Component {
  constructor(parentSelector, depTeamInfo, monthLength, date) {
    super(parentSelector, "td");
    this.date = date;
    this.monthLength = monthLength;
    this.depTeamInfo = depTeamInfo;
    this.component.className = "teamInfo";
  }

  render() {
    super.render();
  }
}
