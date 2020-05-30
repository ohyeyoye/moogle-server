const API_KEY = process.env.TMDB_API_KEY;
const axios = require("axios");
const isEmpty = require("is-empty");

const searchMovies = keyword => {
  if (isEmpty(keyword)) return [];
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
      results.map(result => {
        const {
          id,
          title,
          overview,
          vote_average,
          release_date,
          poster_path,
        } = result;
        const posterPath = poster_path
          ? "http://image.tmdb.org/t/p/w500" + poster_path
          : null;
        movies.push({
          id,
          title,
          overview,
          rating: vote_average,
          release_date,
          poster_path: posterPath,
        });
      });
      return movies;
    })
    .catch(err => err);
};

const getMovie = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const config = {
    params: {
      api_key: API_KEY,
    },
  };
  return axios
    .get(url, config)
    .then(res => {
      const {
        id,
        title,
        overview,
        vote_average,
        release_date,
        poster_path,
      } = res.data;
      const posterPathBaseURL = "http://image.tmdb.org/t/p/w500";
      return {
        id,
        title,
        overview,
        rating: vote_average,
        release_date,
        poster_path: posterPathBaseURL + poster_path,
      };
    })
    .catch(err => err);
};

module.exports = {
  searchMovies,
  getMovie,
};
