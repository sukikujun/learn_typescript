"use strict";
{
    const user = {
        name: 'yurushi',
        age: 23,
        open: true,
        lesson: [
            { title: 'linux' },
            { title: 'TypeScript' },
        ]
    };
    // 型 'string' を型 'number' に割り当てることはできません。ts(2322)
    // user.age = '30';
    user.lesson.push({ title: 'Docker' });
    console.log(user.lesson[0].title);
}
