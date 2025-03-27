import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation($userData: CreateUserInput!){
    createUser(userData: $userData) {
      id,
      name,
      email,
      password,
    }
  }
  `;