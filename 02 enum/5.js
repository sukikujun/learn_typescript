/// 解构断言
function hd() {
    var a = 'nibiiro yurushi';
    var b = function (x, y) { return x + y; };
    return [a, b];
}
var _a = hd(), n = _a[0], m = _a[1];
console.log(m(123, 45));
/*
function hd() {
    let a = 'nibiiro yurushi'
    let b = (x: number, y: number): number => x + y
    return [a, b] as [typeof a, typeof b]
}

const [n, m] = hd()
console.log(m(1, 23));
*/
/*
const [ n, m ] = hd();
// Type 'string' has no call signatures
// m(1,2)

console.log((m as Function)(1, 2))
*/
/*
// const [n, m] = hd() as [string, Function]; //
const [n, m] = hd() as [string, (x: number, y: number) => number]; // 调用 m() 的时候有参数提示
console.log(m(1, 3));
*/
