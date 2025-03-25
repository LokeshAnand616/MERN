import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
    }

    type Query {
        getUserData: [User]
    }
`;

export default typeDefs;
