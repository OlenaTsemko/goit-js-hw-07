/* Напиши скрипт, который для каждого элемента массива 
ingredients создаст отдельный li, после чего вставит все li 
за одну операцию в список ul.ingredients. Для создания 
DOM-узлов используй document.createElement(). */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');
// console.log(ingredientsListRef);

const createIngredient = (item) => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.textContent = item;
    return ingredientItemEl;
}

const ingredientsEl = ingredients.map(ingredient =>
    createIngredient(ingredient));

ingredientsListRef.append(...ingredientsEl);