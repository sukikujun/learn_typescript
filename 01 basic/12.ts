{
    let ys: object;
    ys = []
    ys = {}
    ys = Object.prototype
    // 型 'string' を型 'object' に割り当てることはできません。ts(2322)
    // ys = 'nibiiroyurushi'
    console.log(ys);

    let obj: { name: string, age: number, url?: string } = {
        name: 'sahiro',
        age: 20
    }

    obj = { name: 'hachi', age: 25, url: 'hachitaya' };
    console.log(obj);
    
}