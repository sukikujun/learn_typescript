/// generics & constructor
{
    class User<T> {
        public constructor(private _user: T) {}
        public get(): T {
            return this._user
        }
    }

    interface UserInterface {
        name: string
        age: number
    }
    const obj = new User<UserInterface>({name: 'yurushi', age: 20})
    const {name, age} = obj.get()
    console.log({name, age});
    
}