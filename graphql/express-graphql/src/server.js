require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true, // Enable GraphQL Playground UI
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
