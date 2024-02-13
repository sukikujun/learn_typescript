"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// decorator 统一消息响应
{
    const MessageDecorator = (target) => {
        target.prototype.message = (content) => {
            console.log(content);
        };
    };
    let LoginController = class LoginController {
        login() {
            console.log('login success');
            this.message('login success by decorator');
        }
    };
    LoginController = __decorate([
        MessageDecorator
    ], LoginController);
    new LoginController().login();
    let ArticleController = class ArticleController {
        store() {
            console.log('article stored');
            this.message('article stored by decorator');
        }
    };
    ArticleController = __decorate([
        MessageDecorator
    ], ArticleController);
    new ArticleController().store();
}
