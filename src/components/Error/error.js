import { PopupWindow } from "../PopupWindow";
import "./error.css";

export class Error extends PopupWindow {
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
        <form class="form">
            <div class="error-container">
                <div class="error-container__icon">
                    <img src="stop.png" alt="stop" />
                </div>
                <div class="error-container__title">stop!</div>
                <div class="error-container__text">Something is wrong, try again!</div>
            </div>
            <div class="form__footer">
                <button class="form__cancel-btn form__btn" type="submit">Cancel</button>
            </div>
        </form>
        `;
    }

    show(){
        this.component.querySelector(".error-container").classList.add("show")
    }

    render(){
        this.generateElement();
        super.render();
    }
}
