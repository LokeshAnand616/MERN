// import { gql } from "apollo-server-express";

// const typeDefs = gql`
//   enum Role{
//     ADMIN,
//     USER
//   }
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//     role: Role!
//   }
//   type Product {
//     id: ID!
//     Product_name: String!
//     Description: String!
//     Price: Int!
//   }
//   type Auth {
//     user:User!,
//     token:String!
//   }
//   type Query {
//     getUser: [User]
//     getUserByName(name: String!): User
//     getProducts: [Product]
//   }
//   input CreateUserInput {
//     id: ID!
//     name: String!
//     email: String!
//     password: String!
//     confirmPassword: String!
//     role: String!
//   }

//   input CreateProduct {
//     id: ID!
//     Product_name: String!
//     Description: String!
//     Price: Int!
//   }

//   input CreateLogin{
//     email:String!,
//     password:String!
//   }

//   type Mutation {
//     createUser(userData: CreateUserInput!): User
//     createProduct(productData: CreateProduct!): Product
//     loginUser(loginData:CreateLogin!):Auth
//     deleteUserByID(id: ID!): String
//   }
// `;

// export default typeDefs;

import { gql } from "apollo-server-express";

const typeDefs = gql`
  enum Role {
    ADMIN
    USER
  }

  type User {
    name: String!
    email: String!
    role: Role!
  }

  type Auth {
    user: User!
    token: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
    role: Role!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    getUser: User
  }

  type Mutation {
    createUser(userData: UserInput!): User
    loginUser(loginData: LoginInput!): Auth
  }
`;
export default typeDefs;
