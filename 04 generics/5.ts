/// generics & interface
{
    interface ArticleInterface<B, C> {
        title: string
        isLock: B
        comments: C[]
    }

    type CommentType = {
        content: string
        author: string
    }

    const ys: ArticleInterface<boolean, CommentType> = {
        title: 'nibiiro yurushi',
        isLock: true,
        comments: [{ content: 'sai kou', author: 'sahiro' }]
    }
    console.log(ys);
    
}