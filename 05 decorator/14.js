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
/// error message decorator
{
    const ErrorDecorator = (title = 'nibiiro yurushi', fontSize = 16) => {
        return (target, propertyKey, descriptor) => {
            const method = descriptor.value;
            descriptor.value = () => {
                try {
                    method();
                }
                catch (error) {
                    console.log(`%c※${title}`, `color:green;font-size:${fontSize}px`);
                    console.log(`%c${error.message}`, 'color:red;font-size:16px');
                }
            };
        };
    };
    class User {
        find() {
            throw new Error('user not found!');
        }
        create() {
            throw new Error('user created fail');
        }
    }
    __decorate([
        ErrorDecorator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "find", null);
    __decorate([
        ErrorDecorator('sahiro', 20),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "create", null);
    const u = new User();
    u.find();
    u.create();
}
