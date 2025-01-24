const { graphqlHTTP } = require("express-graphql");
const schema = require("../Schema");

module.exports = (req, res) => {
  // Use express-graphql to handle requests
  return graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", // Enable GraphiQL in development
  })(req, res);
};
