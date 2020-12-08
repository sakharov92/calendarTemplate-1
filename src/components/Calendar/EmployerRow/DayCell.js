import { Component } from "../..";

export class DayCell extends Component {
  constructor(parentComponent, vacationFiltered, date) {
    super(parentComponent, 'td');
    this.vacation = vacationFiltered;
    this.date = date;
    this.vacationSum = 0;
  }
  get isWeekend() {
    const currentDay = this.date.getDay();
    return currentDay % 7 === 0 || currentDay % 7 === 6;
  }
  get isVacation() {
    const cellDate = this.date.toISOString();
    for(let vacationItem of this.vacation) {
      if(vacationItem.set.has(cellDate)) {
        this.increaseVacationSum();
        return {type: vacationItem.type};
      }
    }
    return false;
  }
  increaseVacationSum() {
    this.vacationSum = 1;
  }
  generateDayCell() {
    let isWeekend = this.isWeekend;
    isWeekend === true ? this.component.className = 'dayCell weekend' :
      this.component.className = 'dayCell';

    if(!isWeekend) {
      const vacationInfo = this.isVacation;
      if(typeof vacationInfo === 'object') {
        if(this.parent.className.includes('frontend')) {
          vacationInfo.type === 'Paid' ? this.component.className += ' frontend__vacation-cell_paid' :
            this.component.className += ' frontend__vacation-cell_unpaid'
        }else if(this.parent.className.includes('backend')) {
          vacationInfo.type === 'Paid' ? this.component.className += ' backend__vacation-cell_paid' :
            this.component.className += ' backend__vacation-cell_unpaid'
        }
      }
    }
  }
  updateDayCell(newVacationFiltered, newDate) {
    //добавить функции для обновления
    this.vacation = newVacationFiltered;
    this.date = newDate;
    this.vacationSum = 0;

    this.generateDayCell()
  }
  render() {
    this.generateDayCell();
    super.render();
  }
}