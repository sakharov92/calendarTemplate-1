import { Component } from "../component";
import { FooterCell } from "./footerCell";

export class TeamsFooter extends Component {
  constructor(parentSelector, allVacations) {
    super(parentSelector, "tr");
    this.component.className = "teamsFooter";
    this.allVacations = allVacations;
    this.cells = [];
    const header = document.createElement("td");
    header.className = "footerHeader";
    header.textContent = "Day-Person Stats";
    this.component.append(header);
    this.itemsToShow = 31;
  }

  generateTeamFooter() {
    for (let index = 0; index < 31; index++) {
      const cell = new FooterCell(this.component, 0);
      cell.render();
      this.cells.push(cell);
    }
    this.updateTeamFooter(this.allVacations);
    const cellSum = new FooterCell(this.component, "");
    cellSum.render();
  }

  updateTeamFooter(newArray) {
    let itemsFixedSum = this.itemsToShow-1;
    if (this.itemsToShow > newArray.length) {
      for (let index = 0; index < itemsFixedSum + 1 - newArray.length; index++) {
        this.cells[itemsFixedSum - index -1].hide();
        this.itemsToShow -= 1;
      }
      for (let element = 0; element < newArray.length; element++) {
        this.cells[element].updateCell(newArray[element]);
      }
    } else if (this.itemsToShow < newArray.length) {
      for (let index = 0; index < newArray.length - itemsFixedSum + 1; index++) {
        this.cells[itemsFixedSum + index - 1].show();
        this.itemsToShow += 1;
      }
      if(this.itemsToShow>31){
        this.itemsToShow=31;
      }
      for (let index = 0; index < newArray.length; index++) {
        this.cells[index].updateCell(newArray[index]);
      }
    } else {
      for (let index = 0; index < newArray.length; index++) {
        this.cells[index].updateCell(newArray[index]);
      }
    }
  }

  render() {
    super.render();
    this.generateTeamFooter();
  }
}
