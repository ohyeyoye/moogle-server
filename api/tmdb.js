const API_KEY = process.env.TMDB_API_KEY;
const axios = require("axios");

const searchMovies = keyword => {
  const url = "https://api.themoviedb.org/3/search/movie";
  const config = {
    params: {
      api_key: API_KEY,
      query: keyword,
    },
  };
  return axios
    .get(url, config)
    .then(res => {
      const { results } = res.data;
      let movies = [];
      results.map(({ id, title, vote_average, release_date }) =>
        movies.push({
          id,
          title,
          rating: vote_average,
          release_date,
        })
      );
      return movies;
    })
    .catch(err => err);
};

module.exports = {
  searchMovies,
};
