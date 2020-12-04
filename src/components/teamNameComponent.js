import { Component } from "./component";

export class TeamName extends Component {
  render() {
    super.render();
    const { teams } = this.depTeams;
    const daysInCurrentMonth = super.getMonthLength(this.currentDate);
    this.createTeamName(this.currentDate, daysInCurrentMonth, teams);
  }

  createTeamName(currentDate, daysInMonth, teams) {
    teams.forEach((team) => {
      this.component = document.createElement("td");
      this.tdName = new Component(this.component, "div");
      this.component.append(this.tdName.component);
      console.log(this.component);
      this.updateTeamName(team);
    });
  }

  updateTeamName({name, percentageOfAbsent}) {
    const { component: tdName } = this.tdName;
    tdName.innerHTML = `<div class="infoWrapper"><p>${name}</p><div class="infoBlock"> <i class="fas fa-users"></i><span>${percentageOfAbsent}</span><div class="percent">0%</div><i class="fas chevronBtn fa-chevron-up"></i></div></div>`;
    console.log(tdName);
  }
}

// export function renderHead(currentDate, daysInMonth, team) {

// todo add access to elements

// let {name, percentageOfAbsent} = team;
// let table = document.querySelector("table");
// let tableBody = document.createElement("tbody");
// tableBody.className = `tableBody ${name.split(" ")[0].toLowerCase()}`;

// todo create elements tr & td

// let mainRow = document.createElement("tr");
// mainRow.className = "mainRow";
// let teamInfo = document.createElement("td");
// teamInfo.className = "teamInfo";

// todo add block into very team with button and info

// teamInfo.innerHTML = `<div class="infoWrapper"><p>${name}</p><div class="infoBlock"> <i class="fas fa-users"></i><span>${percentageOfAbsent}</span><div class="percent">0%</div><i class="fas chevronBtn fa-chevron-up"></i></div></div>`;

// todo append td into tr

// mainRow.appendChild(teamInfo);

// todo create td for every day of month & put it into td

// for (let i = 0; i < daysInMonth; i++) {
//     let dayCell = document.createElement("td");
//     dayCell.className = "dayCellOfMainRow";
//     mainRow.appendChild(dayCell);
// }

// todocreate td for sum and append it

//     let daySum = document.createElement("td");
//     daySum.className = "sumOfDaysOff";
//     mainRow.appendChild(daySum);
//     tableBody.appendChild(mainRow);
//     table.appendChild(tableBody);

//     renderBody(currentDate, daysInMonth, team);
// }
