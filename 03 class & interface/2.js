/// public 修饰符
{
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
    // console.log(hd.name);
    // console.log(ys.name);
    for (var key in ys) {
        if (Object.prototype.hasOwnProperty.call(ys, key)) {
            console.log(ys[key]);
        }
    }
}
