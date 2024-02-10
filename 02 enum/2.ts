/// as(ASSERT)断言
{
    function fn(arg: boolean): string | number {
        return arg ? 'やります' : 479
    }

    let res = fn(true) as string
    // 型 'number' を型 'string' に割り当てることはできません。
    // res = 123

    res = 'やりません'

    console.log(res);
}

