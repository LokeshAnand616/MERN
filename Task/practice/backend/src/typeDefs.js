import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    
    type Product{
        id:ID!
        Product_name:String!
        Description:String!
        Price:Int!
    }

    type Query {
        getUser:User,
        getUserByName(name:String!):User
    }
    
    input CreateUserInput {
        id:ID!
        name: String
        email: String
        password: String
    }
    
    input CreateProduct{
        id:ID!
        Product_name:String!
        Description:String!
        Price:Int!
    }

    type Mutation {
        createUser(userData: CreateUserInput!):User,
        createProduct(productData: CreateProduct!):Product,
        deleteUserByID(id:ID!):User
    }
`;

export default typeDefs;
