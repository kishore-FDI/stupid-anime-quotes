const { graphqlHTTP } = require("express-graphql");
const { schema } = require("../schema");

module.exports = (req, res) => {
  if (req.method === "GET") {
    // For GET requests, return a simple response or status code
    return res.status(403).send("Access Denied");
  }

  // For POST requests, handle GraphQL queries
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", // Enable GraphiQL only in development
  })(req, res);
};
