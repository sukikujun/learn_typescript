/// meta data
import 'reflect-metadata'

let user = {
    name: 'yurushi'
}

Reflect.defineMetadata('ys', { url: 'https://www.youtube.com/@JILLMITSUNOKI' }, user)

console.log(Reflect.getMetadata('ys', user));
