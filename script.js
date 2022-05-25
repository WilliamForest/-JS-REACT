'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов?', 'Фантастические твари'),
      b = prompt('Какую оценку поставить данному фильму?', '8.5'),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('Какую оценку поставить данному фильму?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);