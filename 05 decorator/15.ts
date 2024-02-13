/// user login check
{
    const user = {
        name: 'yurushi',
        isLogin: false
    }

    const AccessDecorator: MethodDecorator = (...args: any[]) => {
        const [,,descriptor] = args
        const method = descriptor.value
        descriptor.value = () => {
            if (user.isLogin === true) {
                return method()
            }
            alert('please login user')
            location.href = 'login.html'
        }
    }

    class Article {
        show() {
            console.log('show articel');
        }
        @AccessDecorator
        store() {
            console.log('store articel');
        }
    }
    
    const a = new Article()
    a.show()
    a.store()
}