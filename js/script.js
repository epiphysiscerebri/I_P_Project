"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const lasTFilm = prompt('Один из последних просмотренных фильмов?', '');
const filmAssessment = prompt('На сколько оцениваете его?', '');
const filMAssessment = prompt('На сколько оцениваете его?', '');


const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMoviesDB.movies[lastFilm] = filmAssessment;
personalMoviesDB.movies[lasTFilm] = filMAssessment;

console.log(personalMoviesDB);