/// Pick
{
    type A = {
        name: string,
        age: number,
        skill: string
    }

    // type PICK<T, U extends keyof T> = {
    //     [P in U]: T[P]
    // }

    // type B = PICK<A, 'name' | 'age'>
    type B = Pick<A, 'name' | 'age'>

    const ys: B = {
        name: 'yurushi',
        age: 21
    }
}