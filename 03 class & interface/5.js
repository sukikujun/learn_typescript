/// readonly 
{
    var Axios = /** @class */ (function () {
        function Axios(api_url) {
            // readonly constructor 时可以修改
            this.API_URL = 'https://www.baidu.com/api';
            this.API_URL = api_url || this.API_URL;
        }
        Axios.prototype.get = function (url) {
            console.log("your request address is '".concat(this.API_URL, "/").concat(url, "'."));
            return [];
        };
        return Axios;
    }());
    var instance = new Axios();
    // 読み取り専用プロパティであるため、'ID_PREFFIX' に代入することはできません。
    // instance.ID_PREFFIX = '430520'
    instance.get('users');
    var instance2 = new Axios('https://www.yahoo.com/api');
    instance2.get('users');
}
