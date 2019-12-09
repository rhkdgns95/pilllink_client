import { gql } from "apollo-boost";

export const EMAIL_SIGNUP = gql`
    mutation emailSignUp(
        $firstName: String!
        $lastName: String!
        $gender: Gender!
        $age: Int!
        $nationality: Nationality!
        $isAbroad: Boolean!
        $email: String!
        $password: String!
        $address: String!
    ) {
        EmailSignUp(
            firstName: $firstName
            lastName: $lastName
            gender: $gender
            age: $age
            nationality: $nationality
            isAbroad: $isAbroad
            email: $email
            password: $password
            address: $address
        ) {
            ok
            error
            token
        }
    }
`;