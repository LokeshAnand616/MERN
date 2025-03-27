import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query GetProducts {
        getProducts {
            id
            Product_name
            Description
            Price
        }
    }
`;
