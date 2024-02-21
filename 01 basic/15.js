"use strict";
{
    let ys;
    ys = 1;
    ys = '1';
    ys = true;
    ys = {};
    ys = [];
    ys = null;
    console.log(ys);
    let arr = [];
    arr.push('1', 1, true, {}, [], null, undefined);
    class Hd {
        constructor(name) {
            this.name = name;
        }
        get() {
            return 'name is:' + this.name;
        }
    }
    let o = new Hd('sahiro');
    console.log(o.get());
    // let o: any = new Hd('sahiro')
    // o.show();
    function sum(a, b) {
        return a + b;
    }
    // "noImplicitAny": true
    console.log('a', 2);
}
