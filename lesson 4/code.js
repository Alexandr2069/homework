'use strict';
 // 1 Задание
let inputNumber = prompt('Введите трехзначное число: ');
function transformInNumber(inputNumber) {  // Задаем функцию перевода
  if (inputNumber == 0 || inputNumber > 999 || isNaN(inputNumber) == true )   // Проверка вводимой информации
  return console.log('Число не трехзначное или не число');                    // Сообщение о неправильном вводе
  
  inputNumber = String(inputNumber).split('').reverse(); // Число переводим в строку, разбиваем на символы и разворачиваем
  let InNumber = { units: +inputNumber[0], tens: +inputNumber[1], hundreds: +inputNumber[2]}; //Создаем объект и заполняем его значениями
  
  console.log(InNumber); // Выводим объект в консоль
};
transformInNumber(inputNumber); 

 
// 2 Задание
/*let objBasket = {
  goodList: [  ],



  countTotalPrice(goodList){
    let totalSum = 0;
    this.goodList.forEach(function(item) {
      totalSum = totalSum + item.price*item.count;
    })
    return totalSum;
  },
  countTotalNumber( ){

  },
  putProduct(){

  },

  
}
let products = [
  {id: 1, name: 'товар1', price: 100},
  {id: 2, name: 'товар2', price: 50},
  {id: 3, name: 'товар3', price: 150},
  {id: 4, name: 'товар4', price: 40},
  {id: 5, name: 'товар5', price: 120},
  {id: 6, name: 'товар6', price: 60},
  {id: 7, name: 'товар7', price: 200},
  {id: 8, name: 'товар8', price: 80},
  ];
  

  console.log(products);*/