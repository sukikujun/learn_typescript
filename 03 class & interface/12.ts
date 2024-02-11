/// interface
{
    interface UserInterface {
        name: string
        age?: number
        info?(): string
        // 任意参数名
        [key: string]: any
    }

    let ys: UserInterface = {
        name: 'nibiiro yurushi',
        age: 19,
        gender: 'female',
        info(): string {
            return `name:${this.name}, age:${this.age}.`
        }
    }

    console.log(ys.info!());
    

}