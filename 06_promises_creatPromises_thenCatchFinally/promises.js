
// https://www.youtube.com/watch?v=XBer29OhRgA&t=10s

// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//             console.log('2 ', prom)
//         } else {
//             reject(response.error)
//         }
//     }, 2000, { httpStatus: 200, data: { userName: 'Yo', id: '1', status: 'active' }, error: {} })
// })

// prom
//     .then(
//         res => {
//             console.log('res ', res)
//             return 10
//         },
//         () => {}
//     )
//     .then(res2 => {
//         console.log(res2)
//     })

// console.log('1 ', prom)


// "идиальная ситуация" у нас всё прошло
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 2000, { httpStatus: 200, data: { userName: 'Yo', id: '1', status: 'active' }, error: {} })
// })

// prom
//     .then(
//         res => {
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 1200, { httpStatus: 200, data: { id: '1', count: 'BYfd;alnvb;oi4rue09' }, error: {} })
//             })
//         },
//         () => { }
//     )
//     .then(res2 => {
//         console.log(res2)
//     })

// запрос пришел с ошибкой
// let prom = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//     }, 2000, { httpStatus: 404, data: {}, error: 'Not found' })
// })

// prom
//     .then(
//         res => {
//             return new Promise((resolve, reject) => {
//                 setTimeout((response) => {
//                     if (response.httpStatus >= 200 && response.httpStatus < 400) {
//                         resolve(response.data)
//                     } else {
//                         reject(response.error)
//                     }
//                 }, 1200, { httpStatus: 200, data: { id: '1', count: 'BYfd;alnvb;oi4rue09' }, error: {} })
//             })
//         },
//         err => {
//             console.log('err ', err)
//         }
//     )
//     .then(res2 => {
//         console.log(res2)
//     })


// разбор асинхронности

console.log('start')

let prom = new Promise((resolve, reject) => {
    console.log('start promis')
    setTimeout((response) => {
        console.log('start setTimeout')
        if (response.httpStatus >= 200 && response.httpStatus < 400) {
            resolve(response.data)
        } else {
            reject(response.error)
        }
        
    }, 2000, { httpStatus: 200, data: { id: 'lsakgnvpoq3' }, error: {} })
    console.log('end promis')
})

console.log('middle')

prom
    .then(console.log)

console.log('end')
