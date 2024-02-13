"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// 
{
    const RandomColorDecorator = (target, propertyKey) => {
        const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
        Object.defineProperty(target, propertyKey, {
            get() {
                return colors[Math.floor(Math.random() * colors.length)];
            }
        });
    };
    class User {
        draw() {
            document.body.insertAdjacentHTML('beforeend', `<div style='height:200px;width:200px;color:${this.color}'>nibiiro yurushi</div>`);
        }
    }
    __decorate([
        RandomColorDecorator,
        __metadata("design:type", Object)
    ], User.prototype, "color", void 0);
    const u = new User();
    console.log(u.color);
    console.log(u.draw());
}
