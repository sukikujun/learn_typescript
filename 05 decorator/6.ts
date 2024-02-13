/// decorator 统一消息响应
{
    const MessageDecorator: ClassDecorator = (target: Function) => {
        target.prototype.message = (content: string) => {
            console.log(content);
        }
    }

    @MessageDecorator
    class LoginController {
        public login() {
            console.log('login success');
            (this as any).message('login success by decorator')
        }
    }
    new LoginController().login()

    @MessageDecorator
    class ArticleController {
        public store() {
            console.log('article stored');
            (this as any).message('article stored by decorator')
        }
    }

    new ArticleController().store()
}