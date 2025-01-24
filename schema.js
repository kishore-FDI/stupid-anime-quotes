const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");

// Mock data for stupid anime quotes
const animeQuotes = [
  {
    anime: "Naruto",
    character: "Naruto Uzumaki",
    quote: "I'm not gonna run away, I never go back on my word! That's my nindo, my ninja way!",
  },
  {
    anime: "Dragon Ball Z",
    character: "Goku",
    quote: "Power comes in response to a need, not a desire. You have to create that need!",
  },
  {
    anime: "One Piece",
    character: "Monkey D. Luffy",
    quote: "I don’t want to conquer anything. I just think the guy with the most freedom in this whole ocean… is the Pirate King!",
  },
  {
    anime: "Attack on Titan",
    character: "Eren Yeager",
    quote: "What’s the point if those with the means and power do not fight?",
  },
];

// Define the AnimeQuote Type
const AnimeQuoteType = new GraphQLObjectType({
  name: "AnimeQuote",
  fields: () => ({
    quote: { type: GraphQLString },
    character: { type: GraphQLString },
    anime: { type: GraphQLString },
  }),
});

// Root Query to get random quotes
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    randomQuote: {
      type: AnimeQuoteType,
      resolve() {
        const randomIndex = Math.floor(Math.random() * animeQuotes.length);
        return animeQuotes[randomIndex];
      },
    },
    allQuotes: {
      type: new GraphQLList(AnimeQuoteType),
      resolve() {
        return animeQuotes;
      },
    },
    quotesByAnime: {
      type: new GraphQLList(AnimeQuoteType),
      args: { anime: { type: GraphQLString } },
      resolve(parent, args) {
        return animeQuotes.filter((q) =>
          q.anime.toLowerCase().includes(args.anime.toLowerCase())
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
