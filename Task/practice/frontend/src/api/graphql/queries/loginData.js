import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($loginData: CreateLogin!) {
    loginUser(loginData: $loginData) {
      user {
        name
      }
      token
    }
  }
`;