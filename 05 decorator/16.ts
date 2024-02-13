/// permission check
{
    type UserType = {
        name: string
        isLogin: boolean
        permissions: string[]
    }

    const user: UserType = {
        name: 'yurushi',
        isLogin: true,
        permissions: ['store', 'manager']
    }

    const AccessDecorator = (keys: string[]): MethodDecorator => {
        return (...args: any[]) => {
            const [, , descriptor] = args
            const method = descriptor.value

            const validate = () => keys.every(k => user.permissions.includes(k))

            descriptor.value = () => {
                if (user.isLogin === true && validate()) {
                    alert('check success');
                    // return method()
                } else {
                    alert('check fail');
                }
            }
        }
    }

    class Article {
        show() {
            console.log('show articel');
        }
        @AccessDecorator(['store', 'manager'])
        store() {
            console.log('store articel');
        }
    }

    const a = new Article()
    // a.show()
    a.store()
}