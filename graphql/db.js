import fetch from 'node-fetch';

const API_URL = 'https://yts.am/api/v2/list_movies.json?';

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  
  const queryStrings = [];
  if (limit > 0) {
    queryStrings.push(`limit=${limit}`);
  }

  if (rating > 0) {
    queryStrings.push(`minimum_rating=${rating}`);
  }

  return fetch(`${API_URL}` + queryStrings.join('&'))
    .then(res => res.json())
    .then(json => json.data.movies);
};