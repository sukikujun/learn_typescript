/// typescript 约束 class
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.info = function () {
        return "".concat(this.name, "'s age is ").concat(this.age, ".");
    };
    return User;
}());
var hd = new User('houdun', 22);
var ys = new User('yurushi', 18);
console.log(ys.info());
var users = [];
users.push(ys);
users.push(hd);
console.log(users);
