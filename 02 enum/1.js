/// ENUM 枚举
{
    // 不指定，则从下标 0 开始
    //enum Gender {
    //    MALE = '男',
    //    FEMALE = '女',
    //    SECRET = '秘密',
    //}
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["MALE"] = 0] = "MALE";
        Gender[Gender["FEMALE"] = 3] = "FEMALE";
        Gender[Gender["SECRET"] = 4] = "SECRET";
        Gender["DIY"] = "\u5185\u7DD2";
    })(Gender || (Gender = {}));
    var user = {
        name: 'yurushi',
        sex: Gender.FEMALE,
    };
    console.log(user);
    console.log(Gender.FEMALE);
}
