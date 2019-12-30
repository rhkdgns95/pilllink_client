import { gql } from "apollo-boost";
import { FRAGMENT_USER } from "../../fragments";

export const UPDATE_MY_PASSWORD = gql`
    mutation updateMyPassword(
        $currentPassword: String!
        $newPassword: String!
    ) {
        UpdateMyPassword(
            currentPassword: $currentPassword
            newPassword: $newPassword
        ) {
            ok
            error
        }
    }
`;
export const UPDATE_MY_RPFOILE = gql`
    mutation updateMyProfile(
        $email: String!
        $firstName: String!
        $lastName: String!
        $age: Int!
        $password: String
        $gender: Gender!
        $isAbroad: Boolean!
        $abroadAddress: String
        $addressList: Address
        $addressItem: String
        $nationality: Nationality
    ) {
        UpdateMyProfile(
            email: $email
            firstName: $firstName
            lastName: $lastName
            age: $age
            password: $password
            gender: $gender
            isAbroad: $isAbroad
            abroadAddress: $abroadAddress
            addressList: $addressList
            addressItem: $addressItem
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