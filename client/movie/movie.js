
/*
document.addEventListener("DOMContentLoaded", async function () {
    const moviesList = document.getElementById("movies-list");

    try {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=426ac72ee1bb39de9a6eb8a109bd116b`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            // Manejar error
            moviesList.innerHTML = '<p>Error al cargar películas populares</p>';
            return;
        }

        const popularMovies = data.results;

        // Mostrar películas en el DOM
        popularMovies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.innerHTML = `
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            `;
            moviesList.appendChild(movieElement);
        });
    } catch (error) {
        // Manejar error de red u otros errores
        moviesList.innerHTML = '<p>Error al cargar películas populares</p>';
    }
});
*/

// moviesDisplay.js

async function displayPopularMovies() {
    const moviesList = document.getElementById("movies-list");

    try {
        const response = await fetch('/movies/popular');
        const data = await response.json();

        if (data.error) {
            // Manejar error
            moviesList.innerHTML = '<p>Error al cargar películas populares</p>';
            return;
        }

        const popularMovies = data.results;

        // Mostrar películas en el DOM
        popularMovies.forEach(movie => {
            const movieElement = createMovieElement(movie);
            moviesList.appendChild(movieElement);
        });
    } catch (error) {
        // Manejar error de red u otros errores
        moviesList.innerHTML = '<p>Error al cargar películas populares</p>';
    }
}

function createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
    `;
    return movieElement;
}

document.addEventListener("DOMContentLoaded", displayPopularMovies);
