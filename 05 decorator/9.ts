/// static method decorator
{
    const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, description: PropertyDescriptor) => {
        // 
        description.writable = false

        description.value = () => {
            console.log('static 鈍色聴');
        }
    }
    
    class User {
        @showDecorator
        public static show() {
            console.log('static nibiiro yurushi');
        }
    }
    
    // description.writable = false, 不可修改
    // User.show = () => {
    //     console.log('show method');
    // }

    User.show()
}
