import { PopupWindow } from "../PopupWindow";
import "./error.css";

export class Error extends PopupWindow {
    constructor(parentSelector){
        super(parentSelector);
        this.component.classList.add("error__container");
        this.component.classList.remove("popup__substrate");
    }

    generateElement() {
        this.component.innerHTML = `
                        <div class="test__icon"></div>
                        <p class="error__text">Something is wrong, try again! </p>
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
