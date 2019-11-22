'use strict';
//## Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//     `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//     если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

// <input
//    type="text"
//    id="validation-input"
//    data-length="6"
//    placeholder="Введи 6 символов"
//  />

const inputValidate = document.getElementById('validation-input');
inputValidate.addEventListener('change',ev => {
    if (inputValidate.value.length === Number(ev.currentTarget.dataset.length)) {
        if (ev.currentTarget.classList.contains('invalid')) {
            ev.currentTarget.classList.remove('invalid')
        }
        ev.currentTarget.classList.add('valid');
    } else {
        if (ev.currentTarget.classList.contains('valid')) {
            ev.currentTarget.classList.remove('valid')
        }
        ev.currentTarget.classList.add('invalid');
    }
});