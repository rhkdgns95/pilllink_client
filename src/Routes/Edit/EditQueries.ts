import { gql } from "apollo-boost";
import { FRAGMENT_USER } from "../../fragments";

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
            user {
                ...ItemUser
            }
        }
    }
    ${FRAGMENT_USER}
`;