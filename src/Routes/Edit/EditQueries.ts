import { gql } from "apollo-boost";

export const UPDATE_MY_RPFOILE = gql`
    mutation updateMyProfile(
        $firstName: String!
        $lastName: String!
        $age: Int!
        $password: String
        $gender: Gender!
        $address: String!
        $isAbroad: Boolean!
        $nationality: Nationality
    ) {
        UpdateMyProfile(
            firstName: $firstName
            lastName: $lastName
            age: $age
            password: $password
            gender: $gender
            address: $address
            isAbroad: $isAbroad
            nationality: $nationality
        ) {
            ok
            error
        }
    }
`;