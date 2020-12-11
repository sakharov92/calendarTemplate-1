"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PopupWindow = void 0;
var component_1 = require("../component");
require("./popupWindow.css");
var PopupWindow = /** @class */ (function (_super) {
    __extends(PopupWindow, _super);
    function PopupWindow(parentSelector) {
        var _this = _super.call(this, parentSelector) || this;
        _this.popupSubstrate = _this.component;
        _this.popupSubstrate.classList.add("popup__substrate");
        _this.popupSubstrate.addEventListener("click", _this.hide.bind(_this));
        return _this;
    }
    PopupWindow.prototype.hide = function (event) {
        var target = event.target;
        if ((target && target.matches(".popup__substrate")) || target.matches(".form__cancel-btn")) {
            event.preventDefault();
            this.popupSubstrate.style.display = "none";
            var popupChildren = this.popupSubstrate.childNodes;
            var arrayPopupChildren = Array.from(popupChildren);
            arrayPopupChildren.forEach(function (element) {
                element.style.display = "none";
            });
            document.body.style.overflow = "auto";
        }
    };
    PopupWindow.prototype.show = function () {
        this.parent.style.display = "flex";
        this.popupSubstrate.style.display = "flex";
        document.body.style.overflow = "hidden";
    };
    PopupWindow.prototype.render = function () {
        _super.prototype.render.call(this);
    };
    return PopupWindow;
}(component_1.Component));
exports.PopupWindow = PopupWindow;
