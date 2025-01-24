const { graphqlHTTP } = require("express-graphql");
const { schema } = require("../schema");

module.exports = (req, res) => {
  graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL interface for testing
  })(req, res);
};
