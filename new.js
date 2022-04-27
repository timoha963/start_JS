const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
const rezFilm = prompt("На сколько оцените фильм?", '');
personalMovieDB.movies = {
    nameFilm: rezFilm
};


