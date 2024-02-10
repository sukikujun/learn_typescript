/// simple instance 
{
    class Axios {
        private static instance: Axios | null = null;
        private constructor() {
            console.log('init constructor');
        }

        public static make(): Axios {
            if (this.instance == null) {
                return this.instance = new Axios();
            }
            return this.instance
        }
    }

    const c1 = Axios.make();
    const c2 = Axios.make();
    const c3 = Axios.make();
    const c4 = Axios.make();
    const c5 = Axios.make();
}