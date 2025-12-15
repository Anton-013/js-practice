
// в начале глобальное лексическое окружение (далее LE)  является пустым "объектом"
// для простоты скажем LE ссылается на LE которое находится выше
// глобальное LE является конечным "объектом" которое не имеет ссылки на верхнее LE
// GlobalLE {} -> null

// при создании переменной она записывается в этот объект
let car // GlobalLE {car: undefined} -> null

car = 'toyota' // GlobalLE {car: 'toyota'} -> null

// при создании функции она создает свой "объект" LE
// который имеет ссылку на "объект" верхнего LE в нашем случае это GlobalLE
// funLE {} -> GlobalLE
// function fun() { 
//     // funLE {} -> GlobalLE {car: 'toyota, fun: function}
// }

// что создает свое LE - for, if, while, try/catch, function, ...
// все что имеет скобки {}, кроме объекта

function startEngine () { // GlobalLE {car: 'toyota, startEngine: function}
    // startEngineLE {car: 'kia'} -> GlobalLE
    const car = 'kia'
    console.log(`startEngine: Start ${car}`)
}

function startEngine2 () { // GlobalLE {car: 'toyota', startEngine: function}
    // startEngine2LE {} -> GlobalLE
    console.log(`startEngine2: Start ${car}`)
}

startEngine() // в консоль выведится kia
startEngine2() // "toyota" возьмет из GlobalLE, так как переменной car в startEngine2LE
               // у нас нет переменной car мы идем по ссылке выше и ищем там и так до 
               // того момента пока не найдем нужную переменную или не дойдем до 
               // конца, то есть GlobalLE

car = 'audi'  // здесь мы меняем GlobalLE {car: 'audi', startEngine: function}

startEngine() // в консоль выведится kia, так как эта функция берет значение car из
              // своего объекта LE а в нем car: 'kia'
startEngine2() // "audi" возьмет из GlobalLE

