import { renderBody } from "./renderBody"

export function renderHead(currentDate, daysInMonth, team) {

  // add access to elements

    let {name, percentageOfAbsent} = team;
    let table = document.querySelector("table");
    let tableBody = document.createElement("tbody");
    tableBody.className = `tableBody ${name.split(" ")[0].toLowerCase()}`;

  // create elements tr & td

    let mainRow = document.createElement("tr");
    mainRow.className = "mainRow";
    let teamInfo = document.createElement("td");
    teamInfo.className = "teamInfo";

  // add block into very team with button and info

    teamInfo.innerHTML = `<div class="infoWrapper"><p>${name}</p><div class="infoBlock"> <i class="fas fa-users"></i><span>${percentageOfAbsent}</span><div class="percent">0%</div><i class="fas chevronBtn fa-chevron-up"></i></div></div>`;

  // append td into tr

    mainRow.appendChild(teamInfo);

  // create td for every day of month & put it into td

    for (let i = 0; i < daysInMonth; i++) {
        let dayCell = document.createElement("td");
        dayCell.className = "dayCellOfMainRow";
        mainRow.appendChild(dayCell);
    }
    
  // create td for sum and append it

    let daySum = document.createElement("td");
    daySum.className = "sumOfDaysOff";
    mainRow.appendChild(daySum);
    tableBody.appendChild(mainRow);
    table.appendChild(tableBody);
  
    renderBody(currentDate, daysInMonth, team);
}
