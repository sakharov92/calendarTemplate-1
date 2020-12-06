import  { Component } from "../component";
import "./popupWindow.css";



export class PopupWindow extends Component{
    constructor(parentSelector) {
        super(parentSelector);
        this.popupSubstrate = this.component;
        this.popupSubstrate.classList.add("popup__substrate");
        this.popupSubstrate.addEventListener('click', this.hide.bind(this));
        // this.state = {
        //     error: false,
        //     loading: false
        // }
    }


    hide(e){
      const target = e.target;
      e.preventDefault()
      if (target && target.matches(".popup__substrate") || target.matches(".form__cancel-btn")
          || target.matches(".form__send-btn") ){
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
        this.show();
    }
}