const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

const  personalMovieDB = { 
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
};

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
if (personalMovieDB.count < 10) { 
    console.log('Ви переглянули мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { 
    console.log('Ви классик');
} else if (personalMovieDB.count >= 30) { 
    console.log('Ви кіноман');
} else { 
    console.log("Помилка");
}
console.log(personalMovieDB);