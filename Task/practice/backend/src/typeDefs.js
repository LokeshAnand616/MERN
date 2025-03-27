import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Product {
    id: ID!
    Product_name: String!
    Description: String!
    Price: Int!
  }
  type Auth {
    user:User,
    token:String!
  }

  type Query {
    getUser: [User]
    getUserByName(name: String!): User
    getProducts: [Product]
  }

  input CreateUserInput {
    id: ID!
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input CreateProduct {
    id: ID!
    Product_name: String!
    Description: String!
    Price: Int!
  }

  input CreateLogin{
    email:String!,
    password:String!
  }

  type Mutation {
    createUser(userData: CreateUserInput!): User
    createProduct(productData: CreateProduct!): Product
    loginUser(loginData:CreateLogin!):Auth
    deleteUserByID(id: ID!): String
  }
`;

export default typeDefs;
