/// generics & class
{
    class CollectionNumber {
        data: number[] = []
        public push(...items: number[]) {
            this.data.push(...items)
        }

        public shift(): number | undefined {
            return this.data.shift()
        }
    }

    const numberCollection = new CollectionNumber()
    numberCollection.push(1, 2, 3, 4, 5)

    console.log(numberCollection.data);
    console.log(numberCollection.shift() as number);

    class Collections<T> {
        data: T[] = []

        public push(...items: T[]) {
            this.data.push(...items)
        }

        public shift(): T | undefined {
            return this.data.shift()
        }
    }

    type User = {
        name: string
        age: number
    }
    const yurushi: User = { name: 'yurushi', age: 20 }
    const sahiro: User = { name: 'sahiro', age: 21 }

    const collections = new Collections<User>();
    collections.push(yurushi, sahiro)

    console.log(collections.shift());

}