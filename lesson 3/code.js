'use strict'
// 1 задание
// 3 варианта копирования массива
let a = [
  [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
  [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
  [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];
 /* let b = a.slice();  // метод slice 
console.log(b);
b.name = 2;
console.log(b);
 console.log(a);  */
 let b = [...a]; // использовал оператор spread для копирования массива
 console.log(b);
console.log(a);
/* let b;
b = Object.assign([], a); // как в уроке использовал Object.assign 
console.log(b); */


// 2 задание 
 
let basket = [{ name: 'товар1', price: 1000, quantity: 2}, // Создал массив для корзины 
{name: 'товар2', price: 550, quantity: 1},
{name: 'товар3', price: 750, quantity: 1}];
console.log(basket);
function countBasketPrice(basket){ 
  let sum = 0; //Начальная стоимость товаров в корзине 
    for (let i = 0; i < basket.length; i++){ //Условия расчета стоимости корзины 
      sum = sum + basket[i].price * basket[i].quantity;//Расчет стоимости
    }   
    return sum;
}
 console.log(countBasketPrice(basket));// Вывод стоимости корзины



// 3 задание
// не смог разобраться как лучше, оставил два варианта
 for (let num = 0; num < 10; console.log(num++));
 for (let num = 0; num < 10; num++) console.log(num); 

 // 4 задание

let c = 'x'; // что выводим , чем рисуем
let j = 1; // переменная счетчика
  while (j <= 20) { // количество итераций цикла
    console.log(c); // вывод строк начиная с первой
    c += 'x'; // добавление знака в следущую строку
    j++;
  };

 