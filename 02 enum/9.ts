/// DOM 事件

const bt = document.querySelector('#bt') as HTMLButtonElement

bt.addEventListener('click', (e: Event) => {
    e.preventDefault()
    const body = document.body as HTMLBodyElement
    body.insertAdjacentHTML('beforeend',`<h1>Nibiiro Yurushi</h1>`)
})
