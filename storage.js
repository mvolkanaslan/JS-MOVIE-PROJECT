function MovieStorage() {

}

//add movie to localstorage
MovieStorage.prototype.addMovieToStorage = function (movie) {
    let movies = this.getMoviesFromStorage();
    movies.push(movie);
    this.updateStorage(movies);

}
//get movies list from storage
MovieStorage.prototype.getMoviesFromStorage = function () {
    let movies = JSON.parse(localStorage.getItem("movies"));
    return movies ? movies : [];
}
//delete movie from storage
MovieStorage.prototype.deleteMovieFromStorage = function (id) {
    let movies = this.getMoviesFromStorage();
    movies = movies.filter(movie => {
        return movie.id != id;
    })
    this.updateStorage(movies);
}

MovieStorage.prototype.updateStorage = function (movies) {
    localStorage.setItem("movies", JSON.stringify(movies));
}