import { gql } from "apollo-boost";

export const EMAIL_SIGNUP = gql`
    mutation emailSignUp(
        $firstName: String!
        $lastName: String!
        $gender: Gender!
        $age: Int!
        $nationality: Nationality!
        $isAbroad: Boolean!
        $abroadAddress: String
        $addressList: Address
        $addressItem: String
        $email: String!
        $password: String!
    ) {
        EmailSignUp(
            firstName: $firstName
            lastName: $lastName
            gender: $gender
            age: $age
            nationality: $nationality
            isAbroad: $isAbroad
            abroadAddress: $abroadAddress
            addressList: $addressList
            addressItem: $addressItem
            email: $email
            password: $password
        ) {
            ok
            error
            token
        }
    }
`;