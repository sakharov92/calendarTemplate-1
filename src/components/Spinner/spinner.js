import { PopupWindow } from "../PopupWindow";
import "./spinner.css";

export class Spinner extends PopupWindow {
  constructor(parentSelector) {
    super(parentSelector);
    this.component.classList.add("spinner__container");
    this.component.classList.remove(`popup__substrate`);
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
    this.show();
  }

  hideSpinner(){
    this.hide();
  }

  render() {
    this.generateElement();
    super.render();
  }
}
