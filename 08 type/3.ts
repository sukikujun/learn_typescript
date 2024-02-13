///
{
    type A = string
    type B<T> = T extends A ? string : boolean

    // string | boolean
    const vee: B<string | number> = false
    // string
    // const vee2: B<string | string> = false

    // 完全匹配
    type AA = string | number
    type BB<T> = [T] extends [AA] ? string : boolean
    // string
    const vvee: BB<string | number> = 'vvee'

    type C = string | number
    type D<T> = T extends A ? string : 
                    T extends C ? symbol : boolean;

    // string | symbol
    const holo: D<string | number> = Symbol('holo')
}