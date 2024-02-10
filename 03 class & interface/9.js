/// get, set 访问器
{
    var User = /** @class */ (function () {
        function User(_name) {
            this._name = _name;
            this._name = _name;
        }
        Object.defineProperty(User.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var ys = new User('nibiiro yurushi');
    // 调用 get name()
    ys.name = 'sahiro';
    console.log(ys.name);
    var Article = /** @class */ (function () {
        function Article(_lists) {
            this._lists = _lists;
            this._lists = _lists;
        }
        Object.defineProperty(Article.prototype, "lists", {
            get: function () {
                return this._lists.map(function (article) {
                    article.title = article.title.substring(0, 4) + (article.title.length > 4 ? '...' : '');
                    return article;
                });
            },
            set: function (lists) {
                this._lists = lists;
            },
            enumerable: false,
            configurable: true
        });
        return Article;
    }());
    var article = new Article([{ title: 'java', price: 10.0 }, { title: 'javascript', price: 29.9, author: 'Linux' }]);
    console.log(article.lists);
}
