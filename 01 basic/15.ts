{
    let ys: any;
    ys = 1;
    ys = '1'
    ys = true
    ys = {}
    ys = []
    ys = null

    console.log(ys);

    let arr: Array<any> = []
    arr.push('1', 1, true, {}, [], null, undefined)

    class Hd {
        constructor(private name: string) {}

        get(): string {
            return 'name is:' + this.name;
        }
    }
    
    let o: Hd = new Hd('sahiro');
    console.log(o.get());
    
    // let o: any = new Hd('sahiro')
    // o.show();

    function sum(a:number, b:number) {
        return a + b
    }
    // "noImplicitAny": true
    console.log('a', 2);
}