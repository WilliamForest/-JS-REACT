'use strict';
let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
 }
 start();

 function detectPersonalLevel () { 
    if (personalMovieDB.count < 10) { 
   alert ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 || personalMovieDB < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}
}
 
 function remamberMyFilms () {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних фильмов?', '');
        let b = prompt('Какую оценку поставить данному фильму?', '');
          if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('All Done!');
          } else { i-- ;
          }
    }
 }
 remamberMyFilms();

detectPersonalLevel();

 function showMyDB () {
 if (personalMovieDB.privat == false){
    console.log(personalMovieDB);
 }

 }
 showMyDB();

function writeYourGenres() {
for (let i = 0; i < 3; i++){
    let res = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    personalMovieDB.genres[i] = res;
}
}
writeYourGenres();
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



