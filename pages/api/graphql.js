const { graphqlHTTP } = require("express-graphql");
const { schema } = require("../../schema"); // Adjust the path based on the location of schema.js

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(403).json({ error: "Access Denied" }); // Respond to GET requests
  }

  return graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development", // Enable GraphiQL only in development
  })(req, res);
}
