/// public 修饰符
{
    class User {
        public name: string
        public age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        public info() {
            return `${this.name}'s age is ${this.age}.`
        }
    }

    const hd = new User('houdun', 22)
    const ys = new User('yurushi', 18)
    // console.log(hd.name);
    // console.log(ys.name);
    
    for (const key in ys) {
        if (Object.prototype.hasOwnProperty.call(ys, key)) {
            console.log(ys[key]);
        }
    }

}