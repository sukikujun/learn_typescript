/// parameter decorator validate
import 'reflect-metadata'
{
    const RequiredDecorator: ParameterDecorator = (...args: any[]) => {
        console.log('parameter decorator');
        const [target,propertyKey,parameterIndex] = args

        let requiredParams: number[] = []
        requiredParams.push(parameterIndex)

        Reflect.defineMetadata('required', requiredParams, target, propertyKey)
    }

    const validateDecorator: MethodDecorator = (...args: any[]) => {
        console.log('validate decorator');
        const [target,propertyKey,descriptor] = args
        const method = descriptor.value

        descriptor.value = function () {
            const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || []

            console.log(arguments);
            requiredParams.forEach(index => {
                if (index > arguments.length || args[index] === undefined) {
                    throw new Error('please check parameter')
                }
            })

            return method.apply(this, arguments)
        }
        
    }

    class User {
        @validateDecorator
        find(id: number, @RequiredDecorator age: number = 18, name?: string) {
            console.log(`id: ${id}, age: ${age}, name: ${name}`);
        }
    }
    
    const u = new User()
    u.find(1)
}