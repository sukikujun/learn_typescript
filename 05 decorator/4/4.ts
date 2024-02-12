/// decorator 语法糖
{
    type Position = {
        x: number
        y: number
    }
    const moveDecorator: ClassDecorator = (target: Function) => {
        target.prototype.channel = 'youtube'
        target.prototype.getPosition = (): Position => ({ x: 100, y: 100 })
    }

    @moveDecorator
    class Tank { }

    const t = new Tank()
    console.log((t as any).getPosition());
    
}