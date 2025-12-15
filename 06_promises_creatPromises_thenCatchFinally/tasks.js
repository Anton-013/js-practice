// Задачи по Promise для практики

// Задача 1: Базовый Promise с задержкой

// Создайте Promise, который:
// Ждет случайное время от 1 до 3 секунд
// С вероятностью 70% возвращает успех с сообщением "Операция выполнена успешно!"
// С вероятностью 30% возвращает ошибку с сообщением "Произошла ошибка!"

// Шаблон для начала
// function randomDelayOperation() {
//     return new Promise((resolve, reject) => {
//         const delayTime = Math.floor(Math.random() * 2000) + 1000
//         let shouldSucceed  = Math.random() < 0.7
//         setTimeout(() => {
//             if (shouldSucceed ) {
//                 resolve('Операция выполнена успешно!')
//             } else {
//                 reject('Произошла ошибка!')
//             }
//         }, delayTime)
//     });
// }

// // Проверка
// randomDelayOperation()
//     .then(result => console.log("Успех:", result))
//     .catch(error => console.log("Ошибка:", error));

/////////////////////////////////////////////////////////////////////////////


// Задача 2: Цепочка промисов (Promise Chaining)

// Создайте цепочку промисов для имитации процесса заказа пиццы:

// 1. Выбрать пиццу (сразу успешно)
// 2. Приготовить пиццу (2 секунды)
// 3. Доставить пиццу (3 секунды)

// const pizzaMenu = {
//     margherita: { name: "Маргарита", price: 500 },
//     pepperoni: { name: "Пепперони", price: 650 },
//     hawaiian: { name: "Гавайская", price: 600 }
// };

// function choosePizza(pizzaType) {
//     return new Promise((resolve, reject) => {
//         if (pizzaMenu[pizzaType]) {
//             console.log(`Пицца "${pizzaType}" добавлена в заказ, заказ отправлен на кухню! Ожидайте!`)
//             resolve(pizzaMenu[pizzaType])
//         } else {
//             reject(`Пицца "${pizzaType}" не найдена в меню!`)
//         }
//     })
// }

// function cookPizza(pizza) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             pizza.cook = true
//             console.log(`Пицца "${pizza.name}" приготовлена, отправлена на доставку!`)
//             resolve(pizza)
//         }, 2000)
//     })
// }

// function deliverPizza(pizza) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             pizza.deliver = true
//             console.log(`Пицца "${pizza.name}" доставлена!`)
//             resolve(pizza)
//         }, 3000)
//     })
// }

// // Цепочка должна работать так:
// choosePizza('pepperoni')
//     .then(pizza => cookPizza(pizza))
//     .then(pizza => deliverPizza(pizza))
//     .then(result => console.log("Итог:", result))
//     .catch(error => console.log("Произошла ошибка:", error));

///////////////////////////////////////////////////////////////////////////////

// Задача 3: Обработка массива промисов

// Создайте функцию, которая принимает массив URL и:

// Для каждого URL делает fetch запрос
// Возвращает массив результатов
// Если какой-то запрос fails, использовать fallback значение

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://неправильный-url.com', // Этот должен вернуть fallback
    'https://jsonplaceholder.typicode.com/posts/4'
];

function fetchWithFallback(urls, fallback = { error: 'Failed to fetch' }) {
    const promises = urls.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                return response.json()
            })
            .catch(error => {
                console.warn(`Ошибка для ${url}: `, error.message)
                return fallback
            })
    })
    console.log(promises)
    return Promise.all(promises)
        .then(console.log)
}

fetchWithFallback(urls, { error: 'error' })

// Ожидаемый результат: массив из 4 объектов, даже если один запрос failed
