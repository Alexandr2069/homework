'use strict';
 // 1 Задание
/* let inputNumber = prompt('Введите трехзначное число: ');
function transformInNumber(inputNumber) {  // Задаем функцию перевода
  if (inputNumber == 0 || inputNumber > 999 || isNaN(inputNumber) == true )   // Проверка вводимой информации
  return console.log('Число не трехзначное или не число');                    // Сообщение о неправильном вводе
  
  inputNumber = String(inputNumber).split('').reverse(); // Число переводим в строку, разбиваем на символы и разворачиваем
  let InNumber = { units: +inputNumber[0], tens: +inputNumber[1], hundreds: +inputNumber[2]}; //Создаем объект и заполняем его значениями
  
  console.log(InNumber); // Выводим объект в консоль
};
transformInNumber(inputNumber);  */

let inputNumber = prompt('Введите трехзначное число: ');
  function transformInNumber(inputNumber) {
    if (inputNumber == 0 || inputNumber > 999 || isNaN(inputNumber) == true ) {   
    return console.log('Число не трехзначное или не число'); 
  }
  let hundreds = (inputNumber - inputNumber % 100) /100;
  let tens = (inputNumber - inputNumber % 100) /100;
  let units = inputNumber % 10;
  
  return {
    "units": units,
    "tens": tens,
    "hundreds": hundreds
  }
}  
let InNumber = transformInNumber(inputNumber);
console.log(InNumber); 


// 2 Задание


let products = [
  {name: 'товар1', price: 100},
  {name: 'товар2', price: 50},
  {name: 'товар3', price: 150},
  {name: 'товар4', price: 40},
  {name: 'товар5', price: 120},
  {name: 'товар6', price: 60},
  {name: 'товар7', price: 200},
  {name: 'товар8', price: 80}
];


 

let objBasket = {
  goodList: [],
  
  
  putProduct(prod, count) {
    let idx = this.goodList.findIndex(function(elem) {
      return elem.name === prod.name;
    });
    if (idx === -1) {
      this.goodList.push(Object.assign(prod));
      this.goodList[this.goodList.length - 1].count = count;
    } else {
      this.goodList[idx].count += count;
    }
  },
  countTotalPrice() {
    let totalPrice = 0;
    
    for (let i = 0; i < this.goodList.length; i++) {
      totalPrice += this.goodList[i].count * this.goodList[i].price;
    }
    console.log('Сумма:' + totalPrice + 'руб' );
    
    //return totalPrice;
    
  },
  
  
  countTotalNumber(){
    let sumCount = 0;
    for (let i = 0; i < this.goodList.length; i++) {
      sumCount += this.goodList[i].count;
    }
    console.log('Товаров в корзине:' + sumCount);
    //return sumCount;
  }
  
};

for (let i = 0; i < products.length; i+=2) {
  objBasket.putProduct(products[i], 1);
}

for (let i = 1; i < products.length; i+=2) {
  objBasket.putProduct(products[i], 2);
  //objBasket.putProduct(products[i], 1);
}
objBasket.countTotalNumber();
objBasket.countTotalPrice();  


