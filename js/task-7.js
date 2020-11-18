/* Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер 
текста. */

const inputFontSizeRef = document.querySelector('#font-size-control');
const inputTextRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', () => {
  inputTextRef.style.fontSize = `${inputFontSizeRef.value}px`;
});
