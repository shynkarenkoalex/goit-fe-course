'use strict';
let userInput;
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
console.log(typeof userInput);

