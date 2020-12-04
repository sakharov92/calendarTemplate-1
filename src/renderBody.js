import { departmentTeams, dateFormatter } from "./utils";

export function renderBody(currentDate, daysInMonth, team) {
    let table = document.querySelector("table");
    let tableBody = document.createElement("tbody");
    tableBody.className = `tableBodyData ${team.name.split(" ")[0].toLowerCase()}`;
    let members = team.members;
    for (let i = 0; i < members.length; i++) {
        let employeeКRow = document.createElement("tr");
        employeeКRow.className = "employeeКRow";
        let nameCell = document.createElement("td");
        nameCell.className = "nameCell";
        nameCell.innerHTML = members[i].name;
        employeeКRow.appendChild(nameCell);
        for (let j = 1; j <= daysInMonth; j++) {
            let dayName = dateFormatter.format(new Date(currentDate.getFullYear(), currentDate.getMonth(), j)).split(",")[0];
            let dayCell = document.createElement("td");
            (dayName === "Sat" || dayName === "Sun") ? dayCell.className = "dayCell weekend" : dayCell.className = "dayCell";
            employeeКRow.appendChild(dayCell);
        }
        let sumOfDaysOff = document.createElement("td");
        sumOfDaysOff.className = "sumOfDaysOff"
        sumOfDaysOff.innerHTML = 0;
        employeeКRow.appendChild(sumOfDaysOff);
        tableBody.appendChild(employeeКRow);
    }
    let spaceRow = document.createElement("tr");
    tableBody.appendChild(spaceRow);
    table.appendChild(tableBody);
}



