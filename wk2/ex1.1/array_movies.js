// We're going to create a list of your 5 favorite (or least favorite, etc.) movies using an array. We'll then allow your user to add your list and then display those six movies using an alert.

// create an array with the title of your favorite movie titles
const topGrossingMovies2023 = ["barbie", "super mario bros movie", "spider man: across the spiderverse", "guardians of the galaxy: 3", "oppenheimer"]
// prompt the user to enter their favorite movie. Use the prompt() method to do this.
const yourFaveMovie = window.prompt("what is your favorite movie?")
// add the movie to the array using push or create a new array with concat
topGrossingMovies2023.push(yourFaveMovie)
console.log(topGrossingMovies2023);
// display full list of movies with toString() method
// Update your github repo with this exercise and then upload your exercise to your MCAD hosting and share a link to that url in this discussion. Ensure that URL is accessible.
console.log(toString(topGrossingMovies2023));