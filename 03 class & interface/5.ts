/// readonly 
{
    class Axios {
        // readonly constructor 时可以修改
        protected readonly API_URL: string = 'https://www.baidu.com/api'
        
        public constructor(api_url?: string) {
            this.API_URL = api_url || this.API_URL
        }

        public get(url:string): any {
            console.log(`your request address is '${this.API_URL}/${url}'.`);
            return []
        }
    }

    const instance = new Axios()
    // 読み取り専用プロパティであるため、'ID_PREFFIX' に代入することはできません。
    // instance.ID_PREFFIX = '430520'

    instance.get('users')
    
    const instance2 = new Axios('https://www.yahoo.com/api')
    instance2.get('users')
}