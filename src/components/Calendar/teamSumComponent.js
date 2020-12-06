import { Component } from "../component";

export class TeamSum extends Component {
  constructor(parentSelector) {
    super(parentSelector, "td");
    this.component.className = "sumOfDaysOff";
    this.component.textContent = 0;
  }

  render() {
    super.render();
  }
}
