const sqr = (num) => {
    return num * num
}

function memoize(fn) {
    const cash = {}

    return function (arg) {
        if (arg in cash) {
            console.log('from cash')
            return cash[arg]
        } else {
            console.log('calculation')
            const result = fn(arg)
            cash[arg] = result
            return result
        }
    }
}

memoizedSqr = memoize(sqr)

// TODO: надо написать функцию мемоизации memoize, которая принимает функцию, вызов которой надо замемоизировать.
//       если функция которую мы мемоизируем вызывается повторно с одним и тем же аргументом то вычисления не происходит
//       а сразу же возвращается результат (из кэша)

console.log(memoizedSqr(5)) // calculation
console.log(memoizedSqr(5)) // from cache
console.log(memoizedSqr(6)) // calculation
console.log(memoizedSqr(5)) // from cache

// Задача: Мемоизация для функции с задержкой

const slowFunc = (x) => {
    // Имитация долгого вычисления
    for (let i = 0; i < 1000000000; i++) { } // Просто цикл для задержки
    return x * 2;
};

const memoizeWithTime = (fn) => {
    const cache = {}

    return function (arg) {
        if (arg in cache) {
            return `From cache (saved ${cache[arg].time}мс, результат: ${cache[arg].result})`
        } else {
            const start = Date.now()
            const result = fn(arg)
            const end = Date.now()
            const elapsed = end - start
            cache[arg] = { result, time: elapsed }
            return `Calculation time: ${cache[arg].time}мс, результат: ${cache[arg].result}`
        }
    }
}


const memoizedSlow = memoizeWithTime(slowFunc);

console.log(memoizedSlow(5)); // "Calculation time: 120ms", результат 10
console.log(memoizedSlow(5)); // "from cache (saved 120ms)", результат 10
console.log(memoizedSlow(10)); // "Calculation time: 115ms", результат 20
console.log(memoizedSlow(10)); // "from cache (saved 115ms)", результат 20