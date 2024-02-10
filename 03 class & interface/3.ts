/// protected 修饰符
{
    class Person {
        protected name: string
        public age: number
        protected info() {
            return `${this.name}'s age is ${this.age}.`
        }
    }

    class User extends Person {
        constructor(name: string, age: number) {
            super();
            this.name = name
            this.age = age
        }
        public show() {
            return this.info()
        }
    }

    const ys = new User('yurushi', 19)
    console.log(ys.show())
}