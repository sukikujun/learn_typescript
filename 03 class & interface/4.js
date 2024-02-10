var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// private 修饰符 和 子类重写的注意点
{
    var Person = /** @class */ (function () {
        function Person() {
            this.email = 'nibiiroyurushi@gmail.com';
        }
        Person.prototype.info = function () {
            return "".concat(this.name, "'s age is ").concat(this.age, ", email is ").concat(this.email, ".");
        };
        return Person;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(name, age) {
            var _this = _super.call(this) || this;
            _this.name = name;
            _this.age = age;
            return _this;
        }
        // プロパティ 'info' は型 'User' ではプライベートですが、型 'Person' ではプライベートではありません。
        // 子类重写方法时，修饰符权限不能低于父类（public > protected > default > private）
        // private info() {
        User.prototype.info = function () {
            return "".concat(this.name, "'s age is ").concat(this.age, ".");
        };
        User.prototype.show = function () {
            return this.info();
        };
        User.prototype.super_show = function () {
            return _super.prototype.info.call(this);
        };
        return User;
    }(Person));
    var ys = new User('yurushi', 19);
    console.log(ys.show());
    console.log(ys.super_show());
}
