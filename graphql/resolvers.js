const { searchMovies } = require("../api/tmdb.js");

const resolvers = {
  Query: {
    movies: (_, { keyword }) => searchMovies(keyword),
  },
};

module.exports = resolvers;
