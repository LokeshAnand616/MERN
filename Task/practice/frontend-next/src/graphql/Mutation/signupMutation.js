import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation ($userData: UserInput!) {
    createUser(userData: $userData) {
      name
      email
      role
    }
  }
`;
