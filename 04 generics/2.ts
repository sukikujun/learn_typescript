/// generics extends
{
    function getLength<T>(arg: T[]): number {
        return arg.length
    }

    // console.log(getLength('yurushi'));
    console.log(getLength<string | number>(['nibiiro', 'yurushi', 19]));
    
}