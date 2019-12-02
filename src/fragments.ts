import { gql } from "apollo-boost" ;

export const FRAGMENT_USER = gql`
    fragment ItemUser on User {
        id
        firstName
        lastName
        email
    }
`;