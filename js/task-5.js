/* Напиши скрипт который, при наборе текста в инпуте 
input#name-input (событие input), подставляет его текущее 
значение в span#name-output. Если инпут пустой, в спане 
должна отображаться строка 'незнакомец'. */

const inputRef = document.querySelector('#name-input');
const inputNameRef = document.querySelector('#name-output');
// console.log(inputRef);
// console.log(inputNameRef);

inputRef.addEventListener('input', event => {
  inputNameRef.textContent = event.target.value;
  if (inputNameRef.textContent.length === 0) {
    inputNameRef.textContent = 'незнакомец';
  }
});
