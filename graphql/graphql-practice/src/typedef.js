import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUserData: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

export default typeDefs;
