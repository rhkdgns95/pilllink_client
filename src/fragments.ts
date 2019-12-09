import { gql } from "apollo-boost" ;

export const FRAGMENT_USER = gql`
    fragment ItemUser on User {
        id
        fullName
        firstName
        lastName
        email
        nationality
        gender
        age
        isAbroad
        address
    }
`;