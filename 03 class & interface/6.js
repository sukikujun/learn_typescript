/// constructor 特性
{
    /*
    class User {
        public name: string
        constructor(name: string) {
            this.name = name
        }
    }
    */
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
            this.name = this.initName(name);
            this.age = age || 18;
        }
        User.prototype.initName = function (name) {
            return "".concat(name, "-Vtuber");
        };
        User.prototype.show = function () {
            console.log("name is ".concat(this.name, ", age is ").concat(this.age, "."));
        };
        return User;
    }());
    var yurushi = new User('yurushi', 20);
    var robot = new User('robot');
    yurushi.show();
    robot.show();
}
