/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает 
кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 
параметр amount - число. Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше 
предыдущего на 10px

Создай функцию destroyBoxes(), которая очищает div#boxes. */

const inputNumberRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

const arr = [];

function inputHandler() {
  arr.length = inputNumberRef.value;
}

function btnRenderHandler() {
  // console.log('создаем коллекцию дивов');
  createBoxes(arr.length);
}

function btnDestroyHandler() {
  // console.log('очищаем коллекцию дивов');
  btnRenderRef.removeEventListener('click', btnRenderHandler);
  destroyBoxes();
}

inputNumberRef.addEventListener('input', inputHandler);
btnRenderRef.addEventListener('click', btnRenderHandler);
btnDestroyRef.addEventListener('click', btnDestroyHandler);

function createBoxes(amount) {
  [...arr].map(item => {
    item = document.createElement('div');

    boxesRef.appendChild(item);
  });

  let step = 30;

  [...boxesRef.children].forEach(element => {
    element.style.width = `${step}px`;
    element.style.height = `${step}px`;
    element.style.backgroundColor = `${randColor()}`;

    if (element !== boxesRef.firstElementChild) {
      step += 10;
      element.style.width = `${step}px`;
      element.style.height = `${step}px`;
    }
  });
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputNumberRef.value = '';
}

// случайный цвет
function randColor() {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8);
}
