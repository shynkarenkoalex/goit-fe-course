'use strict';
//## Задание 5

// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', (event) => {
    if (event.currentTarget.value === '') {
        output.innerText = 'незнакомец';
    } else {output.innerText = event.currentTarget.value }
});