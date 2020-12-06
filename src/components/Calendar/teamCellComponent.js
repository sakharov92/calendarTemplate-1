import { Component } from "../component";

export class TeamCell extends Component {
  constructor(parentSelector, depTeamInfo, monthLength, date) {
    super(parentSelector, "td");
    this.date = date;
    this.monthLength = monthLength;
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

  updateTeamCells(newDate) {
    const daysInPreviousMonth = this.monthLength;
    this.monthLength = new Date(
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      0,
    ).getDate();
    const daysList = Array.prototype.slice.call(
      this.component.querySelectorAll(".dayCellOfMainRow"),
    );
    if (this.monthLength < daysInPreviousMonth) {
      for (let index = this.monthLength; index < daysInPreviousMonth; index++) {
        daysList[index].remove();
      }
    } else if (this.monthLength > daysInPreviousMonth) {
      for (let index = daysInPreviousMonth; index < this.monthLength; index++) {
        const dayCell = document.createElement("td");
        dayCell.className = "dayCellOfMainRow";
        daysList.push(dayCell);
        daysList[index - 1].after(dayCell);
      }
    }
  }

  render() {
    super.render();
  }
}
