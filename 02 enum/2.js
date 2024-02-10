/// as(ASSERT)断言
{
    function fn(arg) {
        return arg ? 'やります' : 479;
    }
    var res = fn(true);
    // 型 'number' を型 'string' に割り当てることはできません。
    // res = 123
    res = 'やりません';
    console.log(res);
}
