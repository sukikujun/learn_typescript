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
        
        console.log(Reflect.getMetadata('required', target, propertyKey));
    }

    class User {
        @validateDecorator
        find(@RequiredDecorator id: number, name?: string) {
            console.log(id);
        }
    }
    
    const u = new User()
    u.find(1)
}