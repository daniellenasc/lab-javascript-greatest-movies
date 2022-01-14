// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const directors = moviesArr.map((currentElement) => {
    return moviesArr.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const moviesSpielberg = moviesArr.filter((currentElement) => {
    return currentElement.genre.includes('Drama') && currentElement.director === 'Steven Spielberg'
  })
  return moviesSpielberg.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  const media = moviesArr.reduce ((acc, currentElement) =>{
     Math.round((acc + currentElement.score / moviesArr.length)) * 100
    }, 0)
  return media
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  if (!moviesArr.genre.includes('Drama')){
    return 0
  }
  const dramaMovies = moviesArr.filter ((currentElement) => currentElement.genre.includes('Drama'));
  const scoreDrama = dramaMovies.reduce ((acc, currentElement) => {
    return Math.round(acc + currentElement.score / dramaMovies.length) * 100
  }, 0)
  return scoreDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let year = moviesArr.sort((a, b) => {
    if (a.year === b.year){
      return a.title.localeCompare(b.title)
    }  
      return a.year - b.year
    })  
    return year  
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
