const { searchMovies, getMovie } = require("../api/tmdb.js");

const resolvers = {
  Query: {
    movies: (_, { keyword }) => searchMovies(keyword),
    movie: (_, { id }) => getMovie(id),
  },
};

module.exports = resolvers;
