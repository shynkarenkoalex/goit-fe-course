'use strict';
//## Задание 2
// <ul id="ingredients"></ul>

// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
//     `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

createIngredientsList(ingredients);

function createIngredientsList(list) {
    const ingredientContainer = document.getElementById('ingredients');
    const fragment = document.createDocumentFragment();
    list.forEach(item => {
        let li =document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    ingredientContainer.appendChild(fragment);
}
