import { Component } from "../component";
import "./popupWindow.css";

export class PopupWindow extends Component {
  constructor(parentSelector) {
    super(parentSelector);
    this.popupSubstrate = this.component;
    this.popupSubstrate.classList.add("popup__substrate");
    this.popupSubstrate.addEventListener("click", this.hide.bind(this));
  }

  hide(event) {
    const { target } = event;
    if ((target && target.matches(".popup__substrate")) || target.matches(".form__cancel-btn")) {
      event.preventDefault();
      this.popupSubstrate.style.display = "none";
      const popupChildren = this.popupSubstrate.childNodes;
      for (let i = 0; i < popupChildren.length; i++){
        popupChildren[i].style.display = "none"
      }
      document.body.style.overflow = "auto";
    }
  }

  show() {
    this.parent.style.display = "flex";
    this.popupSubstrate.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  render() {
    super.render();
  }
}
