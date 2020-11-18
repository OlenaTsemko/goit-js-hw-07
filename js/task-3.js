/* Напиши скрипт для создания галлереи изображений по 
массиву данных.
Используй массив объектов images для создания тегов img 
вложенных в li. Для создания разметки используй шаблонные 
строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию 
вставки.
Добавь минимальное оформление галереи флексбоксами или 
гридами через css-классы.
*/

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector('#gallery');
// galleryRef.classList.add('gallery');
// // console.log(galleryRef);

// const createGalleryItem = (item) => {
//     const galleryItemEl = document.createElement('li');
//     galleryItemEl.classList.add('gallery-item')

//     const galleryImgEl = document.createElement('img');
//     galleryImgEl.src = item.url;
//     galleryImgEl.alt = item.alt;

//     galleryItemEl.append(galleryImgEl);
//     return galleryItemEl;
// }

// const galleryEl = images.map(image => createGalleryItem(image));

// galleryRef.append(...galleryEl);

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('gallery');

const createItemEl = ({ url, alt }) => `
<li class="gallery-item">
<img src="${url}" alt="${alt}">
</li>
`;

const getGalleryList = (arr) => {
  const galleryItems = arr.map(item => createItemEl(item))
    .join('');
  
  return galleryItems;
}

galleryRef.insertAdjacentHTML('beforeend', getGalleryList(images));
console.log(galleryRef);