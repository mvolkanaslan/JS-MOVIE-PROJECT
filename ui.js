function UI() {

}

UI.prototype.addMovieToUI = (movie) => {
    let movie_list = document.getElementById("movies");
    movie_list.insertAdjacentHTML("afterbegin", `<div id=${movie.id} class="card g-0 mt-3" >
     <div class="row g-0">
       <div class="col-md-8">
         <img src="${movie.img_url}" class="img-fluid rounded-start" alt="..." style="width: 100%;">
       </div>
       <div class="col-md-4">
         <div class="card-body">
           <ul class="list-group">
             <li class="list-group-item"><h5 class="card-title">${movie.title}</h5></li>
             <li class="list-group-item">Director : ${movie.director}</li>
             <li class="list-group-item">Description</li>
             <li class="list-group-item"><p class="card-text">${movie.description}</p></li>
           </ul>
           <div class="d-flex justify-content-end">
           <button type="button" id="delete-movie" class="btn btn-danger mt-2">Delete Movie</button>
           </div>
         </div>
       </div>
     </div>
   </div>`)
}


// delete the movie from User Interface
UI.prototype.deleteMovieFromUI = function (movieToDelete) {
    movieToDelete.remove();
}
