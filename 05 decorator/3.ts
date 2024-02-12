/// decorator basic use
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

    @moveDecorator
    class Player { }

    const t = new Tank()
    console.log((t as any).channel);
    console.log((t as any).getPosition());
    
    const p = new Player()
    console.log((p as any).channel);
    console.log((p as any).getPosition());
    
}