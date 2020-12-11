import { Component } from "../../component";

interface IMembers {
  name: string;
  vocation: { [ key: string]: string};
}
interface ITeams {
  members: Array<IMembers>;
  name: string;
  percentageOfAbsent: number[];
}

export class TeamCell extends Component {
  depTeamInfo: ITeams;
  monthLength: number;
  date: Date;

  constructor(parentSelector: object, depTeamInfo: ITeams, monthLength: number, date: Date) {
    super(parentSelector, "td");
    this.depTeamInfo = depTeamInfo;
    this.monthLength = monthLength;
    this.component.className = "teamInfo";
    this.date = date;
  }

  toRender() {
    super.render();
  }
}
