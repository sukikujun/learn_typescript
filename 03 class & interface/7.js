/// static 
{
    var Youtuber_1 = /** @class */ (function () {
        function Youtuber() {
        }
        Youtuber.getSite = function () {
            return Youtuber.email;
        };
        Youtuber.email = 'nibiiroyurushi@gmai.com';
        return Youtuber;
    }());
    var instance = new Youtuber_1();
    // console.log(Youtuber.email);
    console.log(Youtuber_1.getSite());
}
