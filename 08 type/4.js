"use strict";
/// void & never
{
    function vee() {
        console.log('void');
    }
    let x = vee();
    // void
    // x = 'undefined'
    function youtube() {
        throw new Error('error');
    }
    let yurushi = 'yurushi';
    yurushi = youtube();
}
