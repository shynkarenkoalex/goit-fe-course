'use strict';
//## Задание 1

//Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
// элементов `li.item`. Получится `'В списке 3 категории.'`.
//
//     Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
// консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов `li`).
//
// Например для первой категории получится:
//
//     - Категория: Животные
// - Количество элементов: 4

const categoryItems = document.getElementById('categories').children;
console.log('количество категорий', categoryItems.length); //3
[...categoryItems].map(categoryItem => {
    console.log(`Категория: ${categoryItem.querySelector('h2').innerText}`);
    console.log(`Количество элементов: ${categoryItem.querySelectorAll('li').length}`);
});

