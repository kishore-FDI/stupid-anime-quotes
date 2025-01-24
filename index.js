const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema");

const app = express();
const PORT = 3000;

// GraphQL API endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL interface for testing
  })
);

app.listen(PORT, () => {
  console.log(`Anime Quotes GraphQL API is running at http://localhost:${PORT}/graphql`);
});
