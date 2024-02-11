///
{
    type Point = {
        x: number,
        y: number
    }

    abstract class Animation {
        abstract name: string
        abstract move(): void
        protected getPosition(): Point {
            return { x: 100, y: 300 }
        }
    }

    class Thank extends Animation {
        name: string = 'enemy'
        public move(): void {
            console.log(`${this.name} tank move`);
        }
    }

    class Player extends Animation {
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