const { GraphQLServer } = require("graphql-yoga");
require("dotenv").config();
const resolvers = require("./graphql/resolvers");

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log(`GraphQL Server Running...`));
