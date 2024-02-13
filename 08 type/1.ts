/// extends
{
    type Dom = {
        id: number
        render(n: number): number
    }
    function yurushi<T extends Dom>(arr: T[]) {
        arr.map(a => a.render(a.id))
    }

    yurushi([{ id: 1, render(n) { return n } }])
}