/// property decorator transfer object property
{
    const LowerDecorator: PropertyDecorator = (target: object, propertyKey: string | symbol) => {
        let value: string
        Object.defineProperty(target, propertyKey, {
            get: () => {
                return value.toLowerCase()
            },
            set: v => {
                value = v
            }
        })
    }

    class User {
        @LowerDecorator
        public title: string | undefined
    }

    const obj = new User()
    obj.title = 'NIBIIRO YURUSHI'

    console.log(obj.title);
}