/// generics & constructor
{
    var User = /** @class */ (function () {
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var obj = new User({ name: 'yurushi', age: 20 });
    var _a = obj.get(), name_1 = _a.name, age = _a.age;
    console.log({ name: name_1, age: age });
}
