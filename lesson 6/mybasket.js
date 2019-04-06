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
  
  /* putProduct(prod, count) {
    let idx = this.goodList.findIndex(function(elem) {
      return elem.name === prod.name;
    });
    if (idx === -1) {
      this.goodList.push(Object.assign(prod));
      this.goodList[this.goodList.length - 1].count = count;
    } else {
      this.goodList[idx].count += count;
    }
  }, */
  
  putProduct(price) {
    let count = 0;
    count += this.goodList.push(price);
    this.basketDisplay(price, count)
  },
  
  
  countTotalPrice(price) {
    let totalPrice = 0;
    this.goodList.forEach(function(price) {totalPrice += price;});
    return totalPrice
  },
  
  
  countTotalNumber(count) {
    let sumCount = 0;
    /* for (let i = 0; i < this.goodList.length; i++) {
      sumCount += this.goodList[i].count;
    } */
    sumCount += count;
    return sumCount
  },
  
  basketDisplay (price, count) {
    if (this.goodList.length) {
        document.getElementById('basket-display').innerHTML = `<span>Товаров в корзине: ${this.countTotalNumber(count)}</span> 
        <span>На сумму: ${this.countTotalPrice(price)} руб.</span>` ;
    }
  }
  
};
  let inBasket = document.getElementById('main');
  inBasket.innerHTML += `<div id="basket-display"><span>В корзине пусто</span></div> `;

  let prodList = {
    generateProdList() {
        for (let i = 0; i < products.length; i++) {
          let prodName = products[i].name;
          let prodPrice = products[i].price;
          inBasket.innerHTML += `<div class="products">
          <h3>${prodName}</h3>
          <span>Цена: ${prodPrice} руб.</span>
          <button onclick="objBasket.putProduct(${prodPrice})" id="buy">Купить</button>
          </div>`;
      }
    },
  };
prodList.generateProdList();
/* for (let i = 0; i < products.length; i+=2) {
  objBasket.putProduct(products[i], 1);
}
for (let i = 1; i < products.length; i+=2) {
  objBasket.putProduct(products[i], 2);
} */
/* objBasket.countTotalNumber();
objBasket.countTotalPrice(); */  



/* let basketDisplay = document.createElement('div');
console.log(basketDisplay);
basketDisplay.classList.add('totalbasket');

basketDisplay.innerHTML = 'Товаров в корзине:' + objBasket.countTotalNumber() + '  ' + 'На_сумму:' + objBasket.countTotalPrice() + 'руб.'; ; */
//document.body.appendChild(basketDisplay);

