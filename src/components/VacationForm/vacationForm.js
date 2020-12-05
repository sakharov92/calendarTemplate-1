import { Component } from '../component';
import './vacationForm.css';

export class VacationForm  extends  Component {
    constructor() {
        super('.popup__window');
        this.form = this.component;
        this.form.classList.add("popup__form");
        this.form.innerHTML = `<div>FORM!</div>`;
    }


    render() {
        super.render();
    }
}