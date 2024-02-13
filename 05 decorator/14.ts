/// error message decorator
{
    const ErrorDecorator = (title: string = 'nibiiro yurushi', fontSize: number = 16): MethodDecorator => {
        return (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
            const method = descriptor.value
            descriptor.value = () => {
                try {
                    method()
                } catch (error: any) {
                    console.log(`%c※${title}`, `color:green;font-size:${fontSize}px`);
                    console.log(`%c${error.message}`, 'color:red;font-size:16px');
                }
            }
        }
    }

    class User {
        @ErrorDecorator()
        public find() {
            throw new Error('user not found!')
        }

        @ErrorDecorator('sahiro', 20)
        public create() {
            throw new Error('user created fail')
        }
    }

    const u = new User()
    u.find()
    u.create()
}