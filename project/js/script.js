/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Задание 1
document.getElementsByClassName('promo__adv')[0].remove();

// Задание 2
const genre = document.getElementsByClassName('promo__genre')[0];
const div = document.createElement('div');
div.classList.add('promo__genre');
div.innerHTML = 'драма';
genre.replaceWith(div);

// Задание 3
const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// Задание 4 и 5

// const list = document.getElementsByClassName('promo__interactive-list');
// const item = document.getElementsByClassName('promo__interactive-item');
// const len = Object.assign({}, item);
// console.log(len.length);
// for (let i = 0; i < len.length; i++){
//     console.log(item[i]);
//     item[i].remove();
// }

const promoList = document.querySelector('.promo__interactive-list');
promoList.innerHTML = '';

movieDB.movies.sort();
movieDB.movies.forEach( (value, index) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">${index + 1}. ${value}
             <div class="delete"></div>
        </li>
    `;
});

