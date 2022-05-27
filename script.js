'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
  for (let i = 0; i < 2; i++){
    let a = prompt('Один из последних фильмов?', '');
    let b = prompt('Какую оценку поставить данному фильму?', '');
      if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('All Done!');
      } else { i-- ;
      }
}

if (personalMovieDB.count < 10) { 
    alert ('Просмотрено довольно мало фильмов');
 } else if (personalMovieDB.count >= 10 || personalMovieDB < 30) {
     alert('Вы классический зритель');
 } else if (personalMovieDB >= 30) {
     alert('Вы киноман!');
 } else {
     alert('Произошла ошибка!');
 }




