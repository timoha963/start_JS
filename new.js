const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    },
    rememberMyFilms: function(){
        for (let a = 0; a < 2; a++) {
            personalMovieDB.count = prompt("Один из последних просмотренных фильмов?", "");
            if (!personalMovieDB.count || personalMovieDB.count.length > 50) {
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
            let genres = prompt(`Введите ваши любимые жанры через запятую`, '');
            if (genres === '' || genres == null) {
                console.log('no true');
                i--;
            } else {
                personalMovieDB.genres  = genres.split(', ');
                personalMovieDB.genres.sort();
            }   
        }
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }

};