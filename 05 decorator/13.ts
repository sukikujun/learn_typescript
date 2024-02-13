/// error decorator
{
    const ErrorDecorator: MethodDecorator = (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const method = descriptor.value
        descriptor.value = () => {
            try {
                method()
            } catch (error: any) {
                console.log(`%c※nibiiro yurushi`, 'color:green;font-size:32px');
                console.log(`%c${error.message}`, 'color:red;font-size:16px');
            }
        }
    }
    
    class User {
        @ErrorDecorator
        public find() {
            throw new Error('user not found!')
        }

        @ErrorDecorator
        public create() {
            throw new Error('user created fail')
        }
    }
    
    const u = new User()
    u.find()
    u.create()
}