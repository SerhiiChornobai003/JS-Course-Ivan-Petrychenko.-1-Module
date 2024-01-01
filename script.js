
let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { 
        numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    }
}

start();
const  personalMovieDB = { 
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
};

    

function rememberMyFilms () { 
    for (let i = 0; i < 2; i++) { 
        const a = prompt("Один з останніх переглянутих фільмів?", ''),
        b = prompt("На скільки оціните його?", '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) { 
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else { 
            console.log('Error');
            i--;
        }
        
    }
}

rememberMyFilms();


function detectLevel () { 
    if (personalMovieDB.count < 10) { 
        console.log('Ви переглянули мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { 
        console.log('Ви классик');
    } else if (personalMovieDB.count >= 30) { 
        console.log('Ви кіноман');
    } else { 
        console.log("Помилка");
    }
}

detectLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() { 
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр за номером ${i}`);   
    }
}

writeYourGenres();