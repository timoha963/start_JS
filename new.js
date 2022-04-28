let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');   
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
            alert('Вы классичесий зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        } 
    },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        } else {
            console.log('personalMovieDB privat');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const likeGenres = prompt(`Ваш любимый жанр под номером ${i}?`, '');
            if (likeGenres) {
                personalMovieDB.genres[i-1] = likeGenres;
            } else {i--;}   
        }
        personalMovieDB.genres.forEach(function(value, index){
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};

personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
