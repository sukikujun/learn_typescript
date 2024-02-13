/// delay execute
{
    const SleepDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, description: PropertyDescriptor) => {
        const method = description.value
        description.value = () => {
            setTimeout(() => {
                method()
            }, 2000);
        }
    }

    class User {
        @SleepDecorator
        public response() {
            console.log('delay 2second ....');
        }
    }

    new User().response()
}
