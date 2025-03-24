const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define a User type
  type User {
    id: ID!
    name: String!
    email: String!
  }

  # Queries (Read operations)
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  # Mutations (Create, Update, Delete operations)
  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String, email: String): User!
    deleteUser(id: ID!): String!
  }
`;

module.exports = typeDefs;
