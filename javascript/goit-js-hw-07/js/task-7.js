'use strict';
//## Задание 7

// Напиши скрипт, который реагирует на изменение значения `input#font-size-control` (событие input) и изменяет
// инлайн-стиль `span#text` обновляя свойство `font-size`. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

let range = document.getElementById('font-size-control');
const text = document.querySelector('#text');
document.addEventListener('DOMContentLoaded', evt => text.style.fontSize = `${range.value}px`);
range.addEventListener('input', ev => text.style.fontSize = `${range.value}px`);
