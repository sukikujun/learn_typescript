/// typescript 约束 class

class User {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    info() {
        return `${this.name}'s age is ${this.age}.`
    }
}

const hd = new User('houdun', 22)
const ys = new User('yurushi', 18)
console.log(ys.info());

const users: User[] = []
users.push(ys)
users.push(hd)
console.log(users);

