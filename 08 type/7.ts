/// extract
{
    // type EXTRACT<T, U> = T extends U ? T : never

    type A = string | number | boolean
    type B = number | symbol | string
    
    let ys: Extract<A, B> = 'yurushi'
    ys = 19

}