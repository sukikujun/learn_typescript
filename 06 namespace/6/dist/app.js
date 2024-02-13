define("User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.title = exports.User = void 0;
    var User;
    (function (User) {
        User.name = 'yurushi';
    })(User || (exports.User = User = {}));
    exports.title = 'YouTube';
});
define("App", ["require", "exports", "User"], function (require, exports, User_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.body.insertAdjacentHTML('beforeend', `<h2>${User_js_1.User.name}</h2>`);
});
