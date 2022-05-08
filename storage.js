function MovieStorage(){

}

//add movie to localstorage
MovieStorage.prototype.addMovieToStorage = function(movie){
    let movies = this.getMoviesFromStorage();
    movies.push(movie);
    localStorage.setItem("movies",JSON.stringify(movies))

}
//get movies list from storage
MovieStorage.prototype.getMoviesFromStorage = function(){
    let movies = JSON.parse(localStorage.getItem("movies"));
    return movies ? movies : [];
}