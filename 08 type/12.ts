/// keyof
{
    // keyof 获取对象属性
    type A = keyof string

    let ys: A = 'match'

    type B = keyof { name: string, age: number }

    let y: B = 'name'
    y = 'age'

    function getAttribute<T>(obj: T, key: keyof T): T[keyof T] {
        return obj[key]
    }

    const user = { a: 1, b: 'string', c: true, d: {} }
    console.log(getAttribute(user, 'c'));
    
    function getAttribute2<T, D extends keyof T>(obj: T, key: D): T[D] {
        return obj[key]
    }
    console.log(getAttribute2(user, 'd'));
    console.log(getAttribute2('abc', 'length'));
}