/// 构造函数强制断言

class Yurushi {
    el: HTMLDivElement
    constructor(el: HTMLDivElement) {
        this.el = el
    }
    html() {
        return this.el.innerHTML
    }
}

const el = document.querySelector('#yurushi') as HTMLDivElement
let yurushi = new Yurushi(el)
console.log(yurushi.html());
