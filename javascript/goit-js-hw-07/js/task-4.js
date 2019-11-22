'use strict';
//## Задание 4

// - Создай переменную `counterValue` в которой будет хранится текущее значение счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//     <button type="button" data-action="decrement">-1</button>
//     <span id="value">0</span>
//     <button type="button" data-action="increment">+1</button>
// </div>

const counter = document.getElementById('counter');
const buttonDecrement = counter.querySelector('button[data-action="decrement"]');
const buttonIncrement = counter.querySelector('button[data-action="increment"]');
const span = counter.querySelector('#value');
let counterValue = span.innerText;

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    span.innerText = counterValue;
}

function increment() {
    counterValue = parseInt(counterValue) + 1;
    span.innerText = counterValue;
}
