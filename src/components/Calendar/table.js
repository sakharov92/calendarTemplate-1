import {
    Component
} from "..";
import {
    dateFormatter
} from "../../utils"
import {
    departmentTeams
} from "../../index";
import {
    Team
} from "./team";

export class Table extends Component {
    constructor(parentSelector, date, popupWindowContext) {
        super(parentSelector, "table");
        this.popupWindowContext = popupWindowContext;
        this.teamsContext = [];
        this.date = date;
        this.component.innerHTML = `<thead><tr class="outputCalendar"></tr></thead>`;
        this.daysInCurrentMonth = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0,
        ).getDate();
    }
    generateTableHead() {
        let outputCalendarHTML = `<td class="addVacationCell outputItem "><button class="addVacationBtn"><span>+</span>Add Vacation</button></td>`;
        let outputCalendar = this.component.querySelector(".outputCalendar");
        for (let i = 1; i <= this.daysInCurrentMonth; i++) {
            let chosenDate = new Date(
                this.date.getFullYear(),
                this.date.getMonth(),
                i,
            );
            const [dayName, , date] = dateFormatter
                .format(chosenDate)
                .replace(",", "")
                .split(" ");
            let isWeekend = dayName === "Sat" || dayName === "Sun";
            outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
                <span class="outputDay">${dayName.slice(0, -1)}</span> 
                <span class="outputDate">${date}</span>
                </td>`;
        }
        outputCalendarHTML += `<td class="sumCell outputItem weekend">Sum</td>`
        outputCalendar.innerHTML = outputCalendarHTML;
        const addVacationBtn = this.component.querySelector(".addVacationBtn");
        addVacationBtn.addEventListener("click", this.popupWindowContext.show.bind(this.popupWindowContext))
    }
    updateTableHead(newDate) {
        let daysInPrevMonth = this.daysInCurrentMonth;
        this.daysInCurrentMonth = new Date(
            newDate.getFullYear(),
            newDate.getMonth() + 1,
            0,
        ).getDate();
        let daysList = Array.prototype.slice.call(this.component.querySelectorAll(".outputItem"));
        daysList.shift();
        daysList.pop();
        if (this.daysInCurrentMonth < daysInPrevMonth) {
            for (let j = this.daysInCurrentMonth; j < daysInPrevMonth; j++) {
                daysList[j].parentElement.removeChild(daysList[j]);
            }
        } else {
            if (this.daysInCurrentMonth > daysInPrevMonth) {
                for (let i = daysInPrevMonth; i < this.daysInCurrentMonth; i++) {
                    let newCell = document.createElement("td");
                    newCell.className = "outputItem";
                    newCell.innerHTML = `
                                <span class="outputDay"></span> 
                                <span class="outputDate">${i + 1}</span>`
                    daysList.push(newCell);
                    daysList[i - 1].after(newCell);
                }
            }
        }
        for (let i = 1; i <= this.daysInCurrentMonth; i++) {
            let chosenDate = new Date(
                newDate.getFullYear(),
                newDate.getMonth(),
                i,
            );
            const [dayName] = dateFormatter
                .format(chosenDate)
                .replace(",", "")
                .split(" ");
            let isWeekend = dayName === "Sat" || dayName === "Sun";
            daysList[i - 1].querySelector(".outputDay").textContent = dayName.slice(0, -1);
            (isWeekend) ? daysList[i - 1].classList.add("weekend") : daysList[i - 1].classList.remove("weekend");
        }
        this.teamsContext.forEach(e => e.updateTeam(newDate));
    }
    render() {
        for (let i = 0; i < departmentTeams.teams.length; i++) {
            let team = new Team(this.component, departmentTeams.teams[i], this.daysInCurrentMonth, this.date);
            this.teamsContext.push(team);
            team.render();
        }
        this.generateTableHead();
        super.render();
    }
}