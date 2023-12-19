const apiKey = '0fcff4e02ae310d6aa49e8a3396e69cd';
const baseUrl = 'https://api.themoviedb.org/3';

const getByActorForm = document.querySelector('#getbyactorForm');
const responseContainer = document.querySelector('.response-container');
const getByActorFormInput = document.querySelector('.actorInput');
const formContainer = document.querySelectorAll('.form-container');
const getByYearForm = document.querySelector('#getbyyearForm');
const getByYearFormInput = document.querySelector('.year-input');
const getByGenreForm = document.querySelector('#getbygenreForm');
const selectEl = document.querySelector('#genres');



formContainer.forEach(container => container.addEventListener('click', function (e) {
    document.querySelectorAll('.form-area--hidden').forEach(area => area.hidden = true);
    const form = e.currentTarget.firstElementChild;
    const { id } = e.currentTarget;
    const areaToShow = form.querySelector(`[aria-labelledby="${id}"]`);
    areaToShow.hidden = false;
}));

getByActorForm.addEventListener('submit', function (e) {
    e.preventDefault();
    getPerson();
});

function getPerson() {
    fetch(`${baseUrl}/search/person?api_key=${apiKey}&query=${getByActorFormInput.value}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.results && data.results.length > 0) {
                getMovieListByPersonId(data.results[0].id);
            } else {
                responseContainer.innerHTML = '<p class="error-message">No results.</p>'
            }
        })
        .catch(err => console.log(err));
}

function getMovieListByPersonId(id) {
    fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&with_people=${id}`)
        .then(response => response.json())
        .then(data => {
            responseContainer.innerHTML = '';
            if (data && data.results && data.results.length > 0) {
                data.results.map(movie => {
                    console.log(data)
                    getMovies(movie.title, movie.poster_path, movie.overview, movie.vote_average);
                })
            };
        })
        .catch(err => console.log(err));
}


getByGenreForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const index = selectEl.options.selectedIndex;
    fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${selectEl.options[index].value}`)
        .then(response => response.json())
        .then(data => {
            responseContainer.innerHTML = '';
            data.results.map(movie => {
                getMovies(movie.title, movie.poster_path, movie.overview, movie.vote_average);
            });
        })
        .catch(err => console.log(err));
})

getByYearForm.addEventListener('submit', function (e) {
    e.preventDefault();
    fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&year=${getByYearFormInput.value}`)
        .then(response => response.json())
        .then(data => {
            responseContainer.innerHTML = '';
            data.results.map(movie => {
                getMovies(movie.title, movie.poster_path, movie.overview, movie.vote_average);
            });
        })
        .catch(err => console.log(err));
})

// Base function used in all fetch data functions to display movies in DOM.

function getMovies(title, src, overview, voteAverage) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card--front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('card--back');
    cardFront.innerHTML = `
    <img class="movie-img" loading="lazy" src="https://image.tmdb.org/t/p/original/${src}">
    <h3>${title}</h3>
    <span><i class="fa-regular fa-star"></i> Ratings: ${voteAverage}</span>
    `;
    cardBack.innerHTML = `
    <h3>Preview - ${title}</h3>
    <hr>
    <p>${overview}</p>
    `;

    movieCard.appendChild(cardFront);
    movieCard.appendChild(cardBack);
    responseContainer.appendChild(movieCard);

    movieCard.addEventListener('click', function () {
        this.classList.toggle('flipped')
    })
}

//Create Select elements' options from API. Fetch genres from API and put them into option elements.

(function getGenres() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => data.genres.map(genre => {
            createSelectGenreOptions(genre.id, genre.name);
        }))
        .catch(err => console.log(err));
})();

function createSelectGenreOptions(id, name) {
    const option = document.createElement('option');
    option.innerText = name;
    option.value = id;
    selectEl.appendChild(option);
};


