export function searchMovies(movies, searchQuery) {
  return movies.filter((item) => {
    return item.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
  });
}

export function searchShortMovies(movies) {
  return movies.filter((item) => {
    return item.duration < 40;
  });
}