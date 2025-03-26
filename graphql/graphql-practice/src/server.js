import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typedef.js";
import resolvers from "./resolvers.js";

async function startServer() {
  const app = express();

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in .env file");
  }

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to MongoDB");

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
  });
}

startServer();
