import {
    PopupWindow
} from "../PopupWindow";
import "./vacationForm.css";


export class VacationForm extends PopupWindow {
    constructor(parentSelector) {
        super(parentSelector);
        this.component.classList.add("form__container");
    }


    generateElement() {
        this.component.innerHTML = `
            <form class="form">
                <div class="form__header">
                    <h3 class="form__title">Vacation Request</h3>
                    <div class="form__days-counter">
<!--                        <p class="form__days-amount">8</p>-->
                        <p class="form__days-text">days</p>
                    </div>
                </div>
                <div class="form__body">
                    <div class="form__dates-subtitle">
                        <h4>Dates</h4>
                    </div>
                    <div class="form__inputs-group">
                        <div class="form__input-wrapper">
                            <label for=".form__input-from">From</label>
                            <input class="form__input-from form__input" type="date" placeholder="15.06.2020">
                        </div>
                        <div class="form__input-wrapper">
                            <label for=".form__input-to">To</label>
                            <input class="form__input-to form__input" type="date" placeholder="18.06.2020">
                        </div>
                        <div class="form__select-wrapper">
                            <div class="form__dates-subtitle">
                                <h4>Vac Type</h4>
                            </div>
                            <select form=".form" name="" id="" class="form__select">
                                <option>Paid Day Off (PD)</option>
                                <option>Unpaid Day (UD)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form__footer">
                    <button class="form__cancel-btn form__btn" type="submit">Cancel</button>
                    <button class="form__send-btn form__btn" type="submit">Send</button>
                </div>
            </form>
        `;

        this.daysAmount = document.createElement('p');
        this.daysAmount.classList.add("form__days-amount");
        this.daysCounter = this.component.querySelector(".form__days-counter");
        this.daysAmount.textContent = '8';
        this.daysCounter.prepend(this.daysAmount);
    }

    render() {
        this.generateElement();
        super.render();
    }
}