import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import "dotenv/config"

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
  
    await apolloServer.start(); 
    apolloServer.applyMiddleware({ app }); 
  
    app.listen(4000, () => {
      console.log("Server running at http://localhost:4000/graphql");
    });
  }

  startServer();