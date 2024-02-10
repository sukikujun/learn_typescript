/// ENUM 枚举
{

    // 不指定，则从下标 0 开始
    //enum Gender {
    //    MALE = '男',
    //    FEMALE = '女',
    //    SECRET = '秘密',
    //}
    enum Gender {
        MALE,
        FEMALE = 3,
        SECRET,
        DIY = '内緒'
    }

    let user = {
        name: 'yurushi',
        sex: Gender.FEMALE,
    }

    console.log(user);

    console.log(Gender.FEMALE);
}
