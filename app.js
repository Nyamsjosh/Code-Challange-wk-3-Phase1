const apiUrl = 'http://localhost:3000/films'
const filmsList = document.getElementById('films')
const moviePoster = document.getElementById('moviePoster')
const movieTitle = document.getElementById('movieTitle')
const movieRuntime = document.getElementById('movieRuntime')
const movieShowtime = document.getElementById('movieShowtime')
const movieTickets = document.getElementById('movieTickets')
const movieDescription = document.getElementById('movieDescription')
const buyTicketButton = document.getElementById('buyTicketButton')

let currentMovie

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    //Creating the li for each movie
    data.forEach((movie) => {
      const li = document.createElement('li')
      li.textContent = `${movie.title}`
      li.classList.add('film', 'item')

      li.addEventListener('click', () => displayMovieDetails(movie))
      filmsList.appendChild(li)
    })

    // Display the first movie's details
    if (data.length > 0) {
      displayMovieDetails(data[0])
    }
  })

function displayMovieDetails(movie) {
  currentMovie = movie
  moviePoster.src = movie.poster
  movieTitle.textContent = movie.title
  movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`
  movieShowtime.textContent = `Showtime: ${movie.showtime}`
  updateAvailableTickets(movie)
  movieDescription.textContent = movie.description
}

function updateAvailableTickets(movie) {
  const availableTickets = movie.capacity - movie.tickets_sold
  movieTickets.textContent = `Available Tickets: ${availableTickets}`
  buyTicketButton.disabled = availableTickets <= 0
  buyTicketButton.textContent = availableTickets > 0 ? 'Buy Ticket' : 'Sold Out'
}

buyTicketButton.addEventListener('click', () => {
  if (currentMovie.tickets_sold < currentMovie.capacity) {
    currentMovie.tickets_sold += 1
    updateAvailableTickets(currentMovie)
  }
})
