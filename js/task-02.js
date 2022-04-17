// Напиши скрипт, который для каждого элемента массива ingredients:

// !!! 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
//!!! 3.Добавит элементу класс item.
// 4/Пoсле чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItem = ingredients.map(ingredient => {
const itemList = document.createElement('li');
itemList.textContent = ingredient;
itemList.classList.add('item');

return itemList;
});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append (...ingredientsItem);
