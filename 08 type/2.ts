/// 三元运算符
{
    type Vtuber = {
        category: string
    }

    type Vee = {
        category: string
        company: string
    }

    type Riron = Vee extends Vtuber ? true : false

    const r: Riron = true
    console.log(r, typeof r);
    
}
/// 联合类型
{
    type A = string
    type B = string | number
    
    const c: B extends A ? string : boolean = false
    const d: A extends B ? string : boolean = 'vee'
    console.log('c', c, 'd', d);
    
}