/// exclude
{
    // type EXCLUDE<T, U> = T extends U ? never : T
    type A = string | boolean
    type B = string | number | boolean

    const c: Exclude<B, A> = 100

}