import { dateFormatter } from "./utils";

export function renderBody(currentDate, daysInMonth, team) {
  // get access to elements and create tbody
		let {name, members } = team;
    let table = document.querySelector("table");
    let tableBody = document.createElement("tbody");
    tableBody.className = `tableBodyData ${name.split(" ")[0].toLowerCase()}`;

  // create tr for employee and td for name

    members.forEach(member => {
      let { employeeName } = member; 
      let employeeКRow = document.createElement("tr");
      employeeКRow.className = "employeeКRow";
      let nameCell = document.createElement("td");
      nameCell.className = "nameCell";
      nameCell.innerHTML = employeeName;
      employeeКRow.appendChild(nameCell);

  // create cell for every day of the month anв insert them and check for weekend

      for (let j = 1; j <= daysInMonth; j++) {
          let dayName = dateFormatter.format(new Date(currentDate.getFullYear(), currentDate.getMonth(), j)).split(",")[0];
          let dayCell = document.createElement("td");
          (dayName === "Sat" || dayName === "Sun") ? dayCell.className = "dayCell weekend" : dayCell.className = "dayCell";
          employeeКRow.appendChild(dayCell);
      }
  // create td for sum

      let sumOfDaysOff = document.createElement("td");
      sumOfDaysOff.className = "sumOfDaysOff"
      sumOfDaysOff.innerHTML = 0;
      employeeКRow.appendChild(sumOfDaysOff);
      tableBody.appendChild(employeeКRow);
    })

  // get access to tr and append

    let spaceRow = document.createElement("tr");
    tableBody.appendChild(spaceRow);
    table.appendChild(tableBody);
}



