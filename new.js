const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let a = 0; a < 2; a++) {
    const nameFilm = prompt("Один из последних просмотренных фильмов?", ""),
          rating = prompt("На сколько оцените фильм?", '');
    if (!nameFilm || nameFilm.length > 50) {
        const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
    };
    personalMovieDB.movies[nameFilm] = rating;
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
    ('Вы классичесий зритель');
} else if (10 <= personalMovieDB.count <= 30) {
    alert('Вы киноман');
}
else if (30 < personalMovieDB.count) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

