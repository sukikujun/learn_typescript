"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// meta data
require("reflect-metadata");
let user = {
    name: 'yurushi'
};
Reflect.defineMetadata('ys', { url: 'https://www.youtube.com/@JILLMITSUNOKI' }, user);
console.log(Reflect.getMetadata('ys', user));
