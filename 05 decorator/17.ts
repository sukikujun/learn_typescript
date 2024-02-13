/// api mock
{
    const RequestDecorator = (url: string): MethodDecorator => {
        return (...args: any[]) => {
            const [, , descriptor] = args
            const method = descriptor.value

            console.log(`url: ${url}`);
            new Promise<any[]>(resolve => {
                setTimeout(() => {
                    resolve([{ name: 'yurushi' }, { name: 'sahiro' }])
                }, 2000);
            }).then((users) => {
                method(users)
            })
        }
    }

    class User {
        @RequestDecorator('https://www.baidu.com/api/user')
        public all(users: any[]) {
            console.log(users);
        }
    }
}