/* Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

- Сколько символов должно быть в инпуте, указывается в его 
атрибуте data-length.
- Если введено подходящее количество, то border инпута 
становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

const inputValidRef = document.querySelector('#validation-input');

inputValidRef.addEventListener('blur', inputValidHandler);
inputValidRef.addEventListener('focus', onFocusHandler);

function inputValidHandler() {
  const inputLength = inputValidRef.value.length;
  const inputValidLength = +inputValidRef.dataset.length;

  // console.log(inputLength === inputValidLength);

  inputLength === inputValidLength
    ? inputValidRef.classList.add('valid')
    : inputValidRef.classList.add('invalid');
}

function onFocusHandler() {
  inputValidRef.value = '';
  inputValidRef.classList.remove('valid');
  inputValidRef.classList.remove('invalid');
}
