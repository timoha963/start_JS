const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let a = 0; a < 2; a++) {
    let nameFilm = prompt("Один из последних просмотренных фильмов?", "");
          
    if (!nameFilm || nameFilm.length > 50) {
        nameFilm = prompt("Один из последних просмотренных фильмов?", "");
    }

    const rating = prompt("На сколько оцените фильм?", '');
    personalMovieDB.movies[nameFilm] = rating;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
    
} else if (10 <= personalMovieDB.count <= 30) {
    alert('Вы классичесий зритель');
}
else if (30 < personalMovieDB.count) {
    alert('Вы киноман');

} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

