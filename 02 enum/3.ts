/// as const 断言
{
    let a: string = 'nibiiro yurushi'

    let b = 20 as const

    const arr = [a, b, 89, 'youtube', true] as const

    console.log(arr);

    const c = {
        name: a,
        age: b,
    }
    console.log(c);

    c.name = '1'
    // c.age = 2;
}
