import { PopupWindow } from "../PopupWindow";
import "./spinner";


export class Spinner extends PopupWindow {
    constructor(parentSelector){
        super(parentSelector);
    }



    generateElement() {
        this.component.innerHTML = `
        <div class="windows8">
        <div class="wBall" id="wBall_1">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_2">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_3">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_4">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_5">
            <div class="wInnerBall"></div>
        </div>
    </div>
        `;


    }



    render(){
        this.generateElement();
        super.render();
    }
}