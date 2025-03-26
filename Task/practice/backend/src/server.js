import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './config/db.js';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;

async function startServer() {
    await connectDB();

    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(` Server running at http://localhost:${PORT}/graphql`);
    });
}

startServer().catch((err) => {
    console.error("Error starting server:", err);
});
