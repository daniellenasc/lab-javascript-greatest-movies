// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie.director;
    })
    .filter(function (director, index, sourceArray) {
      return sourceArray.indexOf(director) === index;
    });
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
    return acc + currentElement.score / moviesArr.length
    }, 0)
  return parseFloat(media.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  if (!moviesArr.genre.includes('Drama')){
    return 0
  }
  
  const dramaMovies = moviesArr.filter ((currentElement) => currentElement.genre.includes('Drama'));
  const scoreDrama = dramaMovies.reduce ((acc, currentElement) => {
    return (acc + currentElement.score) / dramaMovies.length
  }, 0)
  return parseFloat(scoreDrama.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = [...arr]
  
  return newArr.sort((movie1, movie2) => {
    if (movie1.year === movie2.year){
      return movie1.title.localeCompare(movie2.title)
    }
  
    return movie1.year - movie2.year;
    
  })
 
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const result = arr.map((currentMovie) => currentMovie.title);
  result.sort((a, b) => a.localeCompare(b))  
  return result.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movieArr) {
  if (!movieArr.length) {
    return null;
  }

  const yearlyRates = {};
  const yearlyAverages = {};

  movieArr.map(function (movie) {
    if (!yearlyRates.hasOwnProperty(movie.year)) {
      yearlyRates[movie.year] = [];
      yearlyRates[movie.year].push(movie.rate);
    } else {
      yearlyRates[movie.year].push(movie.rate);
    }
  });

  const allYears = Object.keys(yearlyRates);

  allYears.map(function (year) {
    avg = yearlyRates[year].reduce(function (acc, rate, index, sourceArray) {
      if (index === sourceArray.length - 1) {
        acc += rate;

        return acc / sourceArray.length;
      }

      return acc + rate;
    });

    yearlyAverages[year] = parseFloat(avg.toFixed(2));
  });

  const orderedAverages = Object.entries(yearlyAverages).sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(orderedAverages);

  return `The best year was ${orderedAverages[0][0]} with an average rate of ${orderedAverages[0][1]}`;
}



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


