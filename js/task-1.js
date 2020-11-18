/* Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в 
ul#categories, то есть элементов li.item. Получится 
'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него 
элементов li).

Например для первой категории получится:
Категория: Животные
Количество элементов: 4 */

const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории`);

const categoriesInfoRef = [...categoriesRef].map(category =>
    `Категория: ${category.children[0].textContent}
Количество элементов: ${category.children[1].children.length}\n`)
    .join('');

// const categoriesInfoRef = [...categoriesRef].map(category =>
//     `Категория: ${category.firstElementChild.textContent}
// Количество элементов: ${category.lastElementChild.children.length},\n`)
//     .join('');

console.log(categoriesInfoRef);








// forEach
// const categoriesInfoRef = categoriesRef.forEach(category =>
//     console.log(`Категория: ${category.children[0].textContent}
//     Количество элементов: ${category.children[1].children.length}`));


// let categoriesInfoRef = '';

// categoriesRef.forEach(category => categoriesInfoRef +=
//     `Категория: ${category.children[0].textContent}
//     Количество элементов: ${category.children[1].children.length}\n`);
