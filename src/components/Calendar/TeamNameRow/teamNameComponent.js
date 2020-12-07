import { Component } from "../../component";

export class TeamName extends Component {
  constructor(parentSelector, depTeamInfo, date, hideTable) {
    super(parentSelector, "td");
    this.hideTable = hideTable
    this.date = date;
    this.depTeamInfo = depTeamInfo;
    this.component.className = "teamInfo";
    this.component.innerHTML = `<div class="teamInfo__Wrapper">
      <p class="teamInfo__name">${this.depTeamInfo.name}</p>
      <div class="teamInfo__block"> 
        <i class="fas fa-users"></i>
          <span>${this.depTeamInfo.members.length}</span >
          <div class="percent">
          ${this.depTeamInfo.percentageOfAbsent[this.date.getMonth()]}%</div>
        <i class="fas chevronBtn fa-chevron-up"></i>
      </div >
    </div >`;
    this.chevronBtn = this.component.querySelector(".chevronBtn");
    this.chevronBtn.addEventListener("click", this.hideTable);
  }
  
  render() {
    super.render();
  }
}
