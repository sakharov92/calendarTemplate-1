import { Component } from "../component";
import "./popupWindow.css";

export class PopupWindow extends Component {
    popupSubstrate: HTMLElement
    constructor(parentSelector: object) {
        super(parentSelector)
        this.popupSubstrate = this.component;
        this.popupSubstrate.classList.add("popup__substrate");
        this.popupSubstrate.addEventListener("click", this.hide.bind(this));
    }

    hide(event:any){
        const target:HTMLElement  = event.target;
        if ((target && target.matches(".popup__substrate")) || target.matches(".form__cancel-btn")) {
            event.preventDefault();
            this.popupSubstrate.style.display = "none";
            const popupChildren: NodeListOf<ChildNode> = this.popupSubstrate.childNodes;
            const arrayPopupChildren:ChildNode[] = Array.from(popupChildren);
            arrayPopupChildren.forEach(element => {
                element.style.display = "none"
            })
            document.body.style.overflow = "auto";
        }
    }

    show() {
        this.parent.style.display = "flex";
        this.popupSubstrate.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    render():HTMLElement {
        super.render();
    }

}