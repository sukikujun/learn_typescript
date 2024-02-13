/// highlight
{
    const highlightDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, description: PropertyDescriptor) => {
        const method = description.value
        description.value = () => {
            return `<div style='color:red'>${method()}</div>`
        }
    }

    class User {
        @highlightDecorator
        public response() {
            return 'nibiiro yurushi'
        }
    }
    
    console.log(new User().response());
    document.body.insertAdjacentHTML('beforeend', new User().response())
}