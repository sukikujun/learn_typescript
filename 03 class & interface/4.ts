/// private 修饰符 和 子类重写的注意点
{
    class Person {
        protected name: string
        public age: number
        private email: string = 'nibiiroyurushi@gmail.com'
        protected info() {
            return `${this.name}'s age is ${this.age}, email is ${this.email}.`
        }
    }

    class User extends Person {
        constructor(name: string, age: number) {
            super();
            this.name = name
            this.age = age
        }
        // プロパティ 'info' は型 'User' ではプライベートですが、型 'Person' ではプライベートではありません。
        // 子类重写方法时，修饰符权限不能低于父类（public > protected > private）
        // private info() {
        public info() {
            return `${this.name}'s age is ${this.age}.`
        }
        public show() {
            return this.info()
        }
        public super_show() {
            return super.info()
        }
    }

    const ys = new User('yurushi', 19)
    console.log(ys.show())
    console.log(ys.super_show())
}