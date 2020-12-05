import  { Component } from "../component";
// import { VacationForm } from "../VacationForm";
import "./popupWindow.css";


export class PopupWindow extends Component{
    constructor() {
        super('#app');
        this.popupSubstrate = this.component;
        this.popupSubstrate.classList.add("popup__substrate");
        this.popupSubstrate.innerHTML = `<div class="popup__window"></div>`;
        this.popupSubstrate.addEventListener('click', this.hide.bind(this));
        this.state = {
            error: false,
            loading: false
        }
        // this.vacationForm = new VacationForm(this.component);
    }


    hide(){
        this.popupSubstrate.style.display = "none";
    }

    show(){
        this.popupSubstrate.style.display = "block";
    }

    renderInnerComponent(popupInnerComponent = '') {
        this.popupSubstrate.innerHTML = `<div class="popup__substrate"><div class="popup__window">
            ${popupInnerComponent}
        </div></div>`;
    }

    render() {
        super.render();
        // if (this.state.error && this.state.loading){
        //     this.popup.renderInnerComponent(this.vacationForm.render());
        // }
        // this.vacationForm.render()
    }
}