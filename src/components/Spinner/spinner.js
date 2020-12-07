import { PopupWindow } from "../PopupWindow";
import "./spinner.css";

export class Spinner extends PopupWindow {
    constructor(parentSelector){
        super(parentSelector);
        // this.div = document.createElement(`div`);
        // this.div.classList.add("form__container");
        // this.component.appendChild(this.div);
        this.component.classList.add("form__container");
        this.component.classList.remove("popup__substrate");

    }

    generateElement() {
        this.component.innerHTML = `
        <div class="spinner__container">
            <div class="spinner">
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
        </div>
        `;
    }

    show(){
        this.component.querySelector(".spinner__container").classList.add("show")
    }

    render(){
        this.generateElement();
        super.render();
    }
}