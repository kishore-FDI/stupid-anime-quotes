const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("../schema");

const app = express();

// Set up the GraphQL endpoint
app.use("/graphql", (req, res, next) => {
    if (req.method === "GET") {
        return res.status(403).json({ error: "GET requests are not allowed." });
    }
    next();
}, graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL interface for testing
}));

// Start the server
const PORT = process.env.PORT || 4000; // Use the port specified by Vercel or default to 4000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
