export function searchMovies(movies, searchQuery) {
  const filteredMovies = movies.filter((item) => {
    return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return filteredMovies;
}

export function searchShortMovies(movies) {

  // if (isToggle) {
    const filteredMovies = movies.filter((item) => {
      return item.duration < 40;
    });
    return filteredMovies;
  // }
  // return movies;
}


// export function searchMovies(movies, searchQuery, isToggle) {
//   let filteredMovies = [];

//   if (isToggle) {
//     filteredMovies = movies.filter((item) => {
//       return (item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) && item.duration < 40);
//     });
//   } else {
//     filteredMovies = movies.filter((item) => {
//       return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//   }
//   return filteredMovies;
// }