import { Component } from "../..";
import { formatInputDate } from "../../../utils"
import { DayCell } from "./dayCell";

export class TeamItem extends Component {
    constructor(parentSelector, personData, teamName, daysInCurrentMonth, date) {
        super(parentSelector, "tr");
        this.date = date;
        this.teamName = teamName;
        this.daysInCurrentMonth = daysInCurrentMonth;
        this.personData = personData;
        this.dayCells = [];
        this.vacationSum = 0;
    }
    generateVacationSets() {
        this.vacationFiltered = [];
        for(let vacationItem of this.personData.vacations) {
            let startDate = formatInputDate(vacationItem.startDate);
            let endDate = formatInputDate(vacationItem.endDate);
            const firstDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth());
            const lastDayOfMonth = new Date(this.date.getFullYear(), this.date.getMonth(), this.daysInCurrentMonth);
            const availableDates = {
                set: new Set(),
                type: vacationItem.type
            }
            if(!(endDate < firstDayOfMonth) && !(startDate > lastDayOfMonth)) {
                let currentVacationDate = new Date(startDate.getTime());
                for(let i = currentVacationDate.getDate(); currentVacationDate <= lastDayOfMonth && currentVacationDate <= endDate; ++i) {

                    if(firstDayOfMonth <= currentVacationDate && lastDayOfMonth >= currentVacationDate) {
                        availableDates.set.add(currentVacationDate.toISOString());
                    }

                    currentVacationDate = new Date(startDate.getFullYear(), startDate.getMonth(), i);
                }
            }
            this.vacationFiltered.push(availableDates);
        }
    }
    generateTeamItem() {
        //debugger
        this.generateVacationSets();
        this.component.className = `employeeКRow ${this.teamName}`;
        let nameCell = document.createElement("td");
        nameCell.className = "nameCell";
        nameCell.textContent = this.personData.name;
        this.component.appendChild(nameCell);
        for (let j = 1; j <= this.daysInCurrentMonth; j++) {
            const dayCell = new DayCell(this.component, this.vacationFiltered,
              new Date(this.date.getFullYear(), this.date.getMonth(), j));
            dayCell.render();
            this.vacationSum += dayCell.vacationSum;
            this.dayCells.push(dayCell);
        }
        let sumOfDaysOff = document.createElement("td");
        sumOfDaysOff.className = "sumOfDaysOff"
        sumOfDaysOff.textContent = `${this.vacationSum}`;
        this.component.appendChild(sumOfDaysOff);
    }
    updateTeamItem(newDate) {
        let daysInPrevMonth = this.daysInCurrentMonth;

        //добавить функции для смены даты, дней
        this.date = newDate;
        this.vacationSum = 0;
        this.daysInCurrentMonth = new Date(
          this.date.getFullYear(),
          this.date.getMonth() + 1,
            0,
        ).getDate();
        this.generateVacationSets();

        for(let i = 0; i < daysInPrevMonth && i < this.daysInCurrentMonth; i++) {
            this.dayCells[i].updateDayCell(this.vacationFiltered,
              new Date(this.date.getFullYear(), this.date.getMonth(), i+1));
            this.vacationSum += this.dayCells[i].vacationSum;
        }
        if (this.daysInCurrentMonth < daysInPrevMonth) {
            let cellsToRemove = this.dayCells.splice(this.daysInCurrentMonth, daysInPrevMonth - this.daysInCurrentMonth);
            for(let cellToRemove of cellsToRemove) {
                cellToRemove.parent.removeChild(cellToRemove.component);
            }
        }else if(this.daysInCurrentMonth > daysInPrevMonth) {
            this.component.lastElementChild.remove();
            for(let i = daysInPrevMonth + 1; i <= this.daysInCurrentMonth; ++i) {

                const dayCell = new DayCell(this.component, this.vacationFiltered,
                  new Date(this.date.getFullYear(), this.date.getMonth(), i));
                this.vacationSum += dayCell.vacationSum;
                dayCell.render();
                this.dayCells.push(dayCell);
            }
            let sumOfDaysOff = document.createElement("td");
            sumOfDaysOff.className = "sumOfDaysOff"
            sumOfDaysOff.textContent = `${this.vacationSum}`;
            this.component.appendChild(sumOfDaysOff);
        }
        this.component.lastElementChild.textContent = `${this.vacationSum}`;
    }
    render() {
        this.generateTeamItem();
        super.render();
    }
}