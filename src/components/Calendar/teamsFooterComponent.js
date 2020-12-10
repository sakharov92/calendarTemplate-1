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
    if (this.itemsToShow > newArray.length) {
      for (let index = 0; index < this.itemsToShow - newArray.length; index++) {
        this.cells[this.itemsToShow - index].hide();
        this.itemsToShow -= 1;
        for (let element = 0; element < this.itemsToShow; element++) {
          this.cells[element].updateCell(newArray[element]);
        }
      }
    } else if (this.itemsToShow < newArray.length) {
      for (let index = 0; index < newArray.length - this.itemsToShow; index++) {
        this.cells[this.itemsToShow + index].show();
        this.itemsToShow += 1;
      }
      for (let index = 0; index < this.itemsToShow; index++) {
        this.cells[index].updateCell(newArray[index]);
      }
    } else {
      for (let index = 0; index < this.itemsToShow; index++) {
        this.cells[index].updateCell(newArray[index]);
      }
    }
    debugger
  }

  render() {
    super.render();
    this.generateTeamFooter();
  }
}
