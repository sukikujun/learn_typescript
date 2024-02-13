/// void & never
{
    function vee(): void {
        console.log('void');
    }
    
    let x = vee()
    // void
    // x = 'undefined'

    function youtube(): never {
        throw new Error('error')
    }

    let yurushi: string = 'yurushi'
    yurushi = youtube()

    type A = never extends string ? string : boolean

    // => string | number
    type B = never | string | number  

}