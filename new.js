const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let a = 0; a < 2; a++) {
    const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
    console.log(a, 'new');
    if (!nameFilm || nameFilm.length > 50) {
        a--;
        console.log('continue 1');
        continue;
    } else {
        console.log('yes name');
        const rating = prompt("На сколько оцените фильм?", '');
        if (!rating) {
            a--;
            console.log('continue 2');
            continue;
        } else {
            console.log('yes rait');
            personalMovieDB.movies[nameFilm] = rating;
        }         
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');   
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    alert('Вы классичесий зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

