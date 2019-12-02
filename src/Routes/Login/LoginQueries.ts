import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql`
    query emailSignIn(
        $email: String!
        $password: String!
    ) {
        EmailSignIn(
            email: $email
            password: $password
        ) {
            ok
            error
            token
        }
    }
`;