import { Component } from "..";
import { Navigation } from "./navigation";
import { Table } from "./table";
import { PopupWindow } from "../PopupWindow";
import { VacationForm } from "../VacationForm";


export class Calendar extends Component {
  constructor(parentSelector) {
    super(parentSelector);
    this.currentDate = new Date();
    this.component.classList.add("calendar");
    this.table = new Table(this.component, this.currentDate);
    this.nav = new Navigation(this.component, this.currentDate, this.table);
    this.popup = new PopupWindow(this.component);
    this.vacationForm = new VacationForm(this.component);
  }
  render() {
    super.render();
    this.nav.render();
    this.table.render();
    this.popup.render();
    this.vacationForm.render();
  }




  // createCurrentLabel() {
  //   this.component.prepend(this.label.component);
  //   this.updateCurrentLabel(this.currentDate);
  // }

  // updateCurrentLabel(date) {
  //   const { component: label } = this.label;
  //   label.textContent = dateFormatter
  //     .format(new Date(date))
  //     .replace(",", "")
  //     .split(" ")[1];
  // }
}
