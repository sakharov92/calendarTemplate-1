import { Component } from "./component";
import { TeamName} from "./teamNameComponent";

export class Teams extends Component {
  constructor(parentSelector) {
    super(parentSelector);
    this.component = document.createElement("tbody");
    this.teamBody = new Component(this.component, "tr");
  }

  render() {
    super.render();
    const { teams } = this.depTeams;
    this.createTeamRow(teams);
  }

  // create tr for every team
  createTeamRow(teams) {
    teams.forEach(() => {
      this.component.append(this.teamBody.component);
      console.log(this.component);
    });
  }
}
