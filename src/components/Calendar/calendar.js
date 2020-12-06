import { Component } from "..";
import { TeamRowComponent } from "./teamRowComponent";

export class Calendar extends Component {
  constructor(parentSelector) {
    super(parentSelector);
    this.currentDate = new Date();
    this.teams = new TeamRowComponent(this.component, this.currentDate);
  }

  render() {
    super.render();
    this.teams.render();
  }
}
