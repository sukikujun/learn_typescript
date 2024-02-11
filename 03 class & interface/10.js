var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///
{
    var Animation_1 = /** @class */ (function () {
        function Animation() {
        }
        Animation.prototype.getPosition = function () {
            return { x: 100, y: 300 };
        };
        return Animation;
    }());
    var Thank = /** @class */ (function (_super) {
        __extends(Thank, _super);
        function Thank() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'enemy';
            return _this;
        }
        Thank.prototype.move = function () {
            console.log("".concat(this.name, " tank move"));
        };
        return Thank;
    }(Animation_1));
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'player';
            return _this;
        }
        Player.prototype.move = function () {
            console.log("".concat(this.name, " tank move"));
        };
        return Player;
    }(Animation_1));
    var t = new Thank();
    var p = new Player();
    t.move();
    p.move();
}
