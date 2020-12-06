import {
    Component
} from "../component";
import "./popupWindow.css";


export class PopupWindow extends Component {
    constructor(parentSelector) {
        super(parentSelector);
        this.popupSubstrate = this.component;
        this.popupSubstrate.classList.add("popup__substrate");
        this.popupSubstrate.addEventListener('click', this.hide.bind(this));
        this.state = {
            error: false,
            loading: false
        }
    }


    hide(e) {
        const target = e.target
        if (target && target.matches(".popup__substrate") || target.matches(".form__cancel-btn") ||
            target.matches(".form__send-btn")) {
            e.preventDefault()
            this.popupSubstrate.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    show() {
        this.parent.style.display = 'flex';
        this.popupSubstrate.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    chengeState(error = false, loading = false) {
        this.state.error = error;
        this.state.loading = loading;
    }

    render() {
        super.render();
    }
}