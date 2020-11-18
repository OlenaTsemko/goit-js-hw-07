/* Счетчик состоит из спана и кнопок, которые должны 
увеличивать и уменьшать значение счетчика на 1.

- Создай переменную counterValue в которой будет хранится 
текущее значение счетчика.
- Создай функции increment и decrement для увеличения и 
уменьшения значения счетчика
- Добавь слушатели кликов на кнопки, вызовы функций и 
обновление интерфейса */

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    changeValue();
}

const decrement = () => {
    counterValue -= 1;
    changeValue();
}

const changeValue = () =>
    ref.valueRef.textContent = counterValue;

// const btnIncrementRef = document.querySelector('button[data-action="increment"]');
// const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
// const valueRef = document.querySelector('#value');

// console.log(btnIncrementRef);
// console.log(btnDecrementRef);
// console.log(valueRef);

const ref = {
    btnIncrementRef: document.querySelector('button[data-action="increment"]'),
    btnDecrementRef: document.querySelector('button[data-action="decrement"]'),
    valueRef: document.querySelector('#value'),
}

// console.log(ref.btnIncrementRef);
// console.log(ref.btnDecrementRef);
// console.log(ref.valueRef);

ref.btnIncrementRef.addEventListener('click', increment);
ref.btnDecrementRef.addEventListener('click', decrement);