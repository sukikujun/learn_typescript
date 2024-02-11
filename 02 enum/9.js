/// DOM 事件
var bt = document.querySelector('#bt');
bt.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.body;
    body.insertAdjacentHTML('beforeend', "<h1>Nibiiro Yurushi</h1>");
});
