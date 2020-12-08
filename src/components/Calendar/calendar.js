 import {
  Component
} from "..";
import {
  Navigation
} from "./navigation";
import {
  Table
} from "./table";
import {
  PopupWindow
} from "../PopupWindow";
import {
  VacationForm
} from "../VacationForm";
import { Spinner } from "../Spinner";
import './EmployerRow/TeamItem.css';


export class Calendar extends Component {
  constructor(parentSelector) {
    super(parentSelector);
    this.currentDate = new Date();
    this.component.classList.add("calendar");
    this.popup = new PopupWindow("#app");
    this.popupForm = new VacationForm(this.popup.component);
    this.spinner = new Spinner(this.popup.component);
    this.table = new Table(this.component, this.currentDate, this.popupForm);
    this.nav = new Navigation(this.component, this.currentDate, this.table);



  }
  render() {
    super.render();
    this.nav.render();
    this.table.render();
    this.popup.render();
    this.popupForm.render();
    this.spinner.render();
  }
}