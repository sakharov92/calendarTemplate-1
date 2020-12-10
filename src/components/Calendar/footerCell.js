import { Component } from "../component";

export class FooterCell extends Component {
  constructor(parentSelector, value) {
    super(parentSelector, "td");
    this.value = value;
  }

  generateCell() {
    this.component.className = `footerCell ${this.value === "weekend" ? "weekend" : ""}`;
    this.component.textContent = `${this.value === "weekend" ? "" : this.value}`;
  }

  updateCell(newItem) {
    if (this.component.textContent === "" && newItem !== "weekend") {
      this.component.classList.remove("weekend");
      this.component.textContent = newItem;
    } else if (this.component.textContent !== "" && newItem === "weekend") {
      this.component.classList.add("weekend");
      this.component.textContent = "";
    } else if (this.component.textContent !== newItem && newItem !== "weekend") {
      this.component.textContent = newItem;
    }
  }

  render() {
    super.render();
    this.generateCell();
  }
}
