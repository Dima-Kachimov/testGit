const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const lastMovie = prompt("Один из последних просмотренных фильмов?");
  const ratingLastMovie = prompt("На сколько вы оцениваете его?");
  personalMovieDB.movies[lastMovie] = ratingLastMovie;
}

console.log(personalMovieDB);
