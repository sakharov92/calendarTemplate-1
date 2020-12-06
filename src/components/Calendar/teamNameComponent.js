import { Component } from "../component";

export class TeamName extends Component {
  constructor(parentSelector, depTeamInfo, date) {
    super(parentSelector, "td");
    this.date = date;
    this.depTeamInfo = depTeamInfo;
    this.component.className = "teamInfo";
    this.component.textContent = `<div class="infoWrapper">
      <p>${this.depTeamInfo.name}</p>
      <div class="infoBlock"> 
        <i class="fas fa-users"></i>
          <span>${this.depTeamInfo.members.length}</span >
          <div class="percent">
          ${this.depTeamInfo.percentageOfAbsent[this.date.getMonth()]}%</div>
        <i class="fas chevronBtn fa-chevron-up"></i>
      </div >
    </div >`;
  }

  render() {
    super.render();
  }
}
