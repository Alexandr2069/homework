'use strict'

// 1 задание

// 1 пример
//let a = 1, b = 1, c, d;
//c = ++a;
//alert(c); // ответ: 2. в результате применении префиксного инкремента a=2 
// 2 пример
//d = b++;
//alert(d); // ответ: 1. постфиксный инкремент к b вернёт 1
// 3 пример
//c = (2+ ++a);
//alert(c); // ответ: 5. префиксный  инкремент к a вернёт 3 затем сложение с 2
// 4 пример
//d = (2+ b++);
//alert(d); // ответ: 4. постфиксный инкремент к b вернёт 2 затем сложение с 2
//alert(a); // ответ: 3. префиксный  инкремент к a вернул 3
//alert(b); // ответ: 3. постфиксный инкремент к b передал 3

// 2 задание
//let a = 2;
//let x = 1 + (a *=2); // ответ x = 5. Здесь применена короткая запись умножения a *=2
 
// 3 задание
let a = parseInt(prompt('Введите число a:'));
let b = parseInt(prompt('Введите число b:'));
  if (a >= 0 && b >= 0) {
    alert( 'Разность этих чисел: ' + (a - b));
  }  
  else if (a < 0 && b < 0) {
    alert( 'Произведение этих чисел: ' + a * b);
  }
  else if (a * b < 0) { // Проверка что число разных знаков
    alert( 'Сумма этих чисел: ' + (a + b));
  } 

// 4 задание

function operationSum(x , y){
  return x + y;
}
alert(operationSum(10 , 2));

function operationSub(x , y){
  return x - y;
}
alert(operationSub(10 , 2));

function operationMult(x , y){
  return x * y;
}
alert(operationMult(10 , 2));

function operationDivid(x , y){
  if(y === 0) {                 // Ввел проверку т.к. на ноль делить нельзя
    return -1
  }
  return x / y;
} 
alert(operationDivid(10 , 2));
 
// 5 задание
let operation = prompt('Выберите операцию: ');// вводим символ функции: '+' или '-' или '*' или '/'
let arg1 = Number(prompt('Введите первое число:  '));
let arg2 = Number(prompt('Введите второе число:  '));
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case '+':
      return operationSum(arg1, arg2);
    case '-':
      return operationSub(arg1, arg2); 
    case '*':
      return operationMult(arg1, arg2);
    case '/':
    return operationDivid(arg1, arg2);
      default:
      alert('Упс..');  
  }
}
alert(mathOperation(arg1, arg2, operation)); // Выводим значение вычесленной функции

// 6 задание 
// функция power рекурсивно вызывает сама себя до pow == 0
// на этом значение рекурсия останавливается
  let val = Number(prompt('Введите число: ')); 
  let pow = Number(prompt('Введите степень: ')); 
  function power(val, pow){   //функция возведения в степень
    if (pow != 0) {          // условие что степень неравна 0
      return val * power(val, pow - 1 ); // действие 
    } else {
      return 1; // Если степень равна 0, нам возращается число без изменений
    }
  }
    alert(power(val, pow));





