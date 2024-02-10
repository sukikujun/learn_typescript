/// constructor 特性
{
    /*
    class User {
        public name: string
        constructor(name: string) {
            this.name = name
        }
    }
    */

    class User {
        constructor(public name: string, protected age?: number) {
            this.name = this.initName(name)
            this.age = age || 18
        }

        private initName(name: string) {
            return `${name}-Vtuber`
        }

        public show() {
            console.log(`name is ${this.name}, age is ${this.age}.`);
        }
    }
    
    const yurushi = new User('yurushi', 20)
    const robot = new User('robot')
    
    yurushi.show()
    robot.show()
    
}
