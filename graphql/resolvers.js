const { people, getById } = require("./db");

const resolvers = {
  Query: {
    people: () => people,
    person: id => getById(id),
  },
};

module.exports = resolvers;
