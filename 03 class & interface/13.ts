/// 接口继承 多实现
{
    type Point = {
        x: number,
        y: number
    }

    interface PlayEndInterface {
        end(): void
    }
   
    /// 接口继承
    // interface AnimationInterface extends PlayEndInterface {
    //     name: string
    //     move(): void
    // }
    
    interface AnimationInterface {
        name: string
        move(): void
    }
    abstract class Animation {
        protected getPosition(): Point {
            return { x: 100, y: 300 }
        }
    }

    class Thank extends Animation implements AnimationInterface, PlayEndInterface {
        name: string = 'enemy'
        public end(): void {
            console.log('game over!');
        }
        public move(): void {
            console.log(`${this.name} tank move`);
        }
    }

    /// 多实现
    class Player extends Animation implements AnimationInterface, PlayEndInterface {
        name: string = 'player'
        public end(): void {
            console.log('game over!');
        }
        public move(): void {
            console.log(`${this.name} tank move`);
        }
    }

    const t = new Thank();
    const p = new Player();
    t.move()
    p.move()

    console.log(p.end());
}
