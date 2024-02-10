/// as const 断言
{
    var a = 'nibiiro yurushi';
    var b = 20;
    var arr = [a, b, 89, 'youtube', true];
    console.log(arr);
    var c = {
        name: a,
        age: b,
    };
    console.log(c);
    c.name = '1';
    // c.age = 2;
}
