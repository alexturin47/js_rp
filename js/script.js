/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на 
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }



1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// "use strict";

// alert( +"Infinity" ); 
// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,

// 	start: function() {
// 		let num;
// 		do{
// 			num = parseInt(prompt("Сколько фильмоы вы уже посмотрели?", ""));
// 		}
// 		while (num === "" || num === null || isNaN(num));
// 		this.count = num;
// 	},

//   setMyFilms: function () {
//     for (let index = 0; index < 2; index++) {
//       let lastMovie;
//       let appraisal;
//       do {
//         lastMovie = prompt("Один из последних просмотенных фильмов?", "");
//       } while (lastMovie === null || lastMovie === "" || lastMovie.lenght > 50);
//       do {
//         appraisal = prompt("На сколько его оцените?", "");
//       } while (appraisal === null || appraisal === "" || appraisal.length > 50);
//       this.movies[lastMovie] = appraisal;
//     }
//   },
//   personalLevel: function () {
//     if (this.count < 10) {
//       alert("Просмотрено довольно мало фильмов");
//     } else if (this.count >= 10 && this.count <= 30) {
//       alert("Вы классический зритель");
//     } else if (this.count > 30) {
//       alert("Вы киноман");
//     } else {
//       alert("Произошла ошибка");
//     }
//   },
//   showMyDB: function () {
//     if (!this.privat) {
//       console.log(this);
//     }
//   },

//   writeYourGenres: function () {
//     let genre;

//     for (let i = 1; i <= 3; i++) {
//       do {genre = prompt(`Ваш любимый жанр под номером ${i}`, "");}
//       while (genre === null || genre === "");
//       this.genres[i - 1] = genre;
//     }
//     this.genres.forEach((item, i) => {
//       console.log(`Любимый жанр #${i + 1} - это ${item}`);
//     });
//   },

//   toggleVisibleMyDB: function () {
//     this.privat = !this.privat;
//   },
// };

// personalMovieDB.start();
// personalMovieDB.setMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.personalLevel();
// personalMovieDB.showMyDB();


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

const promosAdv = document.querySelector('.promo__adv'),
      promos = promosAdv.querySelectorAll('img'),
      bg = document.querySelector('.promo__bg'),
      films = document.querySelectorAll('.promo__interactive-item'),
      movieList = document.querySelector('.promo__interactive-list');


promos.forEach(item => {
    item.style.display = "none";
});
document.querySelector('.promo__genre').textContent = "ДРАМА";


bg.style.cssText = 'background:url("../img/bg.jpg") center center/cover no-repeat';

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((item, i) =>{
    movieList.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div></li>`;
});