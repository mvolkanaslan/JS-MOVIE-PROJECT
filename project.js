import { uuidv4 } from "./uuid.js"
const movie_form = document.getElementById("movie_form")
const movie_title = document.getElementById("title");
const movie_director = document.getElementById("director");
const movie_image = document.getElementById("img_url");
const movie_descripton = document.getElementById("description")
const movie_list = document.getElementById("movies");
const clear_movies = document.getElementById("clear_movies");

const ui = new UI();
const storage = new MovieStorage();

eventListeners();

function eventListeners(e) {
    // addButton.addEventListener("click",addMovie);
    movie_form.addEventListener("submit", addMovie)
    window.addEventListener("load", listAllMovies);
    movie_list.addEventListener("click", deleteMovie);
    clear_movies.addEventListener("click",clearAllMovies)
}

function addMovie(e) {
    const id = uuidv4();
    const title = movie_title.value;
    const director = movie_director.value;
    const image = movie_image.value;
    const description = movie_descripton.value;
    //create a new movie object
    let newMovie = new Movie(id, title, director, image, description);

    // Add the movie UserInterface
    ui.addMovieToUI(newMovie);

    // Add the Movie Localstorage
    storage.addMovieToStorage(newMovie);

    //clear form
    movie_form.reset();


    e.preventdefault();
}
// reload movies from storage when window load`
function listAllMovies() {
    let movies = storage.getMoviesFromStorage();
    for (const movie of movies) {
        ui.addMovieToUI(movie)
    }
}

function deleteMovie(e) {
    let movieToDelete;
    if (e.target.attributes["id"].value === "delete-movie") {
        movieToDelete = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    }
    ui.deleteMovieFromUI(movieToDelete);
    storage.deleteMovieFromStorage(movieToDelete.attributes["id"].value)
}

function clearAllMovies(){
    movie_list.innerHTML = "";
    localStorage.clear();
}
