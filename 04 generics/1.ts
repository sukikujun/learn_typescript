/// generics
{
    // let a: string = 'nibiiro yurushi'
    // a = 34
    // console.log(a);

    // function dumpString(arg: string): string {
    //     return arg
    // }

    // function dumpBoolean(arg: boolean): boolean {
    //     return arg
    // }

    /// 使用泛型
    function dump<T>(arg: T): T {
        return arg
    }

    let ys = dump(true);
    console.log(ys);
    let ys2 = dump('nibiiro yurushi')
    console.log(ys2);
}