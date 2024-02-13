"use strict";
/// extends
{
    function yurushi(arr) {
        arr.map(a => a.render(a.id));
    }
    yurushi([{ id: 1, render(n) { return n; } }]);
}
