
// TODO: дополнительно можно посмотреть, ознакомится
// https://www.youtube.com/watch?v=3d9XqFmCmQw 

// метод finally выполняется не зависимо от того что произошло с промисом (resolve или reject) 
// в него не приходят ни какие данный, в цепочку промисов его можно ставить в любом месте и несколько штук
// основная задача finally это мутация глобальных переменных или глобального стейта
// если в finally произойдет ошибка то следующий промис за ним удаляется и вместо него идет новый промис в состоянии reject
// Promise.resolve(10)
//     .then(console.log)
//     .catch(console.log)
//     .finally(() => {
//         console.log('finelly')
//     })

// асинхронной может быть только функция
// при добавлении ключевого слова async в функции происходит 2 важных изменения:
// 1) такая функция всегда начинает возвращать промис
// 2) такая функция начинает работать в асинхронном режиме, после того как будет использованно ключевое слово await
// console.log('start')
// async function f() { // f = async() => {}
//     try {
//         console.log('start F')
//         const response = await new Promise((res, rej) => {
//             res('!!!!')
//         })
//         console.log('middle')
//     } catch (e) {
//         console.log('!!!! e ', e)
//     }
// }

// f()
// console.log('end')

////////////////////////////////////////////////////////////////////////////////////////


// Task 1

// setTimeout(() => console.log(1), 0)
// console.log(2)
// (() => console.log(3))()
// Promise.resolve(console.log(4)) // сначала произойдет выполнение вызова консоли, результат будет отправлен в промис

// результат => 2 3 4 1

// Task 2 

// new Promise((res, rej) => {
//     console.log(1)
// })
// new Promise((res, rej) => {
//     setTimeout(() => console.log(2), 0)
// })
// Promise.resolve(setTimeout(() => console.log(3), 0))
// console.log(4)
// Promise.reject(console.log(5))

// 1, 4, 5, 2, 3

// Task 3

// (function () {
//     setTimeout(() => console.log(1), 100)
// })()
// console.log(2)
// new Promise((res, rej) => {
//     setTimeout(() => console.log(3), 50)
// })
// function f() {
//     console.log(4)
// }
// Promise.resolve(console.log(5))

// 2, 5, 3, 1 // 4 не выведиться так как мы не вызываем эту функцию

// Task 4

// function f(num) {
//     console.log(num)
// }
// Promise.resolve(1)
//     .then(f);

// (function () {
//     console.log(2)
// })()
// console.log(3)
// new Promise((res, rej) => {
//     console.log(4)
// })
// setTimeout(f, 0, 5)

// 2, 3, 4, 1, 5

// Task 5

(function () {
    setTimeout(() => console.log(1), 100)
})()
console.log(2)

let i = 0
while (i < 500000000) {
    i++
}

new Promise((res, rej) => {
    setTimeout(() => console.log(3), 50)
})
function f() {
    console.log(4)
}
Promise.resolve(console.log(5))

// 2 5 1 3
