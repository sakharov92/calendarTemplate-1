export class Component {
  constructor(parentSelector, tagName = "div") {
    if (typeof parentSelector === "string") {
      this.parent = document.querySelector(parentSelector);
    } else {
      this.parent = parentSelector;
    }
    this.component = document.createElement(tagName);
  }
  hide() {
    this.component.style.display = "none";
  }
  show() {
    this.component.style.display = "";
  }
  render() {
    this.parent.append(this.component);
    return this.component;
  }
}
