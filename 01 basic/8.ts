{
    const arr = ['yurushi', 2, true]; // (string | number | boolean)[]
    arr.push('sahiro', 1, false);
    // 型 'underfined' の引数を型 'string | number | boolean' のパラメーターに割り当てることはできません。ts(2345)
    // arr.push(undefined);
}