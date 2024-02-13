"use strict";
/// namespace 嵌套
var Vtuber;
(function (Vtuber) {
    Vtuber.yurushi = 'yurushi';
    let Tsubaki;
    (function (Tsubaki) {
        Tsubaki.u = 'kafu';
    })(Tsubaki = Vtuber.Tsubaki || (Vtuber.Tsubaki = {}));
})(Vtuber || (Vtuber = {}));
console.log(Vtuber.Tsubaki.u);
