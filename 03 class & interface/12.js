/// interface
{
    var ys = {
        name: 'nibiiro yurushi',
        age: 19,
        gender: 'female',
        info: function () {
            return "name:".concat(this.name, ", age:").concat(this.age, ".");
        }
    };
    console.log(ys.info());
}
