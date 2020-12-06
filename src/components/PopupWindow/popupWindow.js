import  { Component } from "../component";
import "./popupWindow.css";


export class PopupWindow extends Component{
    constructor() {
        super('#app');
        this.popupSubstrate = this.component;
        this.popupSubstrate.classList.add("popup__substrate");
        this.popup = this.popupSubstrate.appendChild(document.createElement('div'));
        this.popup.classList.add("popup__window");
        this.popupSubstrate.addEventListener('click', this.hide.bind(this));
        // this.state = {
        //     error: false,
        //     loading: false
        // }
        this.popup.innerHTML = `
            <form class="form">
                <div class="form__header">
                    <h3 class="form__title">Vacation Request</h3>
                    <div class="form__days-counter">
                        <p class="form__days-amount">8</p>
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
    }


    hide(e){
      const target = e.target;
      e.preventDefault()
      if (target && target.matches(".popup__substrate") || target.matches(".form__cancel-btn")
          || target.matches(".form__send-btn")  ){
            this.popupSubstrate.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    show(){
        this.popupSubstrate.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }



    render() {
        super.render();
        this.show(); // после того как привяжешь удали это вызов. это был тест
    }
}