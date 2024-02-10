/// simple instance 
{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
            console.log('init constructor');
        }
        Axios.make = function () {
            if (this.instance == null) {
                return this.instance = new Axios();
            }
            return this.instance;
        };
        Axios.instance = null;
        return Axios;
    }());
    var c1 = Axios_1.make();
    var c2 = Axios_1.make();
    var c3 = Axios_1.make();
    var c4 = Axios_1.make();
    var c5 = Axios_1.make();
}
