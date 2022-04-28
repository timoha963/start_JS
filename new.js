let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let a = 0; a < 2; a++) {
        const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
        if (!nameFilm || nameFilm.length > 50) {
            a--;
            continue;
        } else {
            const rating = prompt("На сколько оцените фильм?", '');
            if (!rating) {
                a--;
                continue;
            } else {
                personalMovieDB.movies[nameFilm] = rating;
            }         
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');   
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
        alert('Вы классичесий зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    } 
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    } else {
        console.log('personalMovieDB privat');
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}?`, '');
        personalMovieDB.genres[i] = genres;
    }
    
}

showMyDB();