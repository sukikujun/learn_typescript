/// 构造函数强制断言
var Yurushi = /** @class */ (function () {
    function Yurushi(el) {
        this.el = el;
    }
    Yurushi.prototype.html = function () {
        return this.el.innerHTML;
    };
    return Yurushi;
}());
var el = document.querySelector('#yurushi');
var yurushi = new Yurushi(el);
console.log(yurushi.html());
