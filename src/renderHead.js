import { renderBody } from "./renderBody"

export function renderHead(currentDate, daysInMonth, team) {
    let table = document.querySelector("table");
    let tableBody = document.createElement("tbody");
    tableBody.className = `tableBody ${team.name.split(" ")[0].toLowerCase()}`;
    let mainRow = document.createElement("tr");
    mainRow.className = "mainRow";
    let teamInfo = document.createElement("td");
    teamInfo.className = "teamInfo";
    teamInfo.innerHTML = `<div class="infoWrapper"><p>${team.name}</p><div class="infoBlock"> <i class="fas fa-users"></i><span>${team.percentageOfAbsent}</span><div class="percent">0%</div><i class="fas chevronBtn fa-chevron-up"></i></div></div>`;
    mainRow.appendChild(teamInfo);
    for (let i = 0; i < daysInMonth; i++) {
        let dayCell = document.createElement("td");
        dayCell.className = "dayCellOfMainRow";
        mainRow.appendChild(dayCell);
    }
    let dayCell = document.createElement("td");
    dayCell.className = "sumOfDaysOff";
    mainRow.appendChild(dayCell);
    tableBody.appendChild(mainRow);
    table.appendChild(tableBody);
    renderBody(currentDate, daysInMonth, team);

}
