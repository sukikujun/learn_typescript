/// class & interface
{
    type Point = {
        x: number,
        y: number
    }

    interface AnimationInterface {
        name: string
        move(): void
    }
    abstract class Animation {
        protected getPosition(): Point {
            return { x: 100, y: 300 }
        }
    }

    class Thank extends Animation implements AnimationInterface {
        name: string = 'enemy'
        public move(): void {
            console.log(`${this.name} tank move`);
        }
    }

    class Player extends Animation implements AnimationInterface {
        name: string = 'player'
        public move(): void {
            console.log(`${this.name} tank move`);
        }
    }

    const t = new Thank();
    const p = new Player();
    t.move()
    p.move()
}
