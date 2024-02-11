{
    /// ! 非空断言

    // let hd: string | null | undefined = 'nibiiro yurushi'
    // hd = null

    // const el: HTMLDivElement = document.querySelector('.hd') as HTMLDivElement
    const el: HTMLDivElement = document.querySelector('.hd')!
    console.log(el.innerHTML);
    
}
