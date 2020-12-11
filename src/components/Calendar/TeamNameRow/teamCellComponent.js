import { Component } from "../../component";

export class TeamCell extends Component {
  constructor(parentSelector, depTeamInfo, monthLength, date) {
    super(parentSelector, "td");
    this.depTeamInfo = depTeamInfo;
    this.monthLength = monthLength;
    this.component.className = "teamInfo";
    this.date = date;
  }

  toRender() {
    super.render();
  }
}
