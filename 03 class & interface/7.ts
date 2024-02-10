/// static 
{
    class Youtuber {
        static email: string = 'nibiiroyurushi@gmai.com'

        public static getSite(): string {
            return Youtuber.email
        }
    }

    const instance = new Youtuber()
    // console.log(Youtuber.email);
    console.log(Youtuber.getSite());
    
    
}