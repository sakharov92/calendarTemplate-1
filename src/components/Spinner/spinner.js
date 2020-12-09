import { PopupWindow } from "../PopupWindow";
import "./spinner.css";

export class Spinner extends PopupWindow {
  constructor(parentSelector) {
    super(parentSelector);
    this.component.classList.add("spinner__container");
    this.component.classList.remove(`popup__substrate`);
    // this.component.style.display = "none";
  }

  generateElement() {
    this.component.innerHTML = `
        <div class="windows8">
            <div class="wBall" id="wBall_1">
                <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_2">
                <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_3">
                <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_4">
                <div class="wInnerBall"></div>
            </div>
            <div class="wBall" id="wBall_5">
                <div class="wInnerBall"></div>
            </div>
        </div>
        `;
  }

  showSpinner() {
    // this.component.style.display = "flex"
    // event.preventDefault();
    this.show();
    console.log("this.spinnerContext");
  }

  render() {
    // this.showSpinner();
    this.generateElement();
    super.render();
  }
}
