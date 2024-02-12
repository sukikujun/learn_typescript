/// generics & class
{
    var CollectionNumber = /** @class */ (function () {
        function CollectionNumber() {
            this.data = [];
        }
        CollectionNumber.prototype.push = function () {
            var _a;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, items);
        };
        CollectionNumber.prototype.shift = function () {
            return this.data.shift();
        };
        return CollectionNumber;
    }());
    var numberCollection = new CollectionNumber();
    numberCollection.push(1, 2, 3, 4, 5);
    console.log(numberCollection.data);
    console.log(numberCollection.shift());
    var Collections = /** @class */ (function () {
        function Collections() {
            this.data = [];
        }
        Collections.prototype.push = function () {
            var _a;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, items);
        };
        Collections.prototype.shift = function () {
            return this.data.shift();
        };
        return Collections;
    }());
    var yurushi = { name: 'yurushi', age: 20 };
    var sahiro = { name: 'sahiro', age: 21 };
    var collections = new Collections();
    collections.push(yurushi, sahiro);
    console.log(collections.shift());
}
