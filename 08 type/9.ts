/// Partial
{
    type A = {
        name: string
        age: number
    }

    // type PARTIAL<T> = {
    //     [P in keyof T]?: T[P]
    // }

    // type B = PARTIAL<A>

    const ys: Partial<A> = {}

}