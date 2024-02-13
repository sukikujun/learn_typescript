/// decorator factory
{
    const MusicDecoratorFactory = (type: string): ClassDecorator => {
        console.log(`type: ${type}`);
        switch (type) {
            case 'Tank':
                return (target: Function) => {
                    target.prototype.playMusic = (): void => {
                        console.log('play battle music!');
                    }
                }
            default:
                return (target: Function) => {
                    target.prototype.playMusic = (): void => {
                        console.log('play bg music!');
                    }
                }
        }
    }

    @MusicDecoratorFactory('Tank')
    class Tank { }

    const t = new Tank();
    (t as any).playMusic()

    @MusicDecoratorFactory('Player')
    class Player { }

    const p = new Player();
    (p as any).playMusic()

}

