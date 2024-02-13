/// decorator 叠加
{
    type Position = {
        x: number
        y: number
    }
    const moveDecorator: ClassDecorator = (target: Function) => {
        target.prototype.channel = 'youtube'
        target.prototype.getPosition = (): Position => ({ x: 100, y: 100 })
    }
    
    const musicDecorator: ClassDecorator = (target: Function) => {
        target.prototype.playMusic = (): void => {
            console.log('play music!');
        }
    }

    @moveDecorator
    @musicDecorator
    class Tank { }

    const t = new Tank()
    console.log((t as any).getPosition());
    console.log((t as any).playMusic());
    
}
