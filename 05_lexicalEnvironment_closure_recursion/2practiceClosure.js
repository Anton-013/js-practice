
// GlobalLE {counterCreator: function}

const counterCreator = () => {
  // counterCreatorLE {count: 0} -> GlobalLE
  let count = 0
 
  return () => {
    // returnLE {} -> counterCreatorLE
    console.log(count++)
  }
}
 
const counter1 = counterCreator() // результатом вызова функции будет аннонимная функция и
                                  // и мы присваеваем ей имя по которому мы в дальнейшем
                                  // можем к ней обратиться, это и есть замыкание
const counter2 = counterCreator();
 
counter1() // 0
counter1() // 1
counter1() // 2
// происходит изменение count которая находится в counterCreatorLE

counter2() // 0
counter2() // 1
counter2() // 2
// так происходит потому что на 14 строке создается LE к которому имеет доступ counter1
// а на 17 строке создается ещё один LE к которому имеет доступ counter2