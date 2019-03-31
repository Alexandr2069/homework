'use strict';
 const config = {
  rowsCount: 8,
  colsCount: 8
};

let numerals = [8, 7, 6, 5, 4, 3, 2, 1];
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


let renderer = {
  render() {
    let table = this.generateTable();
    document.body.insertAdjacentHTML('afterbegin', table);
  },

  generateTable() {
    let board = '';
    for (let y = 0; y <= config.rowsCount; y++) { 
      if (y == 0) { //первая строки для заголовков
        board += '<tr>'; // строка для заголовков с буквами
        for (let x = 0; x <= config.colsCount; x++) {
          if (x == 0) { //пустая ячейка
            board += '<th class="chess">' + 'chess' + '</th>';
          } else { //вывод в заголовки массива с буквами
            board += '<th>' + letters [x - 1] + '</th>';
          }
        }
        board += '</tr>';
      } else {
        board += '<tr>';
        board += '<th >' + numerals [y - 1] + '</th>'; // вывод заголовков с цифрой из массива
        for (let x = 0; x < config.colsCount; x ++) { 
            board += '<td> </td>';
          }
        board += '</tr>';
      }
    }
    return '<table><tbody>' + board + ' </tbody></table>';
  }
};
renderer.render();
