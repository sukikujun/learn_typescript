/// get, set 访问器
{
    class User {
        constructor(private _name: string) {
            this._name = _name
        }

        public get name(): string {
            return this._name
        }

        public set name(name: string) {
            this._name = name
        }

    }

    const ys = new User('nibiiro yurushi')
    // 调用 get name()
    ys.name = 'sahiro'
    console.log(ys.name);

    type Book = {
        title: string,
        price: number,
        author?: string
    };

    class Article {
        constructor(private _lists: Book[]) {
            this._lists = _lists
        }

        public get lists(): Book[] {
            return this._lists.map(article => {
                article.title = article.title.substring(0, 4) + (article.title.length > 4 ? '...' : '')
                return article
            })
        }

        public set lists(lists: Book[]) {
            this._lists = lists
        }
    }

    let article = new Article([{ title: 'java', price: 10.0 }, { title: 'javascript', price: 29.9, author: 'Linux' }]);
    console.log(article.lists);

}