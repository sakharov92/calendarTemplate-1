import { PopupWindow } from "../PopupWindow";
import "./error.css";

export class Error extends PopupWindow {
    constructor(parentSelector){
        super(parentSelector);
        this.component.classList.add("error-container");
        this.component.classList.remove("popup__substrate");
    }

    generateElement() {
        this.component.innerHTML = `
                <div class="error-container__icon">
                    <img src="stop.png" alt="stop" />
                </div>
                 <div class="error-container__text-block>
                    <h4 class="error-container__title">stop!</h4>
                    <p class="error-container__text">Something is wrong, try again! </p>
                </div>
        `;
    }

    // show(){
    //     this.component.querySelector(".error-container").classList.add("show")
    // }

    render(){
        this.generateElement();
        super.render();
    }
}
