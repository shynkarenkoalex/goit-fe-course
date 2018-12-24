'use strict';
/*let userInput;
const numbers = [];
let total = 0;
do{
  userInput = Number(prompt("введите число", "")); 
  numbers.push(userInput);
  }while(userInput !== 0);
numbers.pop(userInput);
console.log("Inputed array is: " + numbers);

for(let i of numbers){
  total += i;
}

if (numbers.length >= 1){
  alert(`Общая сумма чисел равна ${total}`);
} else{
    userInput;
}
console.log(`Общая сумма чисел равна ${total}`);
console.log(typeof userInput);*/

//==============================================

/*let userInput ;
const numbers = [];
let total = 0;

do {
    userInput = Number(prompt("Введите числа для получения их суммы. Для окончания ввода нажмите Cancel", " "));
    if (userInput) {
        numbers.push(userInput);
    } else if (!userInput && userInput !== 0) {
        alert('Было введено не число, попробуйте еще раз');
    }
} while (userInput !== 0);



 

for (let i of numbers) {
    total += i;
}
if (numbers.length >= 1) {
    alert(`Вы ввели следующие цифры для суммирования: ${numbers}`);
    alert(`Общая сумма чисел равна: ${total}`);
}

console.log("Inputed array is: " + numbers);
console.log(`Общая сумма чисел равна: ${total}`);*/

//==========================================================

"use strict";

const numbers = [];
let total = 0;
let userInput;

while (true) {
  userInput = prompt("Bведите число");
  if (userInput === null) break;
  userInput = Number(userInput);

  if (!userInput) {
    alert("Ошибка ввода");
  } else {
    numbers.push(userInput);
    console.log(userInput);
  }
}

console.log("numbers", numbers);

for (let i = 0; i < numbers.length; i += 1) {
  const currentNumber = numbers[i];

  total = currentNumber + total;
}

console.log("total: ", total);

if (numbers.length >= 1) {
    alert(`Общая сумма чисел равна: ${total}`);
    alert(`Вы ввели следующие цифры для суммирования: ${numbers}`);
    alert(`Kоличество введённых чисел ${numbers.length }`);    
  
}

