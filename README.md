# Code-Challange-wk-3-Phase1

# Flatdango - Movie Ticket Booking Application

Welcome to Flatdango, a simple web application where users can browse and purchase movie tickets from Flatiron Movie Theater.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Bonus Features](#bonus-features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Flatdango is a mini web application developed for a movie theater, allowing users to view movie details, check available tickets, and purchase tickets for their desired shows. This project demonstrates fetching data from a local JSON server, dynamically updating the UI based on user interactions, and handling basic operations.

## Features

- **View Movie Details**: Displays details such as poster, title, runtime, showtime, and available tickets for the first movie on page load.
- **Movie List**: Shows a menu of all movies on the left side of the page.
- **Buy Ticket**: Allows users to purchase a ticket, updating the available ticket count on the front end.
- **Bonus Feature**:
  - Indicates "Sold Out" and updates UI when tickets for a movie are fully sold out.

## Setup Instructions

To run Flatdango locally, follow these steps:

1. **Clone the repository:**

   git clone `git@github.com:Nyamsjosh/Code-Challange-wk-3-Phase1.git`
   cd flatdango

2. **Install json-server:**

This project has no external dependencies apart from a local JSON server. Could you make sure you have json-server installed globally or locally?

`npm install -g json-server`

3. **Start JSON server:**

Run the JSON server using the provided db.json file.

`json-server --watch db.json`

Open the application:

Open index.html in your browser or host the project on a local server (e.g., using VS Code's GoLive extension).

## Usage

Upon opening the application (index.html), you will see the list of movies on the left and details of the first movie on the right.
Click on a movie title in the list to view details of that movie.
Click the "Buy Ticket" button to purchase a ticket for the selected movie. The available ticket count will be updated accordingly.

## Bonus Features

Click on a movie in the menu on the page's left to display the movie's details.
Indicate "Sold Out" and update UI when tickets for a movie are fully sold out.

## Technologies Used

HTML
CSS
JavaScript
JSON Server (for backend data simulation)

## Contributing

The project contributed to :

- [Bob Oyier](https://github.com/oyieroyier/)
- [Titus Ouko](https://github.com/costamay)

and maintained by:

- [Joshua Nyambane](https://github.com/Nyamsjosh)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
