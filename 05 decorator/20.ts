/// 
{
    const RandomColorDecorator: PropertyDecorator = (target: object, propertyKey: string | symbol) => {
        const colors: string[] = ['red', 'green', 'blue', 'yellow', 'black', 'white' ]
        Object.defineProperty(target, propertyKey, {
            get() {
                return colors[Math.floor(Math.random() * colors.length)]
            }
        })
    }

    class User {
        @RandomColorDecorator
        public color: string | undefined
        
        public draw() {
            document.body.insertAdjacentHTML('beforeend', `<div style='height:200px;width:200px;color:${this.color}'>nibiiro yurushi</div>`)
        }
    }

    const u = new User()
    console.log(u.color);
    
    console.log(u.draw());
    
    
}