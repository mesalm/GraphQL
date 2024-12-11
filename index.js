const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const cors = require("cors");
const connectDB = require("./DB");
const dotenv = require("dotenv");
dotenv.config();
connectDB(process.env.DB_URL);
const bodyParser = require("body-parser");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  const app = express();
  await server.start();
  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log("🚀 Server ready at http://localhost:4000/graphql");
  });
}

startServer();
