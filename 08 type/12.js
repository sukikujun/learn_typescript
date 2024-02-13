"use strict";
/// keyof
{
    let ys = 'match';
    let y = 'name';
    y = 'age';
    function getAttribute(obj, key) {
        return obj[key];
    }
    const user = { a: 1, b: 'string', c: true, d: {} };
    console.log(getAttribute(user, 'c'));
    function getAttribute2(obj, key) {
        return obj[key];
    }
    console.log(getAttribute2(user, 'd'));
    console.log(getAttribute2('abc', 'length'));
}
