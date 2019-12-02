import { gql } from "apollo-boost";
export const USER_LOGGED_IN = gql`
    mutation userLoggedIn($token: String!) {
        UserLoggedIn(token: $token) @client
    }
`;