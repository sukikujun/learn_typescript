/// decorator method
{
    const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, description: PropertyDescriptor) => {
        description.value = () => {
            console.log('鈍色聴');
        }
    }
    
    class User {
        @showDecorator
        public show() {
            console.log('nibiiro yurushi');
        }
    }
    
    new User().show()
}