'use strict';
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
    
    return totalPrice;
    
  },
  
  
  countTotalNumber(){
    let sumCount = 0;
    for (let i = 0; i < this.goodList.length; i++) {
      sumCount += this.goodList[i].count;
    }
    console.log('Товаров в корзине:' + sumCount);
    return sumCount;
  }
  
};

for (let i = 0; i < products.length; i+=2) {
  
  objBasket.putProduct(products[i], 1);
}

for (let i = 1; i < products.length; i+=2) {
  
  objBasket.putProduct(products[i], 2);
  
}
objBasket.countTotalNumber();
objBasket.countTotalPrice();  



let basketDisplay = document.createElement('div');
console.log(basketDisplay);
basketDisplay.classList.add('totalbasket');

basketDisplay.innerHTML = 'Товаров в корзине:' + objBasket.countTotalNumber() + '  ' + 'На_сумму:' + objBasket.countTotalPrice() + 'руб.'; ;



document.body.appendChild(basketDisplay);

