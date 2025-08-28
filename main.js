/* Задание на урок:
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");

    while(numberOfFilms === '' || numberOfFilms <= 0 || numberOfFilms === null || isNaN(numberOfFilms)) {
        console.log('Error')
        numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");
    }
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function rememberMyFilms() {

    // Вариант с while
// let count = 1
// while (count < 2) {
//     const lastMovie = prompt(
//         `Фильм ${count + 1}:  Один из последних просмотренных фильмов?`
//     );
//     const ratingLastMovie = prompt("На сколько вы оцениваете его?");
//
//     if (lastMovie != null && lastMovie.length < 50 && lastMovie !== '' && ratingLastMovie != null && ratingLastMovie.length < 50 && ratingLastMovie !== '') {
//         personalMovieDB.movies[lastMovie] = ratingLastMovie;
//         count++
//     } else {
//         console.log("Не прошли валидацию");
//     }
// }
// Вариант с do while
// let count = 1;
// do {
//     const lastMovie = prompt(
//         `Фильм ${count}:  Один из последних просмотренных фильмов?`
//     );
//     const ratingLastMovie = prompt("На сколько вы оцениваете его?");
//
//     if (lastMovie != null && lastMovie.length < 50 && lastMovie !== '' && ratingLastMovie != null && ratingLastMovie.length < 50 && ratingLastMovie !== '') {
//         personalMovieDB.movies[lastMovie] = ratingLastMovie;
//         count++;
//     } else {
//         console.log("Не прошли валидацию");
//     }
// } while (count <= 2);

    for (let i = 1; i <= 2; i++) {
        const lastMovie = prompt(
            `Фильм ${i}:  Один из последних просмотренных фильмов?`
        );
        const ratingLastMovie = prompt("На сколько вы оцениваете его?");

        if (lastMovie != null && lastMovie.length < 50 && lastMovie !== '' && ratingLastMovie != null && ratingLastMovie.length < 50 && ratingLastMovie !== '') {
            personalMovieDB.movies[lastMovie] = ratingLastMovie;
        } else {
            console.log("Не прошли валидацию");
            i--;
        }
    }
}
// rememberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log('"Вы киноман');
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalLevel()


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('Объект приватный');
    }
}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if(genre === '' || genre === null) {
            console.log('Error - Enter the movie genre')
            i--
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }
    }
    console.log(personalMovieDB);
}
writeYourGenres()
